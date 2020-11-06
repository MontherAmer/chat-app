import { userActionTypes } from '../constants';

const initialState = {
  _id: '',
  email: '',
  token: '',
  rememberMe: false,
  connections: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case userActionTypes.USER_LOGED_IN:
      console.log('payloadpayloadpayload ', payload);
      return { ...state, ...payload };
    case userActionTypes.USER_LOGED_OUT:
      return { ...state, _id: '', email: '', token: '' };
    case userActionTypes.USER_UPDATED:
      console.log('PAYLOAD ', payload);
      return { ...state, ...payload };
    case userActionTypes.USER_CONNECTIONS_LIST:
      return { ...state, connections: payload };
    default:
      return state;
  }
};
