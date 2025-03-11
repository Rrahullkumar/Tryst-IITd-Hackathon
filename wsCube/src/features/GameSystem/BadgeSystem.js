import React from "react";
import { usePoints } from "./PointsContext";

const badgeRequirements = {
  "html-novice": { threshold: 500, icon: "🅷" },
  "css-wizard": { threshold: 1500, icon: "🎨" },
  "js-master": { threshold: 3000, icon: "🟨" },
  "gold-coder": { threshold: 10000, icon: "🏆" },
};

export const BadgeProvider = ({ children }) => {
  const { badges } = usePoints();

  return (
    <div className="badge-system">
      {Object.entries(badgeRequirements).map(([id, { icon }]) => (
        <div key={id} className={`badge ${badges.includes(id) ? "unlocked" : "locked"}`}>
          {badges.includes(id) ? icon : "🔒"}
        </div>
      ))}
      {children}
    </div>
  );
};