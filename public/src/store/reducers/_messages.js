import { messagesActionTypes } from '../constants';

const initialState = {
  activeChat: {},
  messages: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case messagesActionTypes.ACTIVE_CHAT:
      return { ...state, activeChat: payload };
    case messagesActionTypes.MESSAGES_LIST:
      return { ...state, messages: payload };
    default:
      return state;
  }
};
