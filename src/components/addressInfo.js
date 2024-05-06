import { useState, useEffect } from "react";
import { getAddressInfo } from "../scripts";
import { shortAddress, shortAddressEnd } from "../utiles/shortAddress";
import { Link } from "react-router-dom";

export default function AddressInfo(props) {
    const { match } = props;
    const input = match.params.input;
    const [addressStatus, setAddressStatus] = useState('');
    const [addressBalance, setAddressBalance] = useState('');
    const [addressTxCount, setAddressTxCount] = useState('');
    const [addressInfo, setAddressInfo] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const addressInfoData = await getAddressInfo(input);

            setAddressStatus(addressInfoData.addressStatus);
            setAddressBalance(addressInfoData.addressBalance);
            setAddressTxCount(addressInfoData.addressTxCount);
            setAddressInfo(addressInfoData.addressInfo);
            console.log((addressInfoData.addressInfo));
        }

        fetchData();
    }, [input])

    return (
        <div className="AddressInfo">
            <Link to="/" className='link'>
                <h1>BLOCK EXPLORER</h1>
            </Link>
            <div className="addressStatus">
                <div className="giftAdded">
                    <Link to={`/winner`} className='link'>
                        <img src={process.env.PUBLIC_URL + '/giftbox.png'} alt='gift-icon' id='gift'></img>
                    </Link>
                    {addressStatus ? <h2 id="adc">Contract: {input}</h2> : <h2 id="adc">Address: {input}</h2>}
                </div>
                <h3 id="adb">
                    <span style={{color: '#7e8ea2'}}>ETH Balance: </span>    
                    {addressBalance?._hex ? (parseInt(((addressBalance?._hex).substring(2)),16))/10**18 + ' ETH' : ''}
                </h3>
            </div>
            <div className="addressBox">
                <p>Total of {addressTxCount} Transactions found</p>
                <table className="AddressTab">
                    <thead>
                        <tr>
                            <th>Transaction Hash</th>
                            <th>Block</th>
                            <th>From</th>
                            <th>To</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {addressInfo.transfers && addressInfo.transfers.map((address, index) => (
                            <tr key={index} className="AddressTr">
                                <td>
                                    <Link to={`/tx/${address.hash}`} className='link'>
                                        {shortAddressEnd(address.hash)}
                                    </Link>
                                </td>
                                <td>
                                    <Link to={`/block/${parseInt((address.blockNum.substring(2)), 16)}`} className='link'>
                                        {parseInt((address.blockNum.substring(2)), 16)}
                                    </Link>
                                </td>
                                <td>
                                    <Link to={`/address/${address.from}`} className='link'>
                                        {shortAddress(address.from)}
                                    </Link>
                                </td>
                                <td>
                                    <Link to={`/address/${address.to}`} className='link'>
                                        {shortAddress(address.to)}
                                    </Link>
                                </td>
                                <td>{address.value} ETH</td>
                             </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </div>
    );
}
