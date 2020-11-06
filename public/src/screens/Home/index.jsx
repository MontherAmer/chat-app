import React from 'react';
import { useSelector } from 'react-redux';
import Messages from '../Messages';

import Profile from '../../components/Profile';
import Contacts from '../Contacts';
import Menu from '../../components/Menu';
import NewUser from '../../components/NewUser';
import Settings from '../../components/Settings';
import NewGroup from '../../components/NewGroup';
import ConnectionProfile from '../ConnectionProfile';

export default () => {
  const { screen } = useSelector(state => state.utilsState);

  const components = {
    Contacts,
    Menu,
    ConnectionProfile,
    Profile,
    NewUser,
    NewGroup,
    Settings
  };

  const ComponentName = components[screen];

  return (
    <div className='home_wrapper'>
      <div className='home'>
        <div className='main_container'>
          <ComponentName />
        </div>
        <Messages />
      </div>
    </div>
  );
};
