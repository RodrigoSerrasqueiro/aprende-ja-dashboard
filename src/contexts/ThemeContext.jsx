/* eslint-disable react/prop-types */
import { useState, createContext } from 'react';
import lightTheme from '../themes/light';
import darkTheme from '../themes/dark';

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(lightTheme);
  const [darkMode, setDarkMode] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === lightTheme ? darkTheme : lightTheme));
    setDarkMode(!darkMode)
  };

  return (
    <ThemeContext.Provider value={{ theme, darkMode, toggleTheme, openMenu, setOpenMenu }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeProvider, ThemeContext };