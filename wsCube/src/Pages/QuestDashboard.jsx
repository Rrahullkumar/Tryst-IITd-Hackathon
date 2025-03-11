import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import Confetti from "react-confetti";
import { FiStar, FiAward, FiZap, FiCheckCircle } from "react-icons/fi";

const QuestDashboard = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [name, setName] = useState("");
  const [points, setPoints] = useState(1500);
  const [showConfetti, setShowConfetti] = useState(false);
  const [activeQuest, setActiveQuest] = useState(null);
  const [badges, setBadges] = useState([
    { name: "Master Explorer", icon: <FiStar />, color: "text-yellow-400" },
    { name: "Tech Guru", icon: <FiZap />, color: "text-blue-400" },
    { name: "Quest Conqueror", icon: <FiAward />, color: "text-purple-400" },
  ]);

  // Fix: Reset name on page reload
  useEffect(() => {
    const savedName = localStorage.getItem("studentName");
    if (savedName) {
      setName(savedName);
    } else {
      setName(""); // Ensure name is reset if not found in localStorage
    }

    // Simulate real-time updates
    const interval = setInterval(() => {
      setPoints((prev) => prev + Math.floor(Math.random() * 10));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const onSubmit = ({ studentName }) => {
    localStorage.setItem("studentName", studentName);
    setName(studentName);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  const startQuest = (quest) => {
    setActiveQuest(quest);
    setTimeout(() => setActiveQuest(null), 2000);
    setPoints((prev) => prev + 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-space-900 via-space-800 to-space-900 text-space-100 p-8 pt-25 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-space-300 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 0.5, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 5,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      {/* Confetti Animation */}
      <AnimatePresence>
        {showConfetti && <Confetti recycle={false} numberOfPieces={400} />}
      </AnimatePresence>

      {/* Name Input Form */}
      {!name ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center justify-center h-screen relative z-10"
        >
          <div className="bg-space-700/50 backdrop-blur-lg p-12 rounded-3xl shadow-2xl border border-space-400/20">
            <motion.h2
              className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
              transition={{ repeat: Infinity, duration: 4 }}
            >
              Begin Your Odyssey 🚀
            </motion.h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="relative">
                <input
                  {...register("studentName", { required: true })}
                  placeholder="Enter your cosmic alias"
                  className="w-full p-4 bg-space-800/50 border-2 border-space-400/20 rounded-xl focus:outline-none focus:border-purple-400 transition-all text-space-100 placeholder-space-300"
                />
                {errors.studentName && (
                  <motion.span
                    className="absolute top-full text-red-400 text-sm mt-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    Name is required!
                  </motion.span>
                )}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-3 text-space-100"
              >
                <span>Launch Dashboard</span>
                <FiZap className="w-6 h-6" />
              </motion.button>
            </form>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative z-10 space-y-12"
        >
          {/* Header Section */}
          <header className="flex flex-col items-center space-y-4">
            <motion.h1
              className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
              transition={{ repeat: Infinity, duration: 4 }}
            >
              Welcome, {name}! 🌌
            </motion.h1>

            <div className="flex gap-8">
              {/* XP Points Card */}
              <div className="bg-space-700/50 backdrop-blur-lg p-6 rounded-2xl flex items-center gap-4">
                <div className="relative w-20 h-20">
                  <div className="absolute inset-0 border-4 border-purple-400/30 rounded-full" />
                  <div
                    className="absolute inset-0 border-4 border-purple-400 rounded-full"
                    style={{ clipPath: `inset(0 ${100 - (points % 1000) / 10}% 0 0)` }}
                  />
                  <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold">
                    {Math.floor(points / 1000)}
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{points} XP</h3>
                  <p className="text-space-300">Cosmic Points</p>
                </div>
              </div>

              {/* Achievements Card */}
              <div className="bg-space-700/50 backdrop-blur-lg p-6 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">Achievements</h3>
                <div className="flex gap-4">
                  {badges.map((badge, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -5 }}
                      className={`p-3 rounded-lg ${badge.color} bg-space-800/50`}
                    >
                      <div className="text-3xl">{badge.icon}</div>
                      <p className="text-sm mt-2">{badge.name}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </header>

          {/* Quests Section */}
          <section className="space-y-8">
            <h2 className="text-4xl font-bold text-center">Active Quests ⚡</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {["Digital Marketing", "Web Development", "App Development", "Data Analytics"].map((quest, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10 }}
                  className="bg-space-700/50 backdrop-blur-lg p-6 rounded-2xl border-2 border-space-400/20 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 hover:opacity-100 transition-opacity" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold">{quest}</h3>
                      <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                        {index % 2 === 0 ? "🎯" : "🏆"}
                      </div>
                    </div>

                    <div className="h-2 bg-space-600 rounded-full mb-4">
                      <div
                        className="h-full bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"
                        style={{ width: `${Math.random() * 30 + 70}%` }}
                      />
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => startQuest(quest)}
                      className="w-full bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 text-space-100"
                    >
                      <FiCheckCircle className="w-5 h-5" />
                      {activeQuest === quest ? "Quest Active!" : "Start Quest"}
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </motion.div>
      )}
    </div>
  );
};

export default QuestDashboard;