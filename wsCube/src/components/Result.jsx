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

  // Dummy leaderboard data
  const leaderboard = [
    { name: "Alice", score: 95, badge: "🏆" },
    { name: "Bob", score: 90, badge: "🥈" },
    { name: "Charlie", score: 85, badge: "🥉" },
    { name: "Diana", score: 80, badge: "⭐" },
    { name: "Eve", score: 75, badge: "🌟" },
  ];

  const data = {
    labels: ['Correct', 'Incorrect'],
    datasets: [{
      data: [score, total - score],
      backgroundColor: ['#4F46E5', '#E0E7FF'],
      hoverBackgroundColor: ['#4338CA', '#C7D2FE'],
      borderWidth: 0,
    }]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex flex-col items-center justify-center p-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl w-full space-y-8"
      >
        <h1 className="text-4xl font-bold text-center text-slate-800 mb-8 pt-10">
          {questType?.toUpperCase()} QUEST RESULTS
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Chart Section */}
          <div className="bg-white backdrop-blur-lg rounded-3xl p-8 shadow-lg border border-slate-100">
            <h2 className="text-2xl font-semibold mb-6 text-indigo-600">
              Performance Overview
            </h2>
            <div className="max-w-xs mx-auto">
              <Doughnut data={data} />
            </div>
            <div className="mt-6 text-center text-xl font-bold text-slate-700">
              {score}/{total} Correct Answers
            </div>
          </div>

          {/* Recommendations */}
          <div className="bg-white backdrop-blur-lg rounded-3xl p-8 shadow-lg border border-slate-100">
            <h2 className="text-2xl font-semibold mb-6 text-teal-600">
              AI Learning Path
            </h2>
            <div className="space-y-4">
              {recommendations?.map((rec, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -20 }}
                  animate={{ x: 0 }}
                  className="p-4 bg-indigo-50/50 rounded-lg hover:bg-indigo-50 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-indigo-400 rounded-full transition-colors group-hover:bg-indigo-600" />
                    <span className="text-slate-700 group-hover:text-slate-900">{rec}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Leaderboard Section */}
        <div className="bg-white backdrop-blur-lg rounded-3xl p-8 shadow-lg border border-slate-100">
          <h2 className="text-2xl font-semibold mb-6 text-purple-600">
            Top Performers
          </h2>
          <div className="space-y-4">
            {leaderboard.map((student, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between p-4 bg-purple-50/50 rounded-lg hover:bg-purple-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="text-lg font-semibold text-purple-600">
                    {student.badge}
                  </span>
                  <span className="text-slate-700">{student.name}</span>
                </div>
                <span className="text-slate-700 font-bold">{student.score} Points</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8 pb-10">
          <button
            onClick={() => navigate(-1)}
            className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold
                     transition-all transform hover:scale-105 active:scale-95 shadow-md hover:shadow-indigo-100"
          >
            Back to Dashboard
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Result;