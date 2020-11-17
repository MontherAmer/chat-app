import React from 'react';

import { RiUserLine } from 'react-icons/ri';

export default ({ image, name, online, lastMsg, time }) => {
  console.log('imageimageimage ', image);
  return (
    <div className='contact'>
      <div className='contact__image'>
        {image ? <img src={image} /> : <RiUserLine />}
        <span className={`contact__status ${online ? 'online' : ''}`}></span>
      </div>
      <div className='contact__data'>
        <h4 className='contact__name'>{name}</h4>
        <p className='contact__msg'>{lastMsg}</p>
      </div>
      <small>{time}</small>
    </div>
  );
};
