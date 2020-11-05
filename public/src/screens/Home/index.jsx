import React from 'react';
import { useSelector } from 'react-redux';
import Messages from '../Messages';

import Contacts from '../Contacts';
import Menu from '../Menu';
import NewConnection from '../NewConnection';
import ConnectionProfile from '../ConnectionProfile';
import Profile from '../Profile';
import Settings from '../Settings';

export default () => {
  const { screen } = useSelector(state => state.utilsState);

  const components = {
    Contacts,
    Menu,
    NewConnection,
    ConnectionProfile,
    Profile,
    Settings
  };

  const ComponentName = components[screen];

  return (
    <div className='home_wrapper'>
      <div className='home'>
        <div className='test'>
          <ComponentName />
        </div>
        <Messages />
      </div>
    </div>
  );
};
