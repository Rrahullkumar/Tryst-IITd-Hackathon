import { createContext, useState, useContext } from "react";

const multiplayerContext = createContext();

export const MultiplayerProvider = ({ children }) => {
  const [peers, setPeers] = useState([]);

  const sendUpdate = (update) => {
    setPeers((prev) => [
      ...prev.filter((p) => p.user !== update.user),
      { ...update, timestamp: Date.now() },
    ]);
  };

  return (
    <multiplayerContext.Provider value={{ peers, sendUpdate }}>
      {children}
    </multiplayerContext.Provider>
  );
};

export const useMultiplayer = () => useContext(multiplayerContext);

export default multiplayerContext;