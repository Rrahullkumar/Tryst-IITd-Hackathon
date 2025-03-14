import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaRocket, FaBrain, FaGlobeAmericas, FaMagic, FaMedal, FaUserAstronaut } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";

const WhyChooseUs = () => {
  const navigate = useNavigate();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120 },
    },
  };

  const usps = [
    {
      icon: <FaRocket className="w-16 h-16 text-teal-400" />,
      title: "Blast Off Learning",
      text: "Accelerate skills with our rocket-fueled curriculum",
    },
    {
      icon: <FaBrain className="w-16 h-16 text-pink-500" />,
      title: "AI-Powered IQ Boost",
      text: "Smart algorithms that adapt to your unique brain",
    },
    {
      icon: <GiProgression className="w-16 h-16 text-orange-400" />,
      title: "Level-Up Progression",
      text: "Watch your skills grow with real-time mastery maps",
    },
    {
      icon: <FaGlobeAmericas className="w-16 h-16 text-yellow-400" />,
      title: "Global Quest Arena",
      text: "Compete & collaborate with learners worldwide",
    },
    {
      icon: <FaMagic className="w-16 h-16 text-purple-400" />,
      title: "Magic Feedback System",
      text: "Instant, personalized guidance like never before",
    },
    {
      icon: <FaUserAstronaut className="w-16 h-16 text-indigo-400" />,
      title: "Adventure Learning",
      text: "Explore knowledge islands in immersive 3D worlds",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 to-blue-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
        >
          Why Choose Us?
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {usps.map((usp, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 hover:border-cyan-400 transition-all group"
              variants={itemVariants}
            >
              <div className="flex flex-col items-center">
                <div className="mb-6 group-hover:-translate-y-2 transition-transform">
                  {usp.icon}
                </div>
                <h3 className="text-2xl font-bold text-cyan-300 mb-4 text-center">
                  {usp.title}
                </h3>
                <p className="text-gray-200 text-center">{usp.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Sparkle */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className="inline-block relative group"
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate("/islands")} // Navigate on click
          >
            <div className="absolute inset-0 bg-cyan-400 rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-300" />

            <button className="relative flex items-center space-x-4 bg-black/20 backdrop-blur-lg px-16 py-6 rounded-full border-2 border-cyan-400/30 hover:border-cyan-400 transition-all duration-300">
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">
                Start Your Quest Now
              </span>
              {/* Add an icon if desired */}
              {/* <FaRocket className="w-8 h-8 text-cyan-400 group-hover:animate-wiggle" /> */}
            </button>

            {/* Hover Effect Elements */}
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-cyan-400 rounded-full animate-ping" />
              <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-purple-400 rounded-full animate-ping delay-100" />
            </div>

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
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;