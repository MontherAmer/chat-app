import Axios from 'axios';

export const userApis = {
  signUp: data => Axios.post('/api/signup', data),
  logIn: data => Axios.post('/api/login', data),
  update: (_id, data) => Axios.put(`/api/${_id}`, data)
};
