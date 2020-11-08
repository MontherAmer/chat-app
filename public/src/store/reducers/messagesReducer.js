import { userActionTypes } from '../constants';

const initialState = {
  connectionId: '',
  messages: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};
