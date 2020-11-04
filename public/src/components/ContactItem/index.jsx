import React from 'react';
import profile from '../../assets/images/profile';

export default ({ contact }) => {
  return (
    <div className='contact__item'>
      <img src={profile} className='contact__img' style={{ width: '40px', height: '40px' }} />
      <div>
        <div className='contact__name'>
          <p>{contact.title}</p>
          <p className='small'>{contact.key2}</p>
        </div>
        <div className='contact__item__notifications'>
          <div className='round'>{contact.key3}</div>
          <p>{contact.key4}</p>
        </div>
      </div>
    </div>
  );
};
