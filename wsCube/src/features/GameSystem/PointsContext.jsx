import { createContext, useState, useContext } from "react";

const PointsContext = createContext();

export const PointsProvider = ({ children }) => {
  const [points, setPoints] = useState(0);
  const [badges, setBadges] = useState([]);

  const addPoints = (amount) => {
    setPoints((prev) => {
      const newTotal = prev + amount;
      checkForBadges(newTotal);
      return newTotal;
    });
  };

  const checkForBadges = (total) => {
    const newBadges = [];
    if (total >= 1000 && !badges.includes("gold-coder")) {
      newBadges.push("gold-coder");
    }
    if (total >= 5000) {
      newBadges.push("master-coder");
    }
    setBadges((prev) => [...prev, ...newBadges]);
  };


  return (
    <PointsContext.Provider value={{ points, addPoints, badges }}>
      {children}
    </PointsContext.Provider>
  );
};

export const usePoints = () => useContext(PointsContext);