// src/components/IslandDashboard.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import AIAssistant from "./AIAssistant";
import { useParams, useNavigate } from "react-router-dom";
import { FaLock } from "react-icons/fa";

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

// Special unlockable elements for each island
const UNLOCKABLE_ELEMENTS = {
  "web-dev": [
    { 
      name: "Lighthouse", 
      requiredProgress: 30, 
      splineUrl: "https://prod.spline.design/wh8-taICYGgvCulR/scene.splinecode",
      description: "A guiding light to web development mastery"
    },
    { 
      name: "Maze Game Zone", 
      requiredProgress: 60, 
      splineUrl: "https://prod.spline.design/PUt7mLzr2eWRU7OU/scene.splinecode",
      description: "Test your skills in the interactive maze"
    }
  ],
  "digital-marketing": [
    { 
      name: "Analytics Tower", 
      requiredProgress: 40, 
      splineUrl: "https://prod.spline.design/wh8-taICYGgvCulR/scene.splinecode",
      description: "Track your marketing performance"
    }
  ],
  // Add elements for other islands as needed
};

const IslandDashboard = ({ user }) => {
  const { islandId } = useParams();
  const navigate = useNavigate();

  // Ensure user.progress is defined
  const [progress, setProgress] = useState(user?.progress?.[islandId] || 0);
  const [difficulty, setDifficulty] = useState(user?.aiSettings?.difficulty || 1.0);
  
  // Track unlocked elements
  const [unlockedElements, setUnlockedElements] = useState([]);

  // Get quests for the current island or use default quests
  const QUESTS = DEFAULT_QUESTS[islandId] || [];
  
  // Get special elements for the current island
  const specialElements = UNLOCKABLE_ELEMENTS[islandId] || [];

  useEffect(() => {
    // Check which elements should be unlocked based on progress
    const newUnlockedElements = specialElements
      .filter(element => progress >= element.requiredProgress)
      .map(element => element.name);
    
    setUnlockedElements(newUnlockedElements);
  }, [progress, islandId]);

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

  // For demo purposes - simulate completing a quest to unlock elements
  const simulateQuestCompletion = () => {
    const newProgress = Math.min(progress + 20, 100);
    setProgress(newProgress);
  };

  const isElementUnlocked = (elementName) => {
    return unlockedElements.includes(elementName);
  };

  return (
    <div className="h-screen relative">
      {/* Spline Scene */}
      <Spline scene={ISLAND_SCENES[islandId]} className="absolute inset-0 z-0" />

      {/* Overlay UI */}
      <div className="absolute top-40 left-4 bg-white/50 p-6 rounded-2xl backdrop-blur-md">
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
        
        {/* Demo button - remove in production */}
        <button 
          onClick={simulateQuestCompletion}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Simulate Quest Completion
        </button>
      </div>

      {/* AI Assistant */}
      <div className="top-40">
        <AIAssistant
          difficulty={difficulty}
          learningStyle={user?.learningStyle}
          onAdjust={adjustDifficulty}
        />
      </div>

      {/* Special Unlockable Elements - Bottom Left */}
      <div className="absolute bottom-1 left-5 flex flex-col gap-2 z-10">
        {specialElements.map((element, index) => (
          <div key={index} className="relative">
            {/* The special element container */}
            <motion.div
              className={`w-35 h-35 rounded-xl overflow-hidden relative ${
                isElementUnlocked(element.name) ? "opacity-100" : "opacity-70"
              }`}
              whileHover={{ scale: isElementUnlocked(element.name) ? 1.05 : 1 }}
            >
              {/* Show spline element if unlocked, otherwise show shadow placeholder */}
              {isElementUnlocked(element.name) ? (
                <Spline scene={element.splineUrl} />
              ) : (
                <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                  <FaLock size={32} className="text-gray-400" />
                </div>
              )}
              
              {/* Information overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2">
                <h3 className="font-bold text-sm">{element.name}</h3>
                {isElementUnlocked(element.name) ? (
                  <p className="text-xs">{element.description}</p>
                ) : (
                  <p className="text-xs">Unlocks at {element.requiredProgress}% progress</p>
                )}
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Interactive Quests */}
      <div className="absolute bottom-8 right-0 left-0 flex justify-center gap-4">
        {QUESTS.map((quest, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            className="bg-white/50 p-6 rounded-2xl backdrop-blur-md cursor-pointer"
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