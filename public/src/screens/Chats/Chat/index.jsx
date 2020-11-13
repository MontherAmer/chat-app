import React from 'react';

export default ({ image, name, online, lastMsg, time }) => {
  console.log('imageimageimage ', image);
  return (
    <div className='chat'>
      <div className='chat__image'>
        <img src={image} />
        <span className={`chat__status ${online ? 'online' : ''}`}></span>
      </div>
      <div className='chat__data'>
        <h4 className='chat__name'>{name}</h4>
        <p className='chat__msg'>{lastMsg}</p>
      </div>
      <small>{time}</small>
    </div>
  );
};
