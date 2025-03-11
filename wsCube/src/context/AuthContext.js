// src/context/AuthContext.js
import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [showAuth, setShowAuth] = useState(false);

  return (
    <AuthContext.Provider value={{ user, setUser, showAuth, setShowAuth }}>
      {children}
    </AuthContext.Provider>
  );
};