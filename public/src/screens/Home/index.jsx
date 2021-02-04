import React, { useContext, useEffect } from 'react';
import { SocketContext } from '../../context/SocketContext';

import Menu from './Menu';
import Screen1 from './Screen1';
import Messages from '../Messages';

export default () => {
  const { socket } = useContext(SocketContext);
  socket.emit('SET_USER_ON_LINE');

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
