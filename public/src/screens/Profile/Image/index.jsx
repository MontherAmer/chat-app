import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { showAlert, updateUser } from '../../../store/actions';
import Loading from '../../../components/SubLoader';
import { RiUserLine, RiEditBoxLine, RiDeleteBin7Line } from 'react-icons/ri';
import profileImage from '../../../assets/images/profile.png';

export default ({ image }) => {
  const dispatch = useDispatch();
  const [load, setLoad] = useState(false);

  const handleUpload = async e => {
    setLoad(true);
    e.target.files[0].type.split('/')[0] === 'image'
      ? await dispatch(updateUser({ key: 'image', value: e.target.files[0] }))
      : dispatch(showAlert({ message: 'Only images are accepted' }));
    setLoad(false);
  };

  const handleRemove = async () => {
    setLoad(true);
    await dispatch(updateUser({ key: 'removeImage', value: true }));
    setLoad(false);
  };

  return (
    <div className='profile_image_container'>
      <div className='profile__image'>
        {load ? (
          <div className='load'>
            <Loading />
          </div>
        ) : (
          <>
            <label className='image--edit'>
              <RiEditBoxLine title='Edit' />
              <input type='file' name='image' style={{ display: 'none' }} onChange={handleUpload} />
            </label>
            {image ? <img src={image} /> : <img src={profileImage} />}
            {image ? <RiDeleteBin7Line className='image--remove' title='Remove' onClick={handleRemove} /> : null}
          </>
        )}
      </div>
    </div>
  );
};
