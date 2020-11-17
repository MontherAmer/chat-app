import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { ThemeContext } from '../../../context/ThemeContext';

import { logOut, updateUser, updateScreen } from '../../../store/actions';
import { RiMessage3Line, RiContactsLine, RiSettings2Line, RiMoonLine, RiSunLine, RiLogoutBoxLine, RiUserLine } from 'react-icons/ri';

export default () => {
  const dispatch = useDispatch();
  const { theme } = useContext(ThemeContext);

  const handleLogOut = () => dispatch(logOut());

  const handleModeChange = () => {
    let mode = localStorage.getItem('LETS_CHAT_THEME');
    return mode === 'dark'
      ? (localStorage.setItem('LETS_CHAT_THEME', 'light'), dispatch(updateUser({ key: 'theme', value: 'light' })))
      : (localStorage.setItem('LETS_CHAT_THEME', 'dark'), dispatch(updateUser({ key: 'theme', value: 'dark' })));
  };

  const handleUpdateScreen = e => dispatch(updateScreen(e));

  return (
    <div className='menu'>
      <div className='menu__item'>
        <RiUserLine title='Profile' onClick={() => handleUpdateScreen('Profile')} />
      </div>
      <div className='menu__item'>
        <RiMessage3Line title='Chats' onClick={() => handleUpdateScreen('Chats')} />
      </div>
      <div className='menu__item'>
        <RiContactsLine title='Contacts/Groups' onClick={() => handleUpdateScreen('GroupsContacts')} />
      </div>
      {/* <div className='menu__item'>
        <RiSettings2Line  onClick={()=>handleUpdateScreen()}/>
      </div> */}
      <div className='menu__item' onClick={handleModeChange}>
        {theme === 'light' ? <RiMoonLine title='Dark mode' /> : <RiSunLine title='Light mode' />}
      </div>
      <div className='menu__item' onClick={handleLogOut}>
        <RiLogoutBoxLine title='Signout' />
      </div>
    </div>
  );
};
