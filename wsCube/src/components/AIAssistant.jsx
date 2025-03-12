// src/components/AIAssistant.jsx (New)
import { motion } from 'framer-motion';
import { FiActivity, FiTrendingUp, FiSmile } from 'react-icons/fi';

const AIAssistant = ({ difficulty, learningStyle, onAdjust }) => {
  return (
    <motion.div 
      className="absolute top-40 right-4 bg-white/50 p-6 rounded-2xl backdrop-blur-md w-80"
      initial={{ x: 100 }}
      animate={{ x: 0 }}
    >
      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
        <FiActivity /> AI Mentor
      </h3>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span>Difficulty Level:</span>
          <div className="flex gap-2">
            {[0.5, 1.0, 1.5, 2.0].map((level) => (
              <button
                key={level}
                onClick={() => onAdjust(level)}
                className={`px-3 py-1 rounded-full ${
                  difficulty === level ? 'bg-cyan-400 text-white' : 'bg-white/10'
                }`}
              >
                {level}x
              </button>
            ))}
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <FiTrendingUp className="flex-shrink-0" />
          <span>Recommended for {learningStyle} learners</span>
        </div>
        
        <div className="flex items-center gap-3">
          <FiSmile className="flex-shrink-0" />
          <span>Adaptive feedback activated</span>
        </div>
      </div>
    </motion.div>
  );
};

export default AIAssistant;