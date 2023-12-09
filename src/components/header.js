import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Header() {
  const [input, setInput] = useState('');
  const history = useHistory();

  const getInput = (event) => {
    setInput(event.target.value);
  };

  const sub = (event) => {
    event.preventDefault();
    // Use the searchInput state value for further processing (e.g., API calls, etc.)
    if(Number(input)){
      history.push(`/block/${input}`);
      console.log('User input:', input);
    }
    // You can perform additional actions here using the searchInput value
  };

  return (
      <div className='Header'>
        <h1>BLOCK EXPLORER</h1>
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