import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { login } from '../../store/actions';

export default () => {
  const [state, setState] = useState({});
  const dispatch = useDispatch();

  const handleChange = e => setState({ ...state, [e.target.name]: e.target.value });

  const handleClick = () => dispatch(login(state));

  return (
    <div>
      login
      <input
        type='email'
        name='email'
        onChange={handleChange}
        value={state.email || ''}
        placeholder='user email'
        className='form-control'
      />
      <input
        type='password'
        name='password'
        onChange={handleChange}
        placeholder='user password'
        value={state.password || ''}
        className='form-control'
      />
      <button className='btn btn-primary' onClick={handleClick}>
        Login
      </button>
    </div>
  );
};
