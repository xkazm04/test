import {TxStatus, LogRow, InfoTag, AnimBox, Ok, Err} from '../components/Log'
import Lottie from 'react-lottie';
import { loadingAnim, okAnim, errAnim } from '../components/animated/Animations';
import {useState, useEffect} from 'react'
import { ChainExplorer } from '../helpers/MultichainHelpers';
import { useNetwork } from 'wagmi';
import { B, G, R } from '../components/typography/ColoredTexts';
import ButtonAlt from '../components/buttons/ButtonAlt';

const LogResult = ({ ev, error, apiError, success, type, data }) => {
    const [explorer, setExplorer] = useState('https://mumbai.polygonscan.com/tx/');
    const {chain} = useNetwork()

    useEffect(() => {
      if (chain){
        setExplorer(ChainExplorer(chain.id))
      }
    },[])

    return <>
       {type !== 'Stream project initialized' ? <TxStatus>
                Transaction status
                <LogRow>
                  <InfoTag>Info</InfoTag> {type}
                </LogRow>
                <LogRow>
                  <InfoTag>Info</InfoTag> ...Bloockchain confirmation request
                </LogRow>
                {!ev && <LogRow>Please stay on page until transactions is confirmed</LogRow>}
                <LogRow>
                    <InfoTag>Blockchain: </InfoTag>
                  {ev ? <Ok>Success - Transaction was processed</Ok> : <>Usually processed in 5-10s</>}
                  {apiError && <Err>Failed - Transaction failed to process in DB</Err>}
                </LogRow>
                {error && <LogRow>
                    <InfoTag><R>Error</R></InfoTag><>Tx was rejected or failed, try again later or contact the team </>
                </LogRow>}
                {ev && <>
                  <LogRow>
                    <InfoTag>Info</InfoTag> Project transaction processed
                  </LogRow>
                  <LogRow>
                    {data && <><InfoTag>Info</InfoTag> 
                    <a href={`${explorer}${data.hash}`} target="_blank" rel="noopener noreferrer">
                     <B> Transaction detail in blockchain explorer</B>
                    </a></> }
                  </LogRow>
                  <LogRow>
                    <ButtonAlt text="Back to homepage" onClick={() => window.location.href = `/`}/>
                  </LogRow>
                  </>}
                {ev && success && ( <AnimBox> <Lottie height={100} width={100} options={okAnim} /> </AnimBox>)}
                {apiError || error && ( <AnimBox> <Lottie height={100} width={100} options={errAnim} />  </AnimBox> )}
                {!ev && !error && !success && ( <AnimBox> <Lottie height={100} width={100} options={loadingAnim} /> </AnimBox>)}
        </TxStatus>
    :
        <TxStatus>
                Transaction status
                <LogRow>
                  <InfoTag>Info</InfoTag> Project was initiated
                </LogRow>
                {!apiError && <>
                  <LogRow>
                    <InfoTag>Info</InfoTag> <G>Project was created with type: Stream</G>
                  </LogRow>
                  <LogRow>
                    <ButtonAlt text="Back to homepage" onClick={() => window.location.href = `/`}/>
                  </LogRow>
                </>}
                {apiError && ( <AnimBox> <Lottie height={100} width={100} options={errAnim} /></AnimBox> )}
          </TxStatus>
      }
    </>
}

export default LogResult