import Status from './status';
import Header from './header';
import Blocks from './blocks';
import Transactions from './transactions';

function Home() {
  return (
    <div>
      <Header/>
      <Status/>
      <div className='Container'>
        <Blocks/>
        <Transactions/>    
      </div>
    </div>    
  );
}

export default Home;
