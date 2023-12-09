import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlockInfo from '../components/blockInfo';
import Home from '../components/home';
import NoPage from '../components/noPage';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="*" component={NoPage}/>
        <Route exact path="/block" component={BlockInfo} />
      </Switch>
    </Router>
  );
};

export default Routes;
