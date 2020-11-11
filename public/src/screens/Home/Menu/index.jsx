import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { ThemeContext } from '../../../context/ThemeContext';

import { logOut } from '../../../store/actions';
import { RiMessage3Line, RiContactsLine, RiSettings2Line, RiMoonLine, RiSunLine, RiLogoutBoxLine, RiUserLine } from 'react-icons/ri';

export default () => {
  const dispatch = useDispatch();
  const { theme } = useContext(ThemeContext);

  const handleLogOut = () => dispatch(logOut());

  const handleModeChange = () => console.log('change mode');

  return (
    <div className='menu'>
      <div className='menu__item'>
        <RiUserLine title='Profile' />
      </div>
      <div className='menu__item'>
        <RiMessage3Line title='Chats' />
      </div>
      <div className='menu__item'>
        <RiContactsLine title='Contacts/Groups' />
      </div>
      <div className='menu__item'>
        <RiSettings2Line />
      </div>
      <div className='menu__item' onClick={handleModeChange}>
        {theme === 'light' ? <RiMoonLine title='Dark mode' /> : <RiSunLine title='Light mode' />}
      </div>
      <div className='menu__item' onClick={handleLogOut}>
        <RiLogoutBoxLine title='Signout' />
      </div>
    </div>
  );
};
