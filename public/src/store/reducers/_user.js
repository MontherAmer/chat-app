import { userActionTypes, messagesActionTypes } from '../constants';

const initialState = {};

export default (state = initialState, { type, payload }) => {
  let newContacts = [],
    index;
  switch (type) {
    case userActionTypes.STORE_USER_INFO:
      localStorage.setItem('LETS_CHAT_THEME', payload.theme);
      if (payload.token) localStorage.setItem('ChAt_ApP_ToKeNs', payload.token);
      return { ...state, ...payload };
    case userActionTypes.REMOVE_USER_INFO:
      localStorage.removeItem('ChAt_ApP_ToKeNs');
      return {};
    case userActionTypes.USER_CONNECTIONS_LIST:
      return { ...state, contacts: payload };
    case userActionTypes.UPDATE_ONLINE_OFFLINE_CONTACT:
      newContacts = state.contacts.map(item => (item.usersIds.includes(payload.user_id) ? { ...item, online: payload.online } : item));
      return { ...state, contacts: newContacts };
    default:
      return state;
  }
};
