import styled from 'styled-components'
import { usePrepareContractWrite, useContractWrite, useAccount, useContractEvent } from "wagmi";
import {useState, useEffect} from 'react'
import axios from 'axios';
import BalanceComponent from '../../components/functional/BalanceComponent'
import ApprovedComponent from '../../components/functional/ApprovedComponent'
import Button from "../../components/buttons/Button";
import ApproveButton from "../../components/buttons/ApproveButton";
import { SuccessIcon } from "../../components/icons/Common";
import donation from "../../abi/donation.json";
import { useRouter } from 'next/router';

const DonateButtonWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-top: 3%;
  gap: 1rem;
`;

const Err = styled.div`
    position: absolute;
    color: red;
    font-family: 'Neucha';
    letter-spacing: 0.5px;
    bottom: -25px;
    font-size: 0.9em;
`


const DonateWrapper = ({amountM, amountD, pid, currency, bookmarks}) => {
    const { address } = useAccount();
    const token = process.env.NEXT_PUBLIC_AD_TOKEN
    const [explorer, setExplorer] = useState('https://mumbai.polygonscan.com/tx/')
    const [success, setSuccess] = useState(false)
    const [curr, setCurr] = useState(0)

    const router = useRouter()
    const { objectId } = router.query
    

    /// TBD after Axelar pass correct currency, until know we'll hardcode USDC = (EYE)

    const handleCurrency = (currency) => {
        if (currency === 'USDC') {
            setCurr(1)
        } else if (currency === 'DAI') {
            setCurr(2)
        } else if (currency === 'USDT') {
            setCurr(3)
        }
    }

    const useEv = (event) => {
        setSuccess(true);
        updateBookmark(bookmarks)
    }

    useContractEvent({
        addressOrName: process.env.NEXT_PUBLIC_AD_DONATOR,
        contractInterface: donation.abi,
        eventName: 'Donated',
        listener: (event) => useEv(event),
        once: true
    })

    useContractEvent({
        addressOrName: process.env.NEXT_PUBLIC_AD_DONATOR,
        contractInterface: donation.abi,
        eventName: 'MicroCreated',
        listener: (event) => useEv(event),
        once: true
    })


    const moralisConfig = {
        headers: {
          "X-Parse-Application-Id": `${process.env.NEXT_PUBLIC_DAPP_ID}`,
          "Content-Type": "application/json"
        }
      }

    const { config, error } = usePrepareContractWrite({
        addressOrName: process.env.NEXT_PUBLIC_AD_DONATOR,
        contractInterface: donation.abi,
        functionName: 'contribute',
        args: [amountM, amountD, pid, 1],
    });

    const { write, data } = useContractWrite(config);


    const handleSubmit = async () => {
        await write?.()
        // if (blockchain === 'polygon') {
        //     setExplorer('https://mumbai.polygonscan.com/tx/')
        // } else if (blockchain === 'bsc') {
        //     setExplorer('https://bscscan.com/tx/')
        // }
    }
    const sum = (parseInt(amountM) + parseInt(amountD));


    useEffect(() => {
        handleCurrency()
    }, [])


    const updateBookmark = async (bookmarks) => {
        const newBookmarks = [...bookmarks, address];
        try {
          await axios.put(`${process.env.NEXT_PUBLIC_DAPP}/classes/Project/${objectId}`, { 'bookmarks': newBookmarks }, moralisConfig)
        } catch (error) {
          console.log(error)
        }
    }

    return <div>
        <DonateButtonWrapper>
            {success ? <SuccessIcon /> : (
                <>
                    {address &&
                    <div>
                        <BalanceComponent address={address} token={token} amount={sum} />
                        <ApprovedComponent address={address} />
                    </div>}
                    <ApproveButton sum={sum} />
                </>
            )}
            <div>
                {!success && (
                    <>
                        {error ? <Button text='Donate' width={'200px'} error /> : <Button onClick={() => handleSubmit?.()} text='Donate' width={'200px'} />}
                    </>
                )}{(!error && success) && <a href={`${explorer}${data.hash}`} target="_blank" rel="noopener noreferrer"><Button text="Transaction detail" /></a>}
            </div>
            {error ? <Err>Insufficient balance or blockchain error</Err> : null}
        </DonateButtonWrapper>
    </div>
}

export default DonateWrapper