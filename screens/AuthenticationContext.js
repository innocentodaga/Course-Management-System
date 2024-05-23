import { createContext, useContext, useState } from 'react';

const AuthenticationContext = createContext();

export const AuthenticationProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);

  const login = () => {
    // Logic for handling login
    setAuthenticated(true);
  };

  const logout = () => {
    // Logic for handling logout
    setAuthenticated(false);
  };

  return (
    <AuthenticationContext.Provider value={{ authenticated, login, logout }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export const useAuthentication = () => {
  return useContext(AuthenticationContext);
};
