import { useEffect, useState } from "react";
import { getLatestBlock } from "../scripts";
import secondsAgo from "../utiles/time";
import { shortAddress } from "../utiles/shortAddress";

export default function BTxs() {
    const [latestBlocks, setLatestBlocks] = useState([]);

    useEffect(()=> {
        async function fetchData(){
            const latestBlockData = await getLatestBlock();

            setLatestBlocks(latestBlockData);
        }

        fetchData();
    }, []);

  return (
      <div className='BTxs'>
        <table border='1' className='BTx'>
          <tbody>
            <tr>
              <td>Latest Blocks</td>
              <td>Latest Transactions</td>
            </tr>
            {latestBlocks.map((block, index)=>(
                <tr key={index}>
                    <td>
                        <div id='block'>
                            {block.number} 
                            <span id='time'>{secondsAgo(block.timestamp)} seconds ago</span>
                        </div>
                        <div id='recipient'>
                            <span id='tab1'>Fee Recipient  {shortAddress(block.miner)}</span>
                            <span id='time'>12 seconds ago</span>
                        </div>
                    </td>
                    <td>
                        <div id='block'>
                            0x3724cf55.... 
                            <span id='time'>12 seconds ago</span>
                        </div>
                        <div id='recipient'>
                            <span id='tab1'>From 0x089....59875</span>
                            <span id='to'>To 0x1f9....6c326</span>
                        </div>
                    </td>
                </tr>
              
            ))}
          </tbody>
        </table>
      </div>    
  );
}

