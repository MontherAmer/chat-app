import React from 'react';
import Logout from '../../components/LogOut';

import Messages from '../Messages';
import Contacts from '../Contacts';

export default () => {
  return (
    <div className='home_wrapper'>
      <div className='home'>
        <Messages />
        <Contacts />
      </div>
    </div>
  );
};
