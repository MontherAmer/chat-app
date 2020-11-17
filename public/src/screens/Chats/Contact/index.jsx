import React from 'react';

import { RiUserLine } from 'react-icons/ri';

export default ({ _id, image, name, online, lastMsg, time, onClick }) => {
  return (
    <div className='contact' onClick={() => onClick(_id)}>
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
