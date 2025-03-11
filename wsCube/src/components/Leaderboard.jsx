// components/Leaderboard.jsx
export default function Leaderboard() {
    const { users } = useGameState(); // Connect to global state/backend
    
    return (
      <div className="leaderboard">
        <h2>🏆 Global Leaderboard</h2>
        {users.sort((a,b) => b.points - a.points).map((user, index) => (
          <div key={user.id} className="leaderboard-entry">
            <span>#{index + 1}</span>
            <Avatar user={user} />
            <span>{user.points} XP</span>
            <BadgeStrip badges={user.badges} />
          </div>
        ))}
      </div>
    );
  }