import { messagesActionTypes } from '../constants';

const initialState = {
  activeChat: {}
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case messagesActionTypes.ACTIVE_CHAT:
      return { ...state, activeChat: payload };
    default:
      return state;
  }
};
