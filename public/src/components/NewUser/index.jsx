import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeScreen, createNewConnection } from '../../store/actions';

import { IoMdArrowRoundBack } from 'react-icons/io';

export default () => {
  const [state, setState] = useState({});
  const dispatch = useDispatch();

  const handleClick = e => dispatch(changeScreen(e));

  const handleChange = e => setState({ ...state, [e.target.name]: e.target.value });

  const handleAdding = () => dispatch(createNewConnection(state));

  return (
    <div className='new_connection'>
      <div className='new_connection__header '>
        <IoMdArrowRoundBack size={30} className='pointer' onClick={() => handleClick('Contacts')} />
      </div>

      <div className='newConnection__items'>
        <input placeholder='Enter email' type='email' value={state.email || ''} name='email' onChange={handleChange} />
        <button onClick={handleAdding}>Add</button>
      </div>
    </div>
  );
};
