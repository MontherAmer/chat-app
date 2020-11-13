import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { validateEmail } from '../../utils';
import { showAlert, createConnection } from '../../store/actions';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { RiArrowDropRightLine, RiArrowDropUpLine, RiUserLine, RiGroupLine } from 'react-icons/ri';

export default () => {
  const [state, setState] = useState({ openFirst: false });
  const dispatch = useDispatch();

  const handleCollapse = e => setState({ ...state, [e]: !state[e] });

  const handleChange = e => setState({ ...state, [e.target.name]: e.target.value });

  const handleAddContact = () => {
    console.log(validateEmail(state.email));
    validateEmail(state.email)
      ? dispatch(showAlert({ message: 'Please check email field' }))
      : dispatch(createConnection({ email: state.email }));
    setState({ ...state, openFirst: false });
  };

  return (
    <div className='create'>
      <div className='collapsible' onClick={() => handleCollapse('openFirst')}>
        <div className='collabse__header'>
          <RiUserLine />
          <p>&nbsp; Add Contact</p>
        </div>
        {state.openFirst ? <RiArrowDropUpLine size={20} /> : <RiArrowDropRightLine size={20} />}
      </div>
      <div className={`collapse_content ${state.openFirst ? 'first--collabse ' : ''}`}>
        <Input
          label='Contact Email'
          value={state.email || ''}
          name='email'
          type='email'
          onChange={handleChange}
          children={<RiUserLine />}
        />
        <Button label='Add' onClick={handleAddContact} />
      </div>
    </div>
  );
};
