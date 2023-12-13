import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlockInfo from '../components/blockInfo';
import TransactionInfo from '../components/transactionInfo';
import AddressInfo from '../components/addressInfo';
import Home from '../components/home';
import NoPage from '../components/noPage';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/block/:input" component={BlockInfo} />
        <Route exact path="/tx/:input" component={TransactionInfo} />
        <Route exact path="/address/:input" component={AddressInfo} />
        <Route exact path="*" component={NoPage}/>
      </Switch>
    </Router>
  );
};

export default Routes;
