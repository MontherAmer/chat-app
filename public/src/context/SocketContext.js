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
  socket.on('USER_RECIVE_NEW_MESSAGE', ({ list, contactId, message }) => {
    console.log('listlistlist ', list);
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

  // socket.on('USER_RECIVE_NEW_MESSAGE', data => {
  //   data.contactId === activeChat._id ? (
  //   // if the contactid is the same as active message
  //     // dispatch({

  //     // })
  //   ):(
  //   // if the contact id not the same as active message

  //   )

  // });
  // dispatch({ type: messagesActionTypes.NEW_MESSAGE, payload: data }));

  return <SocketContext.Provider value={{ socket }}>{props.children}</SocketContext.Provider>;
};
