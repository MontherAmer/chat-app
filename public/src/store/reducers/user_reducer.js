import { userActionTypes } from '../constants';

const initialState = {
  _id: '',
  email: '',
  token: ''
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case userActionTypes.USER_LOGED_IN:
      console.log('payloadpayload ', payload);
      return { ...state, ...payload };
    case userActionTypes.USER_LOGED_OUT:
      return { ...state, _id: '', email: '', token: '' };
    default:
      return state;
  }
};
