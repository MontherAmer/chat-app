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
    case messagesActionTypes.NEW_MESSAGE_CREATED_FROM_RESPONSE:
      console.log('PPPPPPPPPPPPPPPPPPP ', payload);
      return { ...state, messages: state.messages.map(msg => (msg.uuid === payload.uuid ? payload : msg)) };
    case messagesActionTypes.TEMP_MESSAGE:
      return { ...state, messages: state.messages.concat(payload) };
    case messagesActionTypes.NEW_MESSAGE:
      return { ...state, messages: state.messages.concat(payload) };
    default:
      return state;
  }
};
