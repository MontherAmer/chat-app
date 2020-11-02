import React from 'react';
import routes from './routes';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
console.log(routes);
const App = () => {
  return (
    <div className='App'>
      <Router>
        <Switch>
          {routes.map(route => (
            <Route key={route.key} path={route.path} render={() => <route.component />} exact={route.exact} />
          ))}
        </Switch>
      </Router>
    </div>
  );
};

export default App;
