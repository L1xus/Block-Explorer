import { useEffect, useState } from 'react';
import { getEthPrice, getGasPrice, getMarketCap, getLastBlock } from '../scripts/index';


export default function Status() {
  const [ethPrice, setEthPrice] = useState();
  const [gasPrice, setGasPrice] = useState();
  const [marketCap, setMarketCap] = useState();
  const [lastBlock, setLastBlock] = useState();

  useEffect(() => {
    async function fetchData() {
      const ethPriceData = await getEthPrice();
      const gasPriceData = await getGasPrice();
      const marketCapData = await getMarketCap();
      const lastBlockData = await getLastBlock();

      setEthPrice(ethPriceData);
      setGasPrice(gasPriceData);
      setMarketCap(marketCapData);
      setLastBlock(lastBlockData);
    }

    fetchData();
  }, []);

  return (
      <div className='Status'>
        <table border='1' className='Status-tab'>
          <tbody>
            <tr>
              <td><img src={process.env.PUBLIC_URL + '/ethereum-original.svg'} alt='eth-icon'></img>Ether Price: <span id='tab1'> {ethPrice} </span></td>
              <td>Gas Price: <span id='tab1'> {gasPrice} </span></td>
            </tr>
            <tr>
              <td>Market Cap: <span id='tab1'> {marketCap} </span></td>
              <td>Last Finalized Block: <span id='tab1'> {lastBlock} </span></td>
            </tr>
          </tbody>
        </table>
      </div>
  );
}
