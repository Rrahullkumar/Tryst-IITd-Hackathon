import React, { useState } from "react";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import { useNavigate } from "react-router-dom";

const islands = [
  {
    id: "web-dev",
    title: "Web Development Volcano 🌋",
    scene: "https://prod.spline.design/EQ2siQLXgHSmqmKq/scene.splinecode",
    color: "from-orange-600 to-red-900",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing Island 🌴",
    scene: "https://prod.spline.design/aDFdNhMCoB-gKJqW/scene.splinecode",
    color: "from-blue-600 to-cyan-900",
  },
  {
    id: "app-dev",
    title: "App Development Mountain 🗻",
    scene: "https://prod.spline.design/XIm6ySIkGguYDIuA/scene.splinecode",
    color: "from-purple-600 to-indigo-900",
  },
  {
    id: "cyber-security",
    title: "Cyber Security Fortress 🛡️",
    scene: "https://prod.spline.design/uVoctd6a013pusoR/scene.splinecode",
    color: "from-gray-700 to-black",
  },
  {
    id: "data-analytics",
    title: "Data Analytics Lagoon 📊",
    scene: "https://prod.spline.design/mraLHvKcdEzxgI6K/scene.splinecode",
    color: "from-blue-600 to-cyan-900",
  },
];

const IslandSelection = ({ user }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 1;
  const navigate = useNavigate(); // Add this line

  const handleNext = () => {
    if (currentPage < islands.length - 1) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-space-900 to-space-950 text-white">
      <div className="container mx-auto px-4 py-16">
      <motion.h1
        className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        Choose Your Learning Island, {user.name}! <span className="text-black">🗺️</span>
      </motion.h1>


        <div className="flex justify-center items-center">
          {islands.slice(currentPage, currentPage + itemsPerPage).map((island) => (
            <motion.div
              key={island.id}
              whileHover={{ scale: 1.05 }}
              className={`relative h-[80vh] w-[80%] rounded-2xl overflow-hidden bg-gradient-to-b ${island.color} shadow-2xl`}
            >
              <Spline scene={island.scene} className="absolute inset-0" />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-6 backdrop-blur-sm">
                <h3 className="text-4xl text-white font-bold mb-4">{island.title}</h3>
                <button
                  className="bg-cyan-400 text-black px-6 py-3 rounded-full hover:bg-cyan-300 transition-colors"
                  onClick={() => navigate(`/island/${island.id}`)} // Update this line
                >
                  Enter Island
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={handlePrev}
            className={`px-6 py-2 rounded-full text-black font-semibold bg-gray-200 hover:bg-gray-300 transition ${
              currentPage === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={currentPage === 0}
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className={`px-6 py-2 rounded-full text-black font-semibold bg-gray-200 hover:bg-gray-300 transition ${
              currentPage >= islands.length - 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={currentPage >= islands.length - 1}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default IslandSelection;