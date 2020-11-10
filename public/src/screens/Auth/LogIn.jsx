import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AiOutlineUser, AiFillLock } from 'react-icons/ai';

import { login } from '../../store/actions';
import { validateForm } from '../../utils';

import Input from '../../components/Input';
import Button from '../../components/Button';

export default () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({});

  const handleChange = e => setState({ ...state, [e.target.name]: e.target.value });

  const handleLogin = () => {
    let check = validateForm({ ...state, type: 'login' });
    Object.entries(check)
      .map(item => (item[1] ? true : false))
      .filter(i => i).length
      ? setState({ ...state, wrong: check })
      : dispatch(login(state));
  };

  return (
    <div className='auth'>
      <h4>Sign in</h4>
      <p>Sign in to continue.</p>
      <div className='auth-form'>
        <Input label='Email' value={state.email || ''} name='email' type='e' onChange={handleChange} wrong={state.wrong}>
          <AiOutlineUser />
        </Input>
        <Input label='Password' value={state.password || ''} name='password' type='p' onChange={handleChange} wrong={state.wrong}>
          <AiFillLock />
        </Input>
        <Button label='Sign in' onClick={handleLogin} />
      </div>
      <span className='auth__span'>
        Don't have an account?&nbsp;<a href='/signup'>Signup now</a>
      </span>
    </div>
  );
};
