import { useState } from "react";
import { useHistory, Link } from "react-router-dom";

export default function Header() {
  const [input, setInput] = useState('');
  const history = useHistory();

  const isValidTransactionHash = (tx) => {
    const transactionHashRegex = /^0x([A-Fa-f0-9]{64})$/;
  
    return transactionHashRegex.test(tx);
  };
  
  const isValidEthAddress = (address) => {
    const ethAddressOrENS = /^(0x)?[0-9a-fA-F]{40}$|^([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(eth)$/;
    return ethAddressOrENS.test(address);
  };

  const isNumberOrHash = (number) => {
    return !number.startsWith('0x');
  }

  const getInput = (event) => {
    setInput(event.target.value);
  };

  const sub = (event) => {
    event.preventDefault();
    // Use the searchInput state value for further processing (e.g., API calls, etc.)
    if (isValidTransactionHash(input)) {
      history.push(`/tx/${input}`);
    } else if (isValidEthAddress(input)) {
      history.push(`/address/${input}`);
    } else if (isNumberOrHash(input)) {
      history.push(`/block/${input}`);
    } else {
      history.push(`/${input}`);
    }
    // You can perform additional actions here using the searchInput value
  };

  return (
      <div className='Header'>
        <Link to="/" className='link'>
          <h1>BLOCK EXPLORER</h1>
        </Link>
        <form onSubmit={sub}>
          <span className='input'>
            <input type='text' name='input' placeholder='Search by Address / Txn Hash / Block / Token' value={input} onChange={getInput}></input>
            <button type='submit'>
              <img src={process.env.PUBLIC_URL + '/search.png'} alt='search-icon'></img>
            </button>
        </span>

        </form>
      </div>
  );
}