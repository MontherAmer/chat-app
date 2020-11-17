import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Menu from './Menu';
import Screen1 from './Screen1';
import Messages from '../Messages';

export default () => {
  const { screen } = useSelector(state => state.utilsState);
  const dispatch = useDispatch();

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
