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
    default:
      return state;
  }
};
