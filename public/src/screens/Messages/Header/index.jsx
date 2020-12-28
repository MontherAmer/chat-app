import React from 'react';
import { RiRecordCircleLine, RiUserLine } from 'react-icons/ri';
import profileImage from '../../../assets/images/profile.png';

export default ({ data }) => {
  let { image, name, online } = data;
  return (
    <div className='messages__header'>
      <div className='profile__image' style={{ width: '50px', height: '50px' }}>
        {image ? (
          <img src={image} style={{ width: '50px', height: '50px' }} />
        ) : (
          <img src={profileImage} style={{ width: '50px', height: '50px' }} />
        )}
      </div>
      <h4>{name}</h4>
      <RiRecordCircleLine style={{ color: online ? '#317053' : '#b04742' }} />
    </div>
  );
};
