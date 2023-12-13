import { useState, useEffect } from "react";
import { getTransactionInfo } from "../scripts";
import { Utils } from "alchemy-sdk";

export default function TransactionInfo(props) {
    const { match } = props;
    const input = match.params.input;
    const [txInfo, setTxInfo] = useState('');
    const [tx_Info, setTx_Info] = useState('');

    useEffect(()=> {
      async function fetchData(){
          const txInfoData = await getTransactionInfo(input);

          console.log(txInfoData);
          setTxInfo(txInfoData.tx);
          setTx_Info(txInfoData.ttx);
      }

      fetchData();
  }, [input]);

  const status = (s) => {
    if(s) return "Success";
    else return "Failure";
  };
  
    return (
        <div className='BlockInfo'>
          <h1>BLOCK EXPLORER</h1>
          <h3 className="blockNum">Transaction Details</h3>
          <div className="blockBox">
            <div className="blockBoxItem">
              <h2 id="bbi">Transaction Hash:</h2>
              <h2 id="bbii">{txInfo.transactionHash}</h2>
            </div>
            <div className="blockBoxItem">
              <h2 id="bbi">Status:</h2>
              <h2 id="bbii">{status(txInfo.status)}</h2>
            </div>
            <div className="blockBoxItem">
              <h2 id="bbi">Block:</h2>
              <h2 id="bbii">{txInfo.blockNumber}</h2>
            </div>
            <div className="blockBoxItem">
              <h2 id="bbi">Confirmation:</h2>
              <h2 id="txConf">{txInfo.confirmations} Block Confirmations</h2>
            </div>
            <div className="blockBoxItem">
              <h2 id="bbi">From:</h2>
              <h2 id="bbii">{txInfo.from}</h2>
            </div>
            <div className="blockBoxItem">
              <h2 id="bbi">To:</h2>
              <h2 id="bbii">{txInfo.to}</h2>
            </div>
            <div className="blockBoxItem">
              <h2 id="bbi">Value:</h2>
              <h2 id="bbii">{!isNaN(tx_Info.value)? Utils.formatEther(parseInt((tx_Info.value?._hex.substring(2)),16)): null} ETH</h2>
            </div>
            <div className="blockBoxItem">
              <h2 id="bbi">Tx Fee:</h2>
              <h2 id="bbii">{(!isNaN(txInfo.effectiveGasPrice) && !isNaN(txInfo.gasUsed))? Utils.formatEther((txInfo.effectiveGasPrice * txInfo.gasUsed).toString()): null} ETH</h2>
            </div>
            <div className="blockBoxItem">
              <h2 id="bbi">Gas Price:</h2>
              <h2 id="bbii">{!isNaN(txInfo.effectiveGasPrice)? Utils.formatEther(parseInt((txInfo.effectiveGasPrice?._hex.substring(2)),16)): null} ETH</h2>
            </div>
            <div className="blockBoxItem">
              <h2 id="bbi">Gas Limit & Usage by Tx:</h2>
              <h2 id="bbii">{!isNaN(tx_Info.gasLimit)? parseInt((tx_Info.gasLimit?._hex.substring(2)),16): null} | {!isNaN(txInfo.gasUsed)? parseInt((txInfo.gasUsed?._hex.substring(2)),16): null}</h2>
            </div>
            <div className="blockBoxItem">
              <h2 id="bbi">Transaction Index:</h2>
              <h2 id="bbii">{txInfo.transactionIndex}</h2>
            </div>
            <div className="blockBoxItem">
              <h2 id="bbi">Input Data:</h2>
              <h2 id="bbii">
                <textarea value={tx_Info.data} readOnly rows="4" id="txData"></textarea>
              </h2>
            </div>
          </div>
        </div>
    );
  }