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

export async function getLatestBlock() {
  try {
    const latestBlock = await alchemy.core.getBlockNumber();
    const latestBlocks = [];
    for ( let i=0; i<5; i++){
      latestBlocks.push( await alchemy.core.getBlock(latestBlock - i) );
    }
    return latestBlocks;
  } catch (error) {
    console.error('Error fetching latest block: ', error);
    return null;
  }
}

export async function getLatestTransaction() {
  try {
    const latestBlock = await alchemy.core.getBlockNumber();
    const { transactions, timestamp } = await alchemy.core.getBlock(latestBlock);
    const latestTransactions = [];
    for ( let i=0; i<5; i++){
      latestTransactions.push( await alchemy.core.getTransactionReceipt(transactions[i]))
    }
    return {latestTransactions, timestamp};
  } catch (error) {
    console.error('Error fetching latest block: ', error);
    return null;
  }

}

export async function getBlockInfo(input) {
  try {
    let blockNum = parseInt(input);
    const blockNumber = await alchemy.core.getBlock(blockNum);
    return blockNumber;
  } catch ( error ) {
    console.error('Error fetching block number: ', error);
    return null;
  }
}

export async function getTransactionInfo(input) {
  try {
    let txHash = input;
    const ttx = await alchemy.core.getTransaction(txHash);
    const tx = await alchemy.core.getTransactionReceipt(txHash);
    return {tx, ttx};
  } catch ( error ) {
    console.error('Error fetching transaction details: ', error);
    return null;
  }
}

export async function getAddressInfo(input) {
  try {
    let address = input;
    const addressStatus = await alchemy.core.isContractAddress(address);
    const addressBalance = await alchemy.core.getBalance(address, 'latest');
    const addressTxCount = await alchemy.core.getTransactionCount(address);
    const addressInfo = await alchemy.core.getAssetTransfers({
      fromBlock: "0x0",
      fromAddress: input,
      toAddress: input,
      maxCount: 5,
      excludeZeroValue: true,
    })
    return {addressStatus, addressBalance, addressTxCount, addressInfo};
  } catch ( error ) {
    console.error('Error fetching Address details: ', error);
    return null;
  }
}
