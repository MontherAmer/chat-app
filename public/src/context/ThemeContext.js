import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export default props => {
  const [state, setState] = useState({
    theme: 'light'
  });

  return <ThemeContext.Provider value={{ ...state }}>{props.children}</ThemeContext.Provider>;
};
