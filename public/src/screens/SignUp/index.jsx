import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { signUp } from '../../store/actions';
import ToggleButton from '../../components/ToggleButton';

export default () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [state, setState] = useState({ rememberMe: false });

  const handleChange = e => setState({ ...state, [e.target.name]: e.target.value });

  const handleToggle = e => setState({ ...state, rememberMe: !state.rememberMe });

  const handleClick = () => dispatch(signUp(state));

  if (state.redirect) history.push(state.redirect);
  return (
    <div className='auth'>
      <div className='auth-container'>
        <h1 className='title3_txt c_gray'>Sign Up</h1>
        <input autoComplete='off' className='auth--input' placeholder='Email' type='text' name='email' onChange={handleChange} />
        <input autoComplete='off' className='auth--input' placeholder='Password' type='password' name='password' onChange={handleChange} />
        <input
          autoComplete='off'
          className='auth--input'
          placeholder='Confirm Password'
          type='password'
          name='password2'
          onChange={handleChange}
        />
        <ToggleButton checked={state.rememberMe} handleClick={handleToggle} label='Remeber me' />
        <button className='auth--button' onClick={handleClick}>
          Sign Up
        </button>
        <p>
          Or, Log in <span onClick={() => setState({ ...state, redirect: '/login' })}>Here </span>{' '}
        </p>{' '}
      </div>
    </div>
  );
};
