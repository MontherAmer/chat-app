import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { RiUser2Line, RiLockLine } from 'react-icons/ri';

import { signUp, showLoader } from '../../store/actions';
import logo from '../../assets/images/logo.png';
import { validateForm } from '../../utils';

import Input from '../../components/Input';
import Button from '../../components/Button';
import GoogleLogin from '../../components/GoogleLogin';
import FacebookLogin from '../../components/FacebookLogin';

export default () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({});

  const handleChange = e => setState({ ...state, [e.target.name]: e.target.value });

  const handleLogin = () => {
    let check = validateForm(state);
    return Object.entries(check)
      .map(item => (item[1] ? true : false))
      .filter(i => i).length
      ? setState({ ...state, wrong: check })
      : (dispatch(showLoader(true)), dispatch(signUp(state)));
  };

  return (
    <div className='auth'>
      <div className='main-icon'>
        <img src={logo} />
        <h1> Let's Chat </h1>
      </div>
      <h4>Sign up</h4>
      <p>Get your account now.</p>
      <div className='auth-form'>
        <Input label='Email' value={state.email || ''} name='email' type='e' onChange={handleChange} wrong={state.wrong}>
          <RiUser2Line />
        </Input>
        <Input label='Username' value={state.name || ''} name='name' type='t' onChange={handleChange} wrong={state.wrong}>
          <RiUser2Line />
        </Input>
        <Input label='Password' value={state.password || ''} name='password' type='p' onChange={handleChange} wrong={state.wrong}>
          <RiLockLine />
        </Input>
        <Button label='Sign up' onClick={handleLogin} />
        <div className='separator'>OR</div>
        <GoogleLogin />
        <FacebookLogin />
      </div>
      <span className='auth__span'>
        Already have an account?&nbsp;<a href='/login'>Signin</a>
      </span>
    </div>
  );
};
