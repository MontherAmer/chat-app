import React from 'react';
import { useDispatch } from 'react-redux';
import { changeScreen } from '../../store/actions';

import { MdGroupAdd, MdPersonAdd, MdSettings } from 'react-icons/md';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { BiLogOut } from 'react-icons/bi';

// * list of screens to choose
export default () => {
  const dispatch = useDispatch();

  const handleClick = e => dispatch(changeScreen(e));

  return (
    <div className='menu'>
      <div className='menu__header '>
        <IoMdArrowRoundBack size={30} className='pointer' onClick={() => handleClick('Contacts')} />
      </div>
      <div className='menu__items'>
        <div className='menu__item' onClick={() => handleClick('NewUser')}>
          <MdPersonAdd className='menu__item_icon' size={30} />
          <h1 className='header menu__item__header'>Add user</h1>
        </div>

        <div className='menu__item' onClick={() => handleClick('NewGroup')}>
          <MdGroupAdd className='menu__item_icon' size={30} />
          <h1 className='header menu__item__header'>Create group</h1>
        </div>

        <div className='menu__item' onClick={() => handleClick('Settings')}>
          <MdSettings className='menu__item_icon' size={30} />
          <h1 className='header menu__item__header'>Settings</h1>
        </div>

        <div className='menu__item' onClick={() => console.log('out')}>
          <BiLogOut className='menu__item_icon' size={30} />
          <h1 className='header menu__item__header'>LogOut</h1>
        </div>
      </div>
    </div>
  );
};
