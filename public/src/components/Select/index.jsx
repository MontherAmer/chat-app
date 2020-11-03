import React, { useState, useEffect } from 'react';

import { AiFillCaretDown } from 'react-icons/ai';

// * ─── RECIVE OPTIONS ───────────────────────────────────────────────────────────
// * options which is an object with 2 keys (label and vlaue)
// * selected callback function to get the selected option

export default ({ options, selected, defaultValue }) => {
  const [state, setState] = useState({ choosenOption: {}, showOptions: false });

  const handleClick = e => {
    setState({ ...state, choosenOption: e, showOptions: !state.showOptions });
    selected(e);
  };

  // * check if the card is assigned to user display as default on select
  useEffect(() => {
    if (defaultValue) {
      options.map(option => {
        if (option.value === defaultValue._id) {
          setState({ ...state, choosenOption: option });
        }
      });
    }
  }, [defaultValue]);

  const toggleOptions = () => setState({ ...state, showOptions: !state.showOptions });

  return (
    <div className='custom-select'>
      <div className='select__header' onClick={toggleOptions}>
        {state.choosenOption.label || <p>Choose</p>} <AiFillCaretDown className='pointer' />
      </div>
      {state.showOptions ? (
        <div className='select__options' onMouseLeave={toggleOptions}>
          {options.map((option, i) => (
            <div key={i} className='select__option' onClick={() => handleClick(option)}>
              {option.label}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};
