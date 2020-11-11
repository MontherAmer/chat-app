import React, { createContext, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
export const ThemeContext = createContext();

export default props => {
  const { theme } = useSelector(state => state.userState);
  const [state, setState] = useState({ theme: 'light' });
  let l = localStorage.getItem('LETS_CHAT_THEME');
  useEffect(() => {
    return theme ? setState({ ...state, theme }) : l ? setState({ ...state, theme: l }) : setState({ ...state, theme: 'light' });
  }, [theme, l]);

  return <ThemeContext.Provider value={{ ...state }}>{props.children}</ThemeContext.Provider>;
};
