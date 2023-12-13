import { useState, useEffect } from "react";
import { getAddressInfo } from "../scripts";

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
            console.log((await addressInfoData.addressInfo));
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
                        <tr>
                            <td>dsst5</td>
                            <td>ewg</td>
                            <td>wrt</td>
                            <td>wt4w</td>
                            <td>4wy5e</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}