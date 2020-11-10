import Axios from 'axios';

export const authApis = {
  signUp: data => Axios.post('/api/auth/signup', data),
  logIn: data => Axios.post('/api/auth/login', data)
};
