import Status from './components/status';
import Header from './components/header';
import BTxs from './components/btxs';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header/>
      <Status/>
      <BTxs/>
    </div>    
  );
}

export default App;
