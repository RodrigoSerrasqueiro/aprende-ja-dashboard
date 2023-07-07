/* eslint-disable react/prop-types */
import { useState, createContext } from 'react';

const GlobalContext = createContext();

function GlobalProvider({ children }) {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <GlobalContext.Provider value={{ openMenu, setOpenMenu }}>
      {children}
    </GlobalContext.Provider>
  );
}

export { GlobalProvider, GlobalContext };