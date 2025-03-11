import React from "react";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const HeroSection = ({ user, onStartQuest }) => {
  const navigate = useNavigate();

  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-teal-900 to-teal-600 overflow-hidden">
      {/* 3D Spline Element (Fullscreen) */}
      <div className="absolute inset-0 z-10 w-full h-full pointer-events-none">
        <Spline
          scene="https://prod.spline.design/t2wFv7fp8vlE14CX/scene.splinecode"
          className="w-full h-full pointer-events-auto"
        />
      </div>

      {/* Overlay Content (Centered and Wider) */}
      <motion.div
        className="relative z-20 text-center text-white px-4 w-4/5 max-w-5xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {/* Animated Heading */}
        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Embark on Your Learning Adventure
        </motion.h1>

        {/* Animated Paragraph */}
        <motion.p
          className="text-xl md:text-2xl mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Master tech skills by exploring AI-powered islands. Earn rewards, climb
          leaderboards, and join a global community.
        </motion.p>

        {/* Animated Button */}
        <motion.button
          onClick={() => {
            if (user) navigate("/islands");
            else onStartQuest();
          }}
          className="bg-blue-400 hover:bg-blue-500 text-white font-semibold py-3 px-8 rounded-full text-lg shadow-lg transform transition-all hover:scale-105"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Start Your Free Quest →
        </motion.button>

        {/* Animated Mini Stats Bar */}
        <motion.div
          className="mt-12 flex justify-center space-x-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="text-center">
            <span className="text-3xl font-bold">50k+</span>
            <p className="text-sm">Learners</p>
          </div>
          <div className="text-center">
            <span className="text-3xl font-bold">5</span>
            <p className="text-sm">Islands</p>
          </div>
          <div className="text-center">
            <span className="text-3xl font-bold">1M+</span>
            <p className="text-sm">Quests Completed</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;