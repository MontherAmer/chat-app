import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { showAlert, updateUser } from '../../../store/actions';
import { RiEditLine } from 'react-icons/ri';

export default ({ status }) => {
  const dispatch = useDispatch();
  const [state, setState] = useState({});

  useEffect(() => {
    console.log('use Effect');
    setState({ status });
  }, [status]);

  const handleChange = e => setState({ ...state, [e.target.name]: e.target.value });

  const handleUpdate = async () => {
    return state.status.trim() === ''
      ? await dispatch(updateUser({ key: 'removeStatus', value: true }))
      : status === state.status
      ? setState({ ...state, edit: false })
      : (state?.status?.length < 120
          ? await dispatch(updateUser({ key: 'status', value: state.status }))
          : dispatch(showAlert({ message: 'status maximun length is 120 character' })),
        setState({ ...state, status }));
  };

  return (
    <div className='profile__status__container'>
      {(!state.status && !state.edit) || (state.status.trim() === '' && !state.edit) ? (
        <button onClick={() => setState({ ...state, status: 'This is my status', edit: true })}>Add Status</button>
      ) : !state.edit ? (
        <div className='profile__status__innercontainer'>
          <h5>
            {status}
            <RiEditLine title='Edit' className='name--edit' onClick={() => setState({ ...state, edit: true })} />
          </h5>
        </div>
      ) : (
        <div className='profile__status__innercontainer'>
          <textarea onChange={handleChange} name='status' onBlur={handleUpdate} maxLength={120} defaultValue={state.status} />
        </div>
      )}
      {/* {!state.edit ? (
        <div className='profile__status__innercontainer'>
          <h5>
            {status}
            <RiEditLine title='Edit' className='name--edit' onClick={() => setState({ ...state, edit: true })} />
          </h5>
        </div>
      ) : (
        <div className='profile__status__innercontainer'>
          <textarea onChange={handleChange} name='status' onBlur={handleUpdate} maxLength={120} defaultValue={state.status} />
        </div>
      )} */}
    </div>
  );
};
