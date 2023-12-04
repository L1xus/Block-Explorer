import { Alchemy, Network } from 'alchemy-sdk';

const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

export async function getEthPrice() {
  try {
    const res = await fetch(`https://api.coingecko.com/api/v3/coins/ethereum`);
    const ethPrice = await res.json();
    return '$ ' + parseFloat(ethPrice.market_data.current_price.usd).toFixed(2);
  } catch (error) {
    console.error('Error fetching eth price', error);
    return null;
  }
}

export async function getGasPrice() {
  try {
    const gasPrice = await alchemy.core.getGasPrice();
    return (parseInt(gasPrice._hex) / 10 ** 9).toFixed(0) + ' GWEI';
  } catch (error) {
    console.error('Error fetching gas price:', error);
    return null;
  }
}

export async function getMarketCap() {
  try {
    const res = await fetch(`https://api.coingecko.com/api/v3/coins/ethereum`);
    const ethSupply = await res.json();
    return '$ ' + (ethSupply.market_data.market_cap.usd).toLocaleString();
  } catch (error) {
    console.error('Error fetching Ethereum market cap:', error);
    return null;
  }
}

export async function getLastBlock() {
  try {
    const lastBlock = await alchemy.core.getBlockNumber();
    return lastBlock;
  } catch (error) {
    console.error('Error fetching last block:', error);
    return null;
  }
}
