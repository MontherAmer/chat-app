import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { showAlert, updateUser } from '../../../store/actions';
import { RiEditLine } from 'react-icons/ri';

export default ({ name }) => {
  const dispatch = useDispatch();
  const [state, setState] = useState({});

  useEffect(() => {
    setState({ name });
  }, [name]);

  const handleChange = e => setState({ ...state, [e.target.name]: e.target.value });

  const handleUpdate = async e => {
    setState({ ...state, edit: false });
    return name === state.name
      ? setState({ ...state, edit: false })
      : (state?.name?.length >= 3
          ? await dispatch(updateUser({ key: 'name', value: state.name }))
          : dispatch(showAlert({ message: 'Name should be at least 3 character' })),
        setState({ ...state, edit: false, name }));
  };

  const handleKey = e => (e.keyCode === 13 ? handleUpdate(e) : null);

  return (
    <div className='profile__name__container'>
      {!state.edit ? (
        <div className='profile__name__innercontainer'>
          <h4>
            {name}
            <RiEditLine title='Edit' className='name--edit' onClick={() => setState({ ...state, edit: true })} />
          </h4>
        </div>
      ) : (
        <div className='profile__name__innercontainer'>
          <input
            value={state.name}
            name='name'
            type='t'
            onChange={handleChange}
            onBlur={handleUpdate}
            autoComplete='off'
            onKeyDown={handleKey}
          />
        </div>
      )}
    </div>
  );
};
