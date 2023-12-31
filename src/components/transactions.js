import { useEffect, useState } from "react";
import { getLatestTransaction } from "../scripts";
import secondsAgo from "../utiles/time";
import { shortAddress, shortAddressEnd } from "../utiles/shortAddress";
import { Link } from "react-router-dom";

export default function Transactions() {
    const [latestTransactions, setLatestTransactions] = useState([]);
    const [timestamp, setTimestamp] = useState();

    useEffect(()=> {
        async function fetchData(){
            const latestTransactionData = await getLatestTransaction();

            setLatestTransactions(latestTransactionData.latestTransactions);
            setTimestamp(latestTransactionData.timestamp);
        }

        fetchData();
    }, []);

  return (
      <div className='Transactions'>
            <div className='latestTransactions'>
                <div className="lb">Latest Transactions</div>
                {latestTransactions.map((tx, index) => (
                    <div key={index} className='transactionItem'>
                        <div className='latestTransaction'>
                            <img src={process.env.PUBLIC_URL + '/transaction.svg'} alt='transaction-icon' id='icon'></img>
                            <Link to={`/tx/${tx.transactionHash}`} className='link'>
                                <span id="spaceB">{shortAddressEnd(tx.transactionHash)}</span>
                            </Link>
                            <span id="timeB">{secondsAgo(timestamp)}</span>
                        </div>
                        <div className='recipient'>
                            <Link to={`/address/${tx.from}`} className='link'>
                                <span>From {shortAddress(tx.from)}</span>
                            </Link>
                            <Link to={`/address/${tx.to}`} className='link'>
                                <span id='to'>To {shortAddress(tx.to)}</span>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>  
  );
}

