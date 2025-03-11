// src/hooks/useGameState.js
import { useState, useEffect } from 'react';

export const useGameState = (userId) => {
  const [state, setState] = useState(() => {
    const saved = localStorage.getItem(`gameState-${userId}`);
    return saved ? JSON.parse(saved) : DEFAULT_STATE;
  });

  useEffect(() => {
    localStorage.setItem(`gameState-${userId}`, JSON.stringify(state));
  }, [state]);

  return [state, setState];
};