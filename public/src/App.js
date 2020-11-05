import React from 'react';
import { useSelector } from 'react-redux';
import routes from './routes';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Alert from './components/Alert';

const App = () => {
  const { alert } = useSelector(state => state.utilsState);
  return (
    <div className='App'>
      <Router>
        <Switch>
          {routes.map(route => (
            <Route key={route.key} path={route.path} render={() => <route.component />} exact={route.exact} />
          ))}
        </Switch>
      </Router>
      <Alert show={alert.show} message={alert.message} type={alert.type} />
    </div>
  );
};

export default App;
