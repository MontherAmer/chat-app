import WithAuth from '../hocs/WithAuth';

import Home from '../screens/Home';
import SignUp from '../screens/SignUp';
import LogIn from '../screens/Login';

export default [
  { path: '/', component: WithAuth(Home), exact: true, key: 1 },
  { path: '/signup', component: SignUp, exact: true, key: 2 },
  { path: '/login', component: LogIn, exact: true, key: 1 }
];
