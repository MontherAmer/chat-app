import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import AddContact from './AddContact';
import Group from './CreateGroup';

import { RiArrowDropRightLine, RiArrowDropUpLine, RiUserLine, RiGroupLine } from 'react-icons/ri';

export default () => {
  const [state, setState] = useState({ first: false });
  const dispatch = useDispatch();

  const handleCollapse = e => setState({ ...state, [e]: !state[e] });

  return (
    <div className='create'>
      {/* Create Contact */}
      <div className='collapsible' onClick={() => handleCollapse('first')}>
        <div className='collabse__header'>
          <RiUserLine />
          <p>&nbsp; Add Contact</p>
        </div>
        {state.first ? <RiArrowDropUpLine size={20} /> : <RiArrowDropRightLine size={20} />}
      </div>
      <div className={`collapse_content ${state.first ? 'first--collabse ' : ''}`}>
        <AddContact close={() => handleCollapse('first')} />
      </div>
      {/* Create Group */}
      <div className='collapsible' onClick={() => handleCollapse('second')}>
        <div className='collabse__header'>
          <RiGroupLine />
          <p>&nbsp;Create group</p>
        </div>
        {state.second ? <RiArrowDropUpLine size={20} /> : <RiArrowDropRightLine size={20} />}
      </div>
      <div className={`collapse_content ${state.second ? 'second--collabse ' : ''}`}>
        <Group close={() => handleCollapse('second')} />
      </div>
    </div>
  );
};
