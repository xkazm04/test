import { useState, useEffect } from 'react';
import { useApp } from '../../utils/appContext';
import Image from 'next/image';
import { usePrepareContractWrite, useContractEvent, useContractWrite, useNetwork, useAccount, useSwitchNetwork } from 'wagmi';
import axios from 'axios';

import SectionTitle from '../../../components/typography/SectionTitle';
import { RulesContainer, RulesTitle, WarningBox, Li, Row, ImageBox, Summary, Err, SumTitle, SumValue, SumHalf, SumRow, SumHead, EyeBox} from './StyleWrapper';
import FaqCard from '../../../components/cards/FaqCard';
import { BookIcon } from '../../../components/icons/Common';
import donation from '../../../abi/donation.json';
import Eye10 from '../../../public/Eye10.png';
import Rainbow from '../../../components/buttons/Rainbow';
import { moralisApiConfig } from '../../../data/moralisApiConfig';
import { GetFundingAddress } from '../../../helpers/GetContractAddress';
import { BetweenRow, Col } from '../../../components/format/Row';
import ButtonAlt from '../../../components/buttons/ButtonAlt';
import { MainContainer } from '../../../components/format/Box';
import LogResult from '../../LogResult';
import { ChainName } from '../../../helpers/MultichainHelpers';
import { G } from '../../../components/typography/ColoredTexts';

const texts = [
  {
    title: 'Rules to follow to be eligible of Eyeseek funding',
    points: [
      'Owner has to inform regularly backers with project updates',
      'Projects must create something to share with others',
      'Projects and backer statistics must be honest and clearly presented',
      "Projects can't involve prohibited items",
    ],
  },
];

const Create = ({ setStep }) => {
  const { appState } = useApp();
  const { address } = useAccount();
  const { chain } = useNetwork();
  const [chainName, setChainName] = useState('')
  const { pTitle, pDesc, category, subcategory, pm1, pType, pImageUrl, pChain, pSocial, pWeb, pm1Desc } = appState;
  const [ev, setEv] = useState(false);
  const [apiError, setApiError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [oid, setOid] = useState(null);
  const [ready, setReady] = useState(false);
  const { switchNetwork } = useSwitchNetwork();
  const [add, setAdd] = useState(process.env.NEXT_PUBLIC_AD_DONATOR);

  const handleBack = () => {
    setStep((prev) => (prev -= 1));
  };

  useEffect(() => {
    setAdd(GetFundingAddress(pChain));
    setChainName(ChainName(pChain))
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  // Update project with PID retrieved from blockchain
  const handleUpdateMoralis = async (pid) => {
    try {
      await axios.put(
        `${process.env.NEXT_PUBLIC_DAPP}/classes/Project/${oid}`,
        {
          pid: pid,
          state: 1, // Set active
        },
        moralisApiConfig
      );
      await setSuccess(true);
      await setApiError(false);
    } catch (err) {
      console.log(err);
      await setApiError(true);
    }
  };

  // Event upon successful project creation on blockchain
  // Update state and project id (pid) as key between web2/web3
  const useEv = async (event) => {
    const pid = event - 1;
    handleUpdateMoralis(pid);
    // if (Array.isArray(event)) {
    //     const pid = parseInt(event[2] && event[2]) - 1;
    // }
    await setEv(true);
  };

  // const fullValue = (pm1 * (10 ** 18));

  const { config, isError } = usePrepareContractWrite({
    address: add,
    abi: donation.abi,
    functionName: 'createFund',
    chainId: pChain,
    args: [pm1],
  });

  const { write, error, data } = useContractWrite(config);

  const handleContract = async () => {
    write?.();
  };

  const handleMoralis = async (st) => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_DAPP}/classes/Project`,
        {
          title: pTitle,
          description: pDesc,
          category: category,
          subcategory: subcategory,
          urlProject: pSocial,
          urlSocials: pWeb,
          goal: Number(pm1),
          descM: pm1Desc,
          type: pType,
          owner: address,
          state: st,
          chainId: pChain,
          bookmarks: [address], // Add owner to bookmark
          imageUrl: pImageUrl,
          verified: false,
        },
        moralisApiConfig
      );
      setOid(res.data.objectId);
      setApiError(false);
      if (pType === 'Stream'){
        setSuccess(true)
      }
    } catch (err) {
      console.log(err);
      setApiError(true);
    }
  };

  const handleSubmit = async () => {
      setReady(true);
      if (pType !== 'Stream') {
        await handleMoralis(0);
        await handleContract();
      } else if (pType === 'Stream') {
        await handleMoralis(1);
      }
  }

  useContractEvent({
    address: add,
    abi: donation.abi,
    eventName: 'FundCreated',
    chainId: pChain,
    listener: (event) => useEv(event),
    once: true,
  });

  return (
    <MainContainer>
      <SectionTitle title="Create project" subtitle="Meet crowdfunding rules" />
      <RulesContainer>
        <RulesTitle>Conditions and rules</RulesTitle>
        <WarningBox> 
          <Li>
            If any of your goals are not met in 30 days of crowdfunding period, collected resources will be returned back to the backers. No
            fees will be collected by Eyeseek.
          </Li>
          <Li>If your project is sucessfully funded, Eyeseek will collect 1% fee from the funding total.</Li>
          <Row>
            <ImageBox>
              <BookIcon width={150} />
            </ImageBox>
            <FaqCard answer={texts[0].title} points={texts[0].points} />
          </Row>
        </WarningBox>
        {address ? (
          <Summary>
            <SumHead>Summary</SumHead>
            <SumRow>
              <SumHalf align={'left'}>
                <Col><SumTitle>Funding type</SumTitle> <SumValue>{pType}</SumValue></Col>
                <Col><SumTitle>Title</SumTitle><SumValue>{pTitle}</SumValue></Col>
                <Col><SumTitle>Category</SumTitle><SumValue> {category}-{subcategory}</SumValue></Col>
                <Col><SumTitle>Destination chain</SumTitle><SumValue>{chainName}</SumValue></Col>
                <Col><SumTitle>Funding goal</SumTitle><SumValue>${pm1}</SumValue></Col>
                <Col><SumTitle>Owner</SumTitle><SumValue> {address}</SumValue></Col>
              </SumHalf>
              <EyeBox>
                <Image src={Eye10} alt="Eye" width={'200px'} height={'150px'} />{' '}
              </EyeBox>
              <SumHalf align={'right'}></SumHalf>
            </SumRow>
          </Summary>
        ) : (
          <Rainbow />
        )}
        {!ready ? (
          <>
            {chain && pChain === chain.id ? (
              <BetweenRow>
                <ButtonAlt onClick={handleBack} text='Back'/>
              {pType === 'Stream' ? (
                  <ButtonAlt onClick={handleSubmit} text='Create project'/>
                ) : <>
                    {error ?
                        <>
                          <ErrText text="Transaction failed or rejected" />
                          <ButtonAlt onClick={handleSubmit} text='Retry'/>
                        </> : <ButtonAlt disabled={!write} onClick={handleSubmit} text='Create project'/>
                      }
                    </>
                }
              </BetweenRow>
            ) : (
              <ButtonAlt onClick={() => { switchNetwork(pChain)}} text ='Wrong network' />
      )}
          </>
        ) : (
          <>
            {pType === 'Stream' ? (
               <LogResult apiError={apiError} type={'Stream project initialized'}/>
            ) : (
              <LogResult ev={ev} err={error} apiError={apiError} success={success} type={'Project creation initiated'} data={data}/>
            )}
          </>
        )}
         {success && <a href={`/project/${oid}`} rel="noopener noreferrer" target="_blank">
           You can find your project <G> here {`:)`}</G>
          </a>}
        
        {isError && pType !== 'Stream' && <Err>Smart contract error, check if all your data inputs are valid</Err>}
      </RulesContainer>
    </MainContainer>
  );
};

export default Create;
