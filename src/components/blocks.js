import { useEffect, useState } from "react";
import { getLatestBlock } from "../scripts";
import secondsAgo from "../utiles/time";
import { shortAddress } from "../utiles/shortAddress";

export default function Blocks() {
    const [latestBlocks, setLatestBlocks] = useState([]);

    useEffect(()=> {
        async function fetchData(){
            const latestBlockData = await getLatestBlock();

            setLatestBlocks(latestBlockData);
        }

        fetchData();
    }, []);

  return (
      <div className='Blocks'>
            <div className='latestBlocks'>
                <div className="lb">Latest Blocks</div>
                {latestBlocks.map((block, index) => (
                    <div key={index} className='blockItem'>
                        <div className='latestBlock'>
                            <img src={process.env.PUBLIC_URL + '/block.svg'} alt='block-icon' id='block-icon'></img>
                            <span id="spaceB">{block.number}</span>
                            <span id="timeB">{secondsAgo(block.timestamp)}</span>
                        </div>
                        <div className='recipient'>
                            <span>Fee Recipient {shortAddress(block.miner)}</span>
                            <span id='to'>{(block.transactions).length} txs <span id='blockTime'>in 12 seconds</span></span>
                        </div>
                    </div>
                ))}
            </div>
        </div>  
  );
}

