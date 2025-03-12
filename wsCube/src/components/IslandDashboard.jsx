// src/components/IslandDashboard.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import AIAssistant from "./AIAssistant";
import { useParams, useNavigate } from "react-router-dom";

const ISLAND_SCENES = {
  "web-dev": "https://prod.spline.design/EQ2siQLXgHSmqmKq/scene.splinecode",
  "digital-marketing": "https://prod.spline.design/aDFdNhMCoB-gKJqW/scene.splinecode",
  "app-dev": "https://prod.spline.design/XIm6ySIkGguYDIuA/scene.splinecode",
  "cyber-security": "https://prod.spline.design/uVoctd6a013pusoR/scene.splinecode",
  "data-analytics": "https://prod.spline.design/mraLHvKcdEzxgI6K/scene.splinecode",
};

const DEFAULT_QUESTS = {
  "web-dev": [
    { title: "HTML Basics", description: "Learn the fundamentals of HTML.", type: "html" },
    { title: "CSS Styling", description: "Master CSS for beautiful designs.", type: "css" },
  ],
  "digital-marketing": [
    { title: "SEO Basics", description: "Learn how to optimize for search engines.", type: "seo" },
    { title: "Social Media", description: "Master social media marketing.", type: "social-media" },
  ],
  // Add quests for other islands
};

const IslandDashboard = ({ user }) => {
  const { islandId } = useParams();
  const navigate = useNavigate();

  // Ensure user.progress is defined
  const [progress, setProgress] = useState(user?.progress?.[islandId] || 0);
  const [difficulty, setDifficulty] = useState(user?.aiSettings?.difficulty || 1.0);

  // Get quests for the current island or use default quests
  const QUESTS = DEFAULT_QUESTS[islandId] || [];

  const adjustDifficulty = (performance) => {
    const newDifficulty =
      performance > 80
        ? difficulty * 1.2
        : performance < 50
        ? difficulty * 0.8
        : difficulty;
    setDifficulty(Math.min(Math.max(newDifficulty, 0.5), 2.0));
  };

  const handleQuestClick = (quest) => {
    navigate(`/quest/${quest.type}`, { state: { quest } });
  };

  return (
    <div className="h-screen relative">
      {/* Spline Scene */}
      <Spline scene={ISLAND_SCENES[islandId]} className="absolute inset-0 z-0" />

      {/* Overlay UI */}
      <div className="absolute top-40 left-4 bg-black/50 p-6 rounded-2xl backdrop-blur-md">
        <h2 className="text-3xl font-bold mb-4">{user?.name}'s Progress</h2>
        <div className="h-2 bg-gray-800 rounded-full mb-4">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold">Level {Math.floor(progress / 10)}</div>
            <div className="text-sm">Current Level</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">{user?.points}</div>
            <div className="text-sm">XP Points</div>
          </div>
        </div>
      </div>

      {/* AI Assistant */}
      <div className="top-40">
      <AIAssistant
        difficulty={difficulty}
        learningStyle={user?.learningStyle}
        onAdjust={adjustDifficulty}
      />
      </div>

      {/* Interactive Quests */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-4">
        {QUESTS.map((quest, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            className="bg-black/50 p-6 rounded-2xl backdrop-blur-md cursor-pointer"
            onClick={() => handleQuestClick(quest)}
          >
            <h3 className="text-xl font-bold mb-2">{quest.title}</h3>
            <p className="text-sm opacity-75">{quest.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default IslandDashboard;