import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeScreen, suggestUsers, createGroup, showAlert } from '../../store/actions';

import { IoMdArrowRoundBack } from 'react-icons/io';
import { GrFormClose } from 'react-icons/gr';

export default () => {
  const [state, setState] = useState({ emails: [] });
  const { usersList } = useSelector(state => state.utilsState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(suggestUsers());
  }, []);

  const handleRedirect = e => dispatch(changeScreen(e));

  const handleChange = e => {
    let filtered = usersList?.filter(user => user.email.includes(e.target.value) && !state.emails.includes(user));
    setState({ ...state, [e.target.name]: e.target.value, list: filtered });
  };

  const handleNameChange = e => setState({ ...state, name: e.target.value });

  const addToList = e => setState({ ...state, emails: state.emails.concat(e), email: '', list: [] });

  const removeFromList = email => {
    let emails = state.emails.filter(user => user.email !== email);
    setState({ ...state, emails });
  };

  const handleAdding = async () => {
    let { name } = state;
    let members = state.emails.map(e => e._id);
    return !name
      ? dispatch(showAlert({ message: 'name is required' }))
      : (await dispatch(createGroup({ name, members })), handleRedirect('Contacts'));
  };

  return (
    <div className='new_connection'>
      <div className='new_connection__header '>
        <IoMdArrowRoundBack size={30} className='pointer' onClick={() => handleRedirect('Contacts')} />
      </div>

      <div className='newConnection__items'>
        <input
          className='newConnection__group_name'
          name='name'
          placeholder='Group name'
          value={state.name || ''}
          onChange={handleNameChange}
        />

        <div style={{ position: 'relative' }}>
          <div className='autocomplete_input'>
            <input
              autoComplete='off'
              placeholder='Enter email'
              type='email'
              value={state.email || ''}
              name='email'
              onChange={handleChange}
            />
            {state.email !== '' && state.list?.length ? (
              <div className='autocomplete_list'>
                {state.list?.map(f => (
                  <p onClick={() => addToList(f)}> {f.email} </p>
                ))}
              </div>
            ) : null}
          </div>
        </div>

        {state.emails?.map(i => (
          <div className='new_connection_emails_list'>
            <p>{i.email}</p>
            <GrFormClose size={25} onClick={() => removeFromList(i.email)} className='pointer' />
          </div>
        ))}

        <button onClick={handleAdding}>Add</button>
      </div>
    </div>
  );
};
