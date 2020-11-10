import WithAuth from '../hocs/WithAuth';
import WithOutAuth from '../hocs/WithOutAuth';

import Home from '../screens/Home';
import SignUp from '../screens/Auth/SignUp';
import LogIn from '../screens/Auth/LogIn';
import RedirectScreen from '../screens/Redirect';

export default [
  { path: '/', component: WithAuth(Home), exact: true, key: 1 },
  { path: '/signup', component: WithOutAuth(SignUp), exact: true, key: 2 },
  { path: '/login', component: WithOutAuth(LogIn), exact: true, key: 3 },
  { path: '/redirect', component: RedirectScreen, exact: false, key: 4 }
];
