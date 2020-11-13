import Axios from 'axios';

export const userApis = {
  update: data => Axios.put(`/api/user`, data),
  getUserData: id => Axios.get(`/api/user/${id}`)
};
