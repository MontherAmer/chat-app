import React from 'react';

import { timeFormate } from '../../../utils';

import profileImage from '../../../assets/images/profile.png';
import Typing from '../../../components/Typing';
export default ({ contact, onClick }) => {
  let { _id, image, name, online, lastMessage, unreadMessages, time } = contact;
  return (
    <div className='contact' onClick={() => onClick({ _id, name, image })}>
      <div className='contact__image'>
        {image ? <img src={image} /> : <img src={profileImage} />}
        <span className={`contact__status ${online ? 'online' : ''}`}></span>
      </div>
      <div className='contact__data'>
        <h4 className='contact__name'>{name}</h4>
        {contact.typing ? <Typing /> : <p>{lastMessage?.text || 'Start chat'}</p>}
      </div>
      <div className='contact__time'>
        <p className='contact__msg'>{timeFormate(lastMessage?.createdAt) || 'start chating'}</p>
        <small>{unreadMessages.length}</small>
      </div>
    </div>
  );
};
