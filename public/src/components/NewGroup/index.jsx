import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { suggestUsers } from '../../store/actions';

export default () => {
  const dispatch = useDispatch();
  const { usersList } = useSelector(state => state.utilsState);

  useEffect(() => {
    dispatch(suggestUsers());
  }, []);

  console.log('usersList', usersList);

  return <div>New Group</div>;
};
