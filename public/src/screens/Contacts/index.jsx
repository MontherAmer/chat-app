import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeScreen } from '../../store/actions';

import ContactItem from '../../components/ContactItem';

import { HiDotsVertical } from 'react-icons/hi';

export default () => {
  const { connections, image } = useSelector(state => state.userState);
  const dispatch = useDispatch();
  return (
    <div className='contacts'>
      {/* Contacts header */}
      <div className='contacts__header'>
        <div>
          <img src={image} className='contact__img' onClick={() => dispatch(changeScreen('Profile'))} />
          <p className='title'> Chats </p>
        </div>
        <HiDotsVertical className='contacts__menu' title='new chat' onClick={() => dispatch(changeScreen('Menu'))} />
      </div>

      {/* Contacts search */}
      <div className='contacts__search'>
        <input type='text' placeholder='Search' />
      </div>

      <div className='contacts__items'>
        {connections?.map((item, i) => (
          <ContactItem key={i} item={item} />
        ))}
      </div>

      <div className='contacts__icons'></div>
    </div>
  );
};
