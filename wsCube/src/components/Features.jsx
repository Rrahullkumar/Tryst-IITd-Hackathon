import React from "react";
import { motion } from "framer-motion";
import { FaRobot, FaGamepad, FaUserGraduate, FaChartLine, FaTrophy, FaUsers } from "react-icons/fa";

const Features = () => {
  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  // Feature data
  const features = [
    {
      icon: <FaRobot className="w-12 h-12 text-teal-500" />,
      title: "AI-Powered Adaptation",
      description: "Dynamic difficulty adjustment based on your performance and learning style.",
    },
    {
      icon: <FaGamepad className="w-12 h-12 text-coral-500" />,
      title: "Gamified Learning",
      description: "Complete quests, earn badges, and climb leaderboards for a fun learning experience.",
    },
    {
      icon: <FaUserGraduate className="w-12 h-12 text-orange-500" />,
      title: "Personalized Learning",
      description: "Tailored content and feedback to match your unique learning style.",
    },
    {
      icon: <FaChartLine className="w-12 h-12 text-teal-500" />,
      title: "Progress Tracking",
      description: "Visualize your growth with detailed dashboards and skill assessments.",
    },
    {
      icon: <FaTrophy className="w-12 h-12 text-coral-500" />,
      title: "Achievements & Rewards",
      description: "Unlock trophies and rewards as you master new skills.",
    },
    {
      icon: <FaUsers className="w-12 h-12 text-orange-500" />,
      title: "Global Community",
      description: "Collaborate and compete with learners from around the world.",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-teal-200 to-teal-250">
      <div className="container mx-auto px-40">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-teal-900 mb-12"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
        >
          Key Features
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
              variants={itemVariants}
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-teal-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;