import { useState, useEffect } from "react";
import { getBlockInfo } from "../scripts";

export default function BlockInfo(props) {
    const { match } = props;
    const input = match.params.input;
    const [blockInfo, setBlockInfo] = useState('');

    useEffect(()=> {
      async function fetchData(){
          const blockInfoData = await getBlockInfo(input);

          // console.log(parseInt(blockInfoData.gasLimit._hex));
          setBlockInfo(blockInfoData);
      }

      fetchData();
  }, [input]);

    return (
        <div className='BlockInfo'>
          <h1>BLOCK EXPLORER</h1>
          <h3 className="blockNum">Block <span id="bNum">#{blockInfo.number}</span></h3>
          <div className="blockBox">
            <div className="blockBoxItem">
              <h2 id="bbi">Block Height:</h2>
              <h2 id="bbii">{blockInfo.number}</h2>
            </div>
            <div className="blockBoxItem">
              <h2 id="bbi">Status:</h2>
              <h2 id="bbii">FINALIZED</h2>
            </div>
            <div className="blockBoxItem">
              <h2 id="bbi">Timestamp:</h2>
              <h2 id="bbii">{blockInfo.timestamp}</h2>
            </div>
            <div className="blockBoxItem">
              <h2 id="bbi">Transactions:</h2>
              <h2 id="bbii">{blockInfo.transactions?.length || 0} Transactions</h2>
            </div>
            <div className="blockBoxItem">
              <h2 id="bbi">Fee Recipient:</h2>
              <h2 id="bbii">{blockInfo.miner}</h2>
            </div>
            <div className="blockBoxItem">
              <h2 id="bbi">Hash:</h2>
              <h2 id="bbii">{blockInfo.hash}</h2>
            </div>
            <div className="blockBoxItem">
              <h2 id="bbi">Parent Hash:</h2>
              <h2 id="bbii">{blockInfo.parentHash}</h2>
            </div>
            <div className="blockBoxItem">
              <h2 id="bbi">Nonce:</h2>
              <h2 id="bbii">{blockInfo.nonce}</h2>
            </div>
            <div className="blockBoxItem">
              <h2 id="bbi">Gas Used:</h2>
              <h2 id="bbii">{parseInt(blockInfo.gasUsed?._hex || 0)}</h2>
            </div>
            <div className="blockBoxItem">
              <h2 id="bbi">Gas Target:</h2>
              <h2 id="bbii">18749325</h2>
            </div>
            <div className="blockBoxItem">
              <h2 id="bbi">Gas Limit:</h2>
              <h2 id="bbii">{parseInt(blockInfo.gasLimit?._hex || 0)}</h2>
            </div>
            <div className="blockBoxItem">
              <h2 id="bbi">Base Fee Per Gas:</h2>
              <h2 id="bbii">{parseInt(blockInfo.baseFeePerGas?._hex || 0)}</h2>
            </div>
          </div>
        </div>
    );
  }