import React, { useContext, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { socket } from '../../context/SocketContext';
import { SocketContext } from '../../context/SocketContext';
// import * as io from 'socket.io-client';

// const socket = io();

import Menu from './Menu';
import Screen1 from './Screen1';
import Messages from '../Messages';

// import socket from '../../utils/sockets';

export default () => {
  const { screen } = useSelector(state => state.utilsState);
  const { _id } = useSelector(state => state.userState);
  const { socket } = useContext(SocketContext);

  const dispatch = useDispatch();
  socket.emit('SET_USER_ON_LINE');
  // socket(_id);
  // socket.connect({ query: { senderId: _id } });
  // socket.emit('SET_USER_ON_LINE', { _id, sender: _id });

  useEffect(() => {
    return () => socket.disconnect();
  }, []);

  return (
    <div className='home'>
      <div>
        <Menu />
      </div>
      <div>
        <Screen1 />
      </div>
      <div>
        <Messages />
      </div>
    </div>
  );
};
