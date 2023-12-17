import { Link } from "react-router-dom";

export default function NoPage() {

    return (
        <div className='Header'>
          <Link to="/" className='link'>
            <h1>YOU ARE WRONG SUCKER!</h1>
          </Link>
          <div className="koksal">
            <img src="https://media1.tenor.com/m/gfHsJGKVNLYAAAAd/koksal-koksalbaba.gif" alt="Koksal Koksalbaba GIF" className="koksal"></img>
          </div>
        </div>
    );
  }