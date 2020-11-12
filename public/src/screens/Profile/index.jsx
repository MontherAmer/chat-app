import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { RiMore2Line, RiUserLine, RiEditBoxLine, RiDeleteBin7Line } from 'react-icons/ri';

import ProfileImage from './ProfileImage';

export default () => {
  const [state, setState] = useState({});
  const userDate = useSelector(state => state.userState);

  return (
    <div className='profile'>
      <ProfileImage _id={userDate._id} image={userDate.image} />
    </div>
  );
};

// email: { type: String, required: true, index: { unique: true } },
// name: { type: String, minlength: 3, default: 'Guest' },
// language: { type: String, enum: ['E', 'A'], default: 'E' },
// status: { type: String },
// password: { type: String },
// show_online: { type: Boolean, default: true },
// online: { type: Boolean, default: true },
// contacts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Thread' }],
// provider: { type: String, default: 'local' },
// theme: { type: String, default: 'light' }
