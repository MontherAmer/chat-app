import React, { createContext, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { userActionTypes } from '../store/constants';

import * as io from 'socket.io-client';

export const SocketContext = createContext();

export default props => {
  const { _id } = useSelector(state => state.userState);
  const dispatch = useDispatch();
  const token = localStorage.getItem('ChAt_ApP_ToKeNs');
  const socket = io.connect('http://localhost:5000', {
    query: { token, senderId: _id }
  });

  socket.on('USER_TOGGLE_ON_OFF_LINE', data => dispatch({ type: userActionTypes.UPDATE_ONLINE_OFFLINE_CONTACT, payload: data }));

  socket.on('USER_RECIVE_NEW_MESSAGE', data => console.log('NEW MESSAGE ', data));

  return <SocketContext.Provider value={{ socket }}>{props.children}</SocketContext.Provider>;
};
