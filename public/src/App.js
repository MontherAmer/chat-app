import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { ThemeContext } from './context/ThemeContext';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import routes from './routes';
import Alert from './components/Alert';
import Loader from './components/Loader';

export default () => {
  const { alert, loader } = useSelector(state => state.utilsState);
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`App  ${theme}`}>
      <Router>
        <Switch>
          {routes.map(route => (
            <Route key={route.key} path={route.path} render={() => <route.component />} exact={route.exact} />
          ))}
        </Switch>
      </Router>
      <Alert show={alert.show} message={alert.message} type={alert.type} />
      {loader ? <Loader /> : null}
    </div>
  );
};
