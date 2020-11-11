import { userActionTypes } from '../constants';

const initialState = { _id: '', email: '', name: '', language: '', image: '', connections: '', theme: 'light' };

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case userActionTypes.STORE_USER_INFO:
      return { ...state, ...payload };
    case userActionTypes.REMOVE_USER_INFO:
      return { ...state, _id: '', email: '', name: '', language: '', image: '', connections: '', theme: 'light' };
    case userActionTypes.USER_UPDATED:
      return { ...state, ...payload };
    case userActionTypes.USER_CONNECTIONS_LIST:
      return { ...state, connections: payload };
    default:
      return state;
  }
};
