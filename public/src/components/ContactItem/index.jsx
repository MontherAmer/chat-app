import React from 'react';

export default ({ item }) => {
  return (
    <div className='contact__item'>
      <img src={item.image} className='contact__img' style={{ width: '40px', height: '40px' }} />
      <div>
        <div className='contact__name'>
          <p>{item.name}</p>
          <p className='small'>last message</p>
        </div>
        <div className='contact__item__notifications'>
          <div className='round'>number of messages</div>
          <p>last message time</p>
        </div>
      </div>
    </div>
  );
};
