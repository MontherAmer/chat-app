import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RiUserLine, RiGroupLine, RiEditBoxLine, RiDeleteBin7Line } from 'react-icons/ri';

import { showAlert, createGroup } from '../../../store/actions';

import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Select from '../../../components/Select';
import Toggle from '../../../components/Toggle';

export default ({ close }) => {
  const [state, setState] = useState({ name: '', userList: [], image: null });
  const { contacts } = useSelector(state => state.userState);
  const dispatch = useDispatch();

  const handleName = e => setState({ ...state, [e.target.name]: e.target.value });

  const handleChoose = e => setState({ ...state, userList: state.userList.concat(e) });

  const handleRemoveMember = e => {
    let users = state.userList.filter(user => user._id !== e._id);
    setState({ ...state, userList: users });
  };

  const handleImageRemove = () => setState({ ...state, image: null });

  const handleImageSelect = e =>
    e.target.files[0].type.split('/')[0] === 'image'
      ? setState({ ...state, image: e.target.files[0] })
      : dispatch(showAlert({ message: 'Only images are accepted' }));

  const handleCreate = async () => {
    return state.name.length >= 3
      ? state.userList.length === 0
        ? dispatch(showAlert({ message: 'You should add at least one contact to the group' }))
        : (await dispatch(
            createGroup({
              name: state.name,
              users: state.userList.map(user => user._id),
              image: state.image,
              onlyAdminCanMsg: state.onlyAdminCanMsg
            })
          ),
          setState({ ...state, name: '', userList: [], image: null }),
          close())
      : dispatch(showAlert({ message: 'Group name should be at least 3 characters' }));
  };

  const filterOptions = options => {
    let usersList_ids = state.userList.map(user => user._id);
    let users = options.filter(option => option.email && !usersList_ids.includes(option._id));
    return users;
  };

  const handleToggle = e => setState({ ...state, onlyAdminCanMsg: e.target.checked });

  return (
    <div className='settings__gruop'>
      <div>
        <div className='profile_image_container'>
          <div className='profile__image'>
            <label className='image--edit'>
              <RiEditBoxLine title='Edit' />
              <input type='file' name='image' style={{ display: 'none' }} onChange={handleImageSelect} />
            </label>
            {state.image ? <img src={URL.createObjectURL(state.image)} /> : <RiUserLine size={60} />}
            {state.image ? <RiDeleteBin7Line className='image--remove' title='Remove' onClick={handleImageRemove} /> : null}
          </div>
        </div>
      </div>
      <br />
      <Input label='Group name' value={state.name || ''} name='name' type='t' onChange={handleName} children={<RiGroupLine />} />
      <Select options={filterOptions(contacts)} choose={handleChoose} />
      {state.userList?.length ? <p>{state.userList.length} users in this group</p> : null}
      <div className='selected_users_container'>
        {state.userList?.map(user => (
          <div className='contact' onClick={() => handleChoose(user)} key={user._id} onClick={() => handleRemoveMember(user)}>
            <div className='contact__image'>{user.image ? <img src={user.image} /> : <RiUserLine />}</div>
            <div className='contact__data'>
              <h4 className='contact__name'>{user.name}</h4>
              <p className='contact__msg'>{user.email}</p>
            </div>
          </div>
        ))}
      </div>
      <Toggle
        label='Only admins can send messages'
        name='onlyAdminCanMsg'
        checked={state.onlyAdminCanMsg || false}
        handleClick={handleToggle}
      />
      <Button label='Add' onClick={handleCreate} />
    </div>
  );
};
