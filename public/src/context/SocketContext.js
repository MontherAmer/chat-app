import React, { createContext, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { userActionTypes, messagesActionTypes } from '../store/constants';

import * as io from 'socket.io-client';

export const SocketContext = createContext();

export default props => {
  const { _id } = useSelector(state => state.userState);
  const { activeChat } = useSelector(state => state.messagesState);
  const dispatch = useDispatch();
  const token = localStorage.getItem('ChAt_ApP_ToKeNs');
  const socket = io.connect('http://localhost:5000', {
    query: { token, senderId: _id }
  });

  socket.on('USER_TOGGLE_ON_OFF_LINE', data => dispatch({ type: userActionTypes.UPDATE_ONLINE_OFFLINE_CONTACT, payload: data }));

  socket.on('SOCKET_NEW_MESSAGE_CREATED', ({ list, contactId, message }) => {
    dispatch({
      type: userActionTypes.USER_CONNECTIONS_LIST,
      payload: list
    });
    if (contactId === activeChat._id)
      dispatch({
        type: messagesActionTypes.NEW_MESSAGE,
        payload: message
      });
  });

  return <SocketContext.Provider value={{ socket }}>{props.children}</SocketContext.Provider>;
};
