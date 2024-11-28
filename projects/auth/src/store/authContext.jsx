import { createContext, useState } from "react";

export const authContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  return <authContext.Provider value={{ users, setUsers }}>{children}</authContext.Provider>;
};

export default AuthProvider;
