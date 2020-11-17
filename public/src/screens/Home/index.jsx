import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../store/actions';

import Menu from './Menu';
import Screen1 from './Screen1';
import Messages from '../Messages';

export default () => {
  const { screen } = useSelector(state => state.utilsState);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    document.cookie = 'ChAt_ApP_ToKeNs= ; expires = Thu, 01 Jan 1970 00:00:00 GMT';
    dispatch(logOut());
  };
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
