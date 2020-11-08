import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeScreen, createConnection, showAlert } from '../../store/actions';
import { validateEmail } from '../../utils';

import { IoMdArrowRoundBack } from 'react-icons/io';

export default () => {
  const [state, setState] = useState({});
  const dispatch = useDispatch();

  const handleRedirect = e => dispatch(changeScreen(e));

  const handleChange = e => setState({ ...state, [e.target.name]: e.target.value });

  const handleAdding = async () => {
    return validateEmail(state.email)
      ? (await dispatch(createConnection(state)), handleRedirect('Contacts'))
      : dispatch(showAlert({ type: 'danger', message: 'Email not valid' }));
  };

  return (
    <div className='new_connection'>
      <div className='new_connection__header '>
        <IoMdArrowRoundBack size={30} className='pointer' onClick={() => handleRedirect('Contacts')} />
      </div>

      <div className='newConnection__items'>
        <input placeholder='Enter email' type='email' value={state.email || ''} name='email' onChange={handleChange} />
        <button onClick={handleAdding}>Add</button>
      </div>
    </div>
  );
};
