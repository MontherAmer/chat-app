import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Image from './Image';
import Name from './Name';
import Online from './Online';
import Status from './Status';
import Typing from '../../components/Typing';
import { RiUser2Line, RiTimeLine } from 'react-icons/ri';

export default () => {
  const [state, setState] = useState({});
  const userDate = useSelector(state => state.userState);

  return (
    <div className='profile'>
      <div className='profile__header'>
        <h4>My Profile </h4>
      </div>
      <div className='profile__main'>
        <Image image={userDate.image} />
        <Name name={userDate.name} />
        <Online online={userDate.online} />
        <Status status={userDate.status} />
      </div>

      <div className='profile__item'>
        <RiUser2Line />
        <p>{userDate.email}</p>
      </div>

      <div className='profile__item'>
        <RiTimeLine />
        <p>{userDate.lastSeen || '00:00'}</p>
      </div>
    </div>
  );
};
