import Status from './components/status';
import Header from './components/header';
import Blocks from './components/blocks';
import Transactions from './components/transactions';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Status/>
      <div className='Container'>
        <Blocks/>
        <Transactions/>    
      </div>
    </div>    
  );
}

export default App;
