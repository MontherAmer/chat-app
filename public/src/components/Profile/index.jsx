import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeScreen, updateUser } from '../../store/actions';

import { IoMdArrowRoundBack, IoIosArrowDropdown, IoIosArrowDropup } from 'react-icons/io';
import { MdModeEdit } from 'react-icons/md';

export default () => {
  const [state, setState] = useState({});
  const { name, image, _id } = useSelector(state => state.userState);
  const dispatch = useDispatch();

  useEffect(() => {
    setState({ _id, name, image });
  }, [name, image]);

  const handleChange = e => setState({ ...state, [e.target.name]: e.target.value });

  const handleUpdateName = () => (state.name !== name ? dispatch(updateUser(state)) : null);

  const handleFileUpdate = e => dispatch(updateUser({ _id: state._id, image: e.target.files[0] }));

  const handleChangePassword = async () => {
    let { _id, password, newPassword } = state;
    await dispatch(updateUser({ _id, password, newPassword }));
    setState({ ...state, showPassword: false });
  };

  return (
    <div className='profile'>
      <div className='profile__header'>
        <IoMdArrowRoundBack size={30} className='pointer' onClick={() => dispatch(changeScreen('Contacts'))} />
      </div>
      <div className='profile__items'>
        <div className='profile__item profile_image_container'>
          <label>
            <img src={state.image} className='profile__image' />
            <input type='file' name='myfile' style={{ display: 'none' }} onChange={handleFileUpdate} />
          </label>
          <MdModeEdit size={15} className='profile_image_editer' />
        </div>
        <div className='profile__item'>
          <p className='header small'> Name </p>
          <input type='text' onChange={handleChange} name='name' value={state.name} onBlur={handleUpdateName} />
        </div>
        <div className='profile__item'>
          <div className='profile_dropDown_icon_container' onClick={() => setState({ ...state, showPassword: !state.showPassword })}>
            Change Password {state.showPassword ? <IoIosArrowDropup size={25} /> : <IoIosArrowDropdown size={25} />}
          </div>
        </div>
        {state.showPassword ? (
          <div className='profile__item password'>
            <input type='password' name='password' value={state.password || ''} onChange={handleChange} placeholder='Password' />
            <input type='password' name='newPassword' value={state.newPassword || ''} onChange={handleChange} placeholder='New Password' />
            <button onClick={handleChangePassword}>Change</button>
          </div>
        ) : null}
      </div>
    </div>
  );
};
