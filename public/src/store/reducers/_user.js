import { userActionTypes } from '../constants';

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case userActionTypes.STORE_USER_INFO:
      localStorage.setItem('LETS_CHAT_THEME', payload.theme);
      return { ...state, ...payload };
    case userActionTypes.REMOVE_USER_INFO:
      return {};
    case userActionTypes.USER_CONNECTIONS_LIST:
      return { ...state, contacts: payload };
    default:
      return state;
  }
};
