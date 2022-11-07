import styled from 'styled-components'
import type { NextPage } from "next";
import { usePrepareContractWrite, useContractWrite, useNetwork, useContractEvent } from 'wagmi';
import {useState, useEffect} from 'react'
import Lottie from "react-lottie";
import axios from 'axios'

import donation from "../abi/donation.json";
import SectionTitle from '../components/typography/SectionTitle';
import successAlt from '../data/animations/successAlt.json';
import { GetFundingAddress } from '../components/functional/GetContractAddress';
import { moralisApiConfig } from '../data/moralisApiConfig';

const okAnim = {
    loop: false,
    autoplay: true,
    animationData: successAlt,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

const Container = styled.div`
    padding-left: 17%;
    padding-right: 17%;
    display: flex;
    flex-direction: row;
`

const Input = styled.div`
    display: flex;
    font-family: 'Neucha';
    letter-spacing: 0.3px;
    flex-direction: column;
    margin-top: 8%;
    max-width: 500px;
    gap: 15px;
    background: black;
    padding: 2%;
    border-radius: 15px;
`

const Animations = styled.div`
    position: relative;
`

const AnimBox = styled.div`
    position: absolute;
    left: 20%;
`

const AnimBox2 = styled.div`
    position: absolute;
    bottom: 10%;
`

const AnimBox3 = styled.div`
    position: absolute;
    bottom: 55%;
`

const I = styled.input`
    padding: 2px;
    padding-left: 5px;
`

const Distribute: NextPage = () => {
    const [identifier, setIdentifier] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);
    const [ev, setEv] = useState<boolean>(false);
    const {chain} = useNetwork();
    const [chainId, setChainId] = useState<number>(80001);
    const [apiError, setApiError] = useState<boolean>(false);
    const [project, setProject] = useState<any>({})
    const [bookmarks, setBookmarks] = useState([])

    const [add, setAdd] = useState<string>(process.env.NEXT_PUBLIC_AD_DONATOR);

    useEffect(() => {
        setAdd(GetFundingAddress(chain))
    }, [])

    /// Need to retrieve chainId, contract

    const handleId = (e: number) => {
        setIdentifier(e);
        getProjectDetail(e)
    }

    const getProjectDetail = async (id) => {
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_DAPP}/classes/Project?where={"pid":${id},"chainId": ${chainId} }`,moralisApiConfig)
            if (res.data.results.length > 0) {
              setProject(res.data.results[0])
              setBookmarks(res.data.results[0].bookmarks)
            }
            setApiError(false)
        } catch (err) {
            console.log(err)
            setApiError(true)
        }
    }
    
    const { config } = usePrepareContractWrite({
        addressOrName: add,
        contractInterface: donation.abi,
        chainId: chainId,
        functionName: 'distribute',
        args: [identifier, '0x2107B0F3bB0ccc1CcCA94d641c0E2AB61D5b8F3E'],
    })

    const { write } = useContractWrite(config)

    const handleContract = async () => { write?.()}

    useContractEvent({
        addressOrName: add,
        contractInterface: donation.abi,
        chainId: 80001,
        eventName: 'DistributionAccomplished',
        listener: (event) => handleListener(event),
        once: true
    })

    const handleListener = async(event) => {
        setLoading(true)
        await setEv(true);
        await setLoading(false)
        await handleNotifications()
        await updateProjectState()
    }

    const handleNotifications = async () => {
        if (bookmarks && bookmarks.length > 0 && project) {
          bookmarks.forEach(async (bookmark) => {
            await axios.post(`${process.env.NEXT_PUBLIC_DAPP}/classes/Notification`, {
              'title': 'Project funded',
              'description': `Project ${project.title} was successfully funded.`,
              'type': 'projectFunded',
              'project': `${project.objectId}`,
              'user': bookmark
            }, moralisApiConfig)
          })
        }
      }

    
      const updateProjectState = async () => {
        try {
            await axios.put(`${process.env.NEXT_PUBLIC_DAPP}/classes/Project/${project.objectId}`, {
                "state": 2 // Set to funded
            }, moralisApiConfig)
            await setApiError(false)
        } catch (err) {
            console.log(err)
            await setApiError(true)
        }
    }


    return <>
    <SectionTitle title='Distribute' subtitle='Reward distribution helper'/>
        <Container>
          <div> <p>For hackathon admin only...</p>
            <Input>
                <div>Pass project ID to distribute rewards from successfully funded project</div>
              <div><I type="number" placeholder={'Project ID'} value={identifier} onChange={(e) => handleId(Number(e.target.value))} />
              <button disabled={!write} onClick={()=>{handleContract()}}>DEW IT</button></div>
              {loading && <div>Processing...</div>}
              {ev && <div>Success!</div>}
              {apiError && <div>API Error</div>}
            </Input></div>
         {ev && <Animations><AnimBox><Lottie height={100} width={100} options={okAnim} /></AnimBox>
            <AnimBox3><Lottie height={100} width={100} options={okAnim} /></AnimBox3></Animations>}
        </Container>
    </>
}

export default Distribute