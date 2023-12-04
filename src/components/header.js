export default function Header() {
  return (
      <div className='Header'>
        <h1>BLOCK EXPLORER</h1>
        <span className='input'>
          <input type='text' name='input' placeholder='Search by Address / Txn Hash / Block / Token'></input>
          <button type='submit'>
            <img src={process.env.PUBLIC_URL + '/search.png'} alt='search-icon'></img>
          </button>
        </span>
      </div>
  );
}