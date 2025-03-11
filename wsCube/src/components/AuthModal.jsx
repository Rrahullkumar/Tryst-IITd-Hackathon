import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiUser, FiLock } from "react-icons/fi";

const AuthModal = ({ onClose, onAuth }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate a user login with dummy data
    const userData = {
      name: username || "Adventurer",
      points: 0,
      badges: [],
    };
    onAuth(userData); // Pass user data to parent
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="bg-gradient-to-br from-blue-900 to-purple-900 p-8 rounded-2xl w-96 relative"
        initial={{ y: 50 }}
        animate={{ y: 0 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center">
          {isLogin ? "Welcome Back! 🚀" : "Start Your Quest! 🌟"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center bg-white/10 p-3 rounded-lg">
            <FiUser className="mr-2" />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-transparent w-full focus:outline-none"
            />
          </div>

          <div className="flex items-center bg-white/10 p-3 rounded-lg">
            <FiLock className="mr-2" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-transparent w-full focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 py-3 rounded-lg font-bold hover:scale-105 transition-transform"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <p
          className="text-center mt-4 cursor-pointer"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? "New Adventurer? Create Account" : "Already have an account? Login"}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default AuthModal;