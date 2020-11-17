import React from 'react';
import { useSelector } from 'react-redux';

import Chats from '../../Chats';
import Profile from '../../Profile';
import Messages from '../../Messages';
import GroupsContacts from '../../GroupsContacts';

export default () => {
  const { screen } = useSelector(state => state.utilsState);

  const components = {
    Chats,
    Profile,
    Messages,
    GroupsContacts
  };

  const ComponentName = components[screen];

  return (
    <div className='screen1'>
      <ComponentName />
    </div>
  );
};
