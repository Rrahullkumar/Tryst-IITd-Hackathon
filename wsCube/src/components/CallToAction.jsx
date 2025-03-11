// CallToAction.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaTelegramPlane } from "react-icons/fa";

const CallToAction = () => {
  return (
    <section className="relative py-20 bg-blue-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-96 h-96 bg-teal-400 rounded-full blur-3xl -top-48 -left-48 animate-pulse" />
        <div className="absolute w-96 h-96 bg-purple-500 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h2 
          className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          Ready for the Ultimate Learning Quest?
        </motion.h2>

        <motion.div 
          className="inline-block relative group"
          whileHover={{ scale: 1.05 }}
        >
          <div className="absolute inset-0 bg-cyan-400 rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
          
          <button className="relative flex items-center space-x-4 bg-black/20 backdrop-blur-lg px-16 py-6 rounded-full border-2 border-cyan-400/30 hover:border-cyan-400 transition-all duration-300">
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">
              Begin Your Journey
            </span>
            <FaTelegramPlane className="w-8 h-8 text-cyan-400 group-hover:animate-wiggle" />
            
            {/* Hover Effect Elements */}
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-cyan-400 rounded-full animate-ping" />
              <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-purple-400 rounded-full animate-ping delay-100" />
            </div>
          </button>

          {/* Particle Burst Animation */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;