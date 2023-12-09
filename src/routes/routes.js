import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlockInfo from '../components/blockInfo';
import Home from '../components/home';
import NoPage from '../components/noPage';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/block/:input" component={BlockInfo} />
        <Route exact path="*" component={NoPage}/>
      </Switch>
    </Router>
  );
};

export default Routes;
