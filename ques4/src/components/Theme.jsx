import React, { createContext, useReducer, useEffect } from 'react';

export const ThemeContext = createContext();

const TOGGLE_THEME = 'TOGGLE_THEME';

const themeReducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return state === 'light' ? 'dark' : 'light';
    default:
      return state;
  }
};


const getInitialTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  return savedTheme ? savedTheme : 'light';
};

export const Theme = ({ children }) => {
  const [theme, dispatch] = useReducer(themeReducer, getInitialTheme());

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    dispatch({ type: TOGGLE_THEME });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  );
};
