// src/components/Result.jsx
import { useLocation, useNavigate } from "react-router-dom";
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { motion } from "framer-motion";

ChartJS.register(ArcElement, Tooltip, Legend);

const Result = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { score, total, questType, recommendations } = state || {};

  const data = {
    labels: ['Correct', 'Incorrect'],
    datasets: [{
      data: [score, total - score],
      backgroundColor: ['#3B82F6', '#1E293B'],
      hoverBackgroundColor: ['#2563EB', '#0F172A'],
      borderWidth: 0,
    }]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 flex flex-col items-center justify-center p-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl w-full space-y-8"
      >
        <h1 className="text-4xl font-bold text-center text-white mb-8">
          {questType} Quest Results
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Chart Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8">
            <h2 className="text-2xl font-semibold mb-6 text-blue-400">
              Performance Overview
            </h2>
            <div className="max-w-xs mx-auto">
              <Doughnut data={data} />
            </div>
            <div className="mt-6 text-center text-xl font-bold">
              {score}/{total} Correct Answers
            </div>
          </div>

          {/* Recommendations */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8">
            <h2 className="text-2xl font-semibold mb-6 text-green-400">
              AI Learning Path
            </h2>
            <div className="space-y-4">
              {recommendations?.map((rec, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -20 }}
                  animate={{ x: 0 }}
                  className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-blue-400 rounded-full" />
                    <span>{rec}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <button
            onClick={() => navigate(-1)}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold
                     transition-all transform hover:scale-105 active:scale-95"
          >
            Back to Dashboard
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Result;