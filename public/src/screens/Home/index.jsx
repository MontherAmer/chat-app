import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../store/actions';

import Menu from './Menu';

export default () => {
  const { screen } = useSelector(state => state.utilsState);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    document.cookie = 'ChAt_ApP_CoOkIeS= ; expires = Thu, 01 Jan 1970 00:00:00 GMT';
    dispatch(logOut());
  };
  return (
    <div className='home'>
      <div>
        <Menu />
      </div>
      <div>hello</div>
      <div>hello</div>

      {/* <button onClick={handleLogOut}>LogOut</button> */}
    </div>
  );
};
