import React from 'react';
import profile from '../../assets/images/profile';
import { BsPlusCircleFill } from 'react-icons/bs';
export default () => {
  return (
    <div className='contacts'>
      <div className='contacts__header'>
        <div>
          <img src={profile} className='contact__img' />
          <p className='title'> Chats </p>
        </div>
        <BsPlusCircleFill className='contacts__menu' />
      </div>
    </div>
  );
};
