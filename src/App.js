import Status from './components/status';
import Header from './components/header';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header/>
      <Status/>
      <div className='BTxs'>
        <table border='1' className='BTx'>
          <tbody>
            <tr>
              <td>Latest Blocks</td>
              <td>Latest Transactions</td>
            </tr>
            <tr>
              <td>
                <div id='block'>
                  18694570 
                  <span id='time'>9 seconds ago</span>
                </div>
                <div id='recipient'>
                  <span id='tab1'>Fee Recipient  0x1f9....6c326</span>
                  <span id='time'>12 seconds ago</span>
                </div>
              </td>
              <td>
                <div id='block'>
                  0x3724cf55.... 
                  <span id='time'>12 seconds ago</span>
                </div>
                <div id='recipient'>
                  <span id='tab1'>From 0x089....59875</span>
                  <span id='to'>To 0x1f9....6c326</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div id='block'>
                  18694570 
                  <span id='time'>9 seconds ago</span>
                </div>
                <div id='recipient'>
                  <span id='tab1'>Fee Recipient  0x1f9....6c326</span>
                  <span id='time'>12 seconds ago</span>
                </div>
              </td>
              <td>
                <div id='block'>
                  0x3724cf55.... 
                  <span id='time'>12 seconds ago</span>
                </div>
                <div id='recipient'>
                  <span id='tab1'>From 0x089....59875</span>
                  <span id='to'>To 0x1f9....6c326</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div id='block'>
                  18694570 
                  <span id='time'>9 seconds ago</span>
                </div>
                <div id='recipient'>
                  <span id='tab1'>Fee Recipient  0x1f9....6c326</span>
                  <span id='time'>12 seconds ago</span>
                </div>
              </td>
              <td>
                <div id='block'>
                  0x3724cf55.... 
                  <span id='time'>12 seconds ago</span>
                </div>
                <div id='recipient'>
                  <span id='tab1'>From 0x089....59875</span>
                  <span id='to'>To 0x1f9....6c326</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div id='block'>
                  18694570 
                  <span id='time'>9 seconds ago</span>
                </div>
                <div id='recipient'>
                  <span id='tab1'>Fee Recipient  0x1f9....6c326</span>
                  <span id='time'>12 seconds ago</span>
                </div>
              </td>
              <td>
                <div id='block'>
                  0x3724cf55.... 
                  <span id='time'>12 seconds ago</span>
                </div>
                <div id='recipient'>
                  <span id='tab1'>From 0x089....59875</span>
                  <span id='to'>To 0x1f9....6c326</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div id='block'>
                  18694570 
                  <span id='time'>9 seconds ago</span>
                </div>
                <div id='recipient'>
                  <span id='tab1'>Fee Recipient  0x1f9....6c326</span>
                  <span id='time'>12 seconds ago</span>
                </div>
              </td>
              <td>
                <div id='block'>
                  0x3724cf55.... 
                  <span id='time'>12 seconds ago</span>
                </div>
                <div id='recipient'>
                  <span id='tab1'>From 0x089....59875</span>
                  <span id='to'>To 0x1f9....6c326</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    
  );
}

export default App;
