import Axios from 'axios';

export const userApis = {
  update: (_id, data) => Axios.put(`/api/user/${_id}`, data),
  getUserData: id => Axios.get(`/api/user/${id}`)
};
