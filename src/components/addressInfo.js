import { useState, useEffect } from "react";
import { getAddressInfo } from "../scripts";
import { shortAddress, shortAddressEnd } from "../utiles/shortAddress";

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
            <h1>BLOCK EXPLORER</h1>
            <div className="addressStatus">
                {addressStatus ? <h2 id="adc">Contract: {input}</h2> : <h2 id="adc">Address: {input}</h2>}
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
                                <td>{shortAddressEnd(address.hash)}</td>
                                <td>{parseInt((address.blockNum.substring(2)), 16)}</td>
                                <td>{shortAddress(address.from)}</td>
                                <td>{shortAddress(address.to)}</td>
                                <td>{address.value} ETH</td>
                             </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </div>
    );
}