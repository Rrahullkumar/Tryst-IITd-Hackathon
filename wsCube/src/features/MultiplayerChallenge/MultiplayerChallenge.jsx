import { useState, useEffect } from 'react';
import { useMultiplayer } from "./multiplayerContext.jsx";

const MultiplayerChallenge = () => {
  const { peers, sendUpdate } = useMultiplayer();
  const [code, setCode] = useState('// Start coding with peers!\n');
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(t => (t > 0 ? t - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Mock peer updates
  useEffect(() => {
    const fakeUpdate = setInterval(() => {
      sendUpdate({
        user: `Peer-${Math.floor(Math.random() * 1000)}`,
        code: `// Random code ${Math.random().toString(36).substring(7)}\n`
      });
    }, 5000);
    return () => clearInterval(fakeUpdate);
  }, [sendUpdate]);

  return (
    <div className="multiplayer-challenge">
      <div className="challenge-header">
        <h2>Collaborative Code Jam ⚡</h2>
        <div className="timer">Time Left: {Math.floor(timeLeft/60)}:{timeLeft%60}</div>
      </div>
      
      <div className="code-area">
        <textarea
          value={code}
          onChange={(e) => {
            setCode(e.target.value);
            sendUpdate({ code: e.target.value });
          }}
          placeholder="Collaborate with peers in real-time..."
        />
      </div>

      <div className="peer-list">
        {peers.map((peer, index) => (
          <div key={index} className="peer">
            <div className="peer-status" />
            <span>{peer.user}</span>
            <pre>{peer.code.slice(0, 50)}...</pre>
          </div>
        ))}
      </div>
    </div>
  );
};

// Context provider for multiplayer (mock)
export const MultiplayerProvider = ({ children }) => {
  const [peers, setPeers] = useState([]);
  
  const sendUpdate = (update) => {
    setPeers(prev => [
      ...prev.filter(p => p.user !== update.user),
      { ...update, timestamp: Date.now() }
    ]);
  };

  return (
    <multiplayerContext.Provider value={{ peers, sendUpdate }}>
      {children}
    </multiplayerContext.Provider>
  );
};

export default MultiplayerChallenge;