import React, { createContext, useState } from 'react';

export const MobileNavContext = createContext();

const Provider = ({ children }) => {
  const [navIsOpen, setNavState] = useState(false);

  return (
    <MobileNavContext.Provider
      value={{
        navIsOpen,
        toggleNavOpen: () => setNavState(!navIsOpen),
      }}>
      {children}
    </MobileNavContext.Provider>
  );
};

export default ({ element }) => <Provider>{element}</Provider>;
