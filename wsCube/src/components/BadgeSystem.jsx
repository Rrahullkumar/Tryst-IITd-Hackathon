// components/BadgeSystem.jsx
const badgeRequirements = {
    'html-novice': { threshold: 500, icon: '🅷' },
    'css-wizard': { threshold: 1500, icon: '🎨' },
    // ...
  };
  
  export default function BadgeSystem({ badges }) {
    return (
      <div className="badge-collection">
        {Object.entries(badgeRequirements).map(([id, { icon }]) => (
          <div key={id} className={`badge ${badges.includes(id) ? 'unlocked' : 'locked'}`}>
            {badges.includes(id) ? icon : '🔒'}
          </div>
        ))}
      </div>
    );
  }