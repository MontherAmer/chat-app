import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { RiUserLine } from 'react-icons/ri';

import { validateEmail } from '../../../utils';
import { showAlert, createNewContact } from '../../../store/actions';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

export default ({ close }) => {
  const [state, setState] = useState({});
  const dispatch = useDispatch();

  const handleChange = e => setState({ ...state, [e.target.name]: e.target.value });

  const handleAddContact = () => {
    validateEmail(state.email)
      ? dispatch(showAlert({ message: 'Please check email field' }))
      : dispatch(createNewContact({ email: state.email }));
    close();
  };
  return (
    <div className='settings__contact'>
      <Input label='Contact Email' value={state.email || ''} name='email' type='e' onChange={handleChange} children={<RiUserLine />} />
      <Button label='Add' onClick={handleAddContact} />
    </div>
  );
};
