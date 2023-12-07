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
              <td>
                <img src={process.env.PUBLIC_URL + '/ethereum-original.svg'} alt='eth-icon' id='icon'></img>
                <span id='space'>Ether Price:</span> 
                <span id='tab1'> {ethPrice} </span></td>
              <td>
                <img src={process.env.PUBLIC_URL + '/gas-price.svg'} alt='gas-icon' id='icon'></img>
                <span id='space'>Gas Price:</span>
                <span id='tab1'> {gasPrice} </span>
                </td>
            </tr>
            <tr>
              <td>
                <img src={process.env.PUBLIC_URL + '/market-cap.svg'} alt='cap-icon' id='icon'></img>
                <span id='space'>Market Cap:</span> 
                <span id='tab1'> {marketCap} </span></td>
              <td>
                <img src={process.env.PUBLIC_URL + '/last-block.svg'} alt='lblock-icon' id='icon'></img>
                <span id='space'>Last Finalized Block:</span>  
                <span id='tab1'> {lastBlock} </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  );
}
