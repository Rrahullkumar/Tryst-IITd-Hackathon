import React from "react";
import { Menu } from "@headlessui/react";
import { motion } from "framer-motion";
import { FiLogIn, FiLogOut, FiUser } from "react-icons/fi";

const NavBar = ({ user, onLogin, onLogout }) => {
  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-30 p-4 flex justify-between items-center backdrop-blur-lg bg-space-900/80"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      {/* Logo */}
      <div className="text-blue-400 font-bold text-2xl">WsCubeTech</div>

      {/* Middle Navigation - Explore Courses and Career Schools */}
      <div className="flex space-x-8">
        {/* Explore Courses Dropdown */}
        <Menu as="div" className="relative">
          <Menu.Button className="text-white text-lg hover:text-blue-400 transition-colors">
            Explore Courses &#9662;
          </Menu.Button>
          <Menu.Items className="absolute bg-gray-800 text-white rounded-lg mt-2 p-2 shadow-lg">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#data-analytics"
                  className={`block px-4 py-2 ${active ? "bg-gray-700" : ""}`}
                >
                  Data Analytics
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#digital-marketing"
                  className={`block px-4 py-2 ${active ? "bg-gray-700" : ""}`}
                >
                  Digital Marketing
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#web-dev"
                  className={`block px-4 py-2 ${active ? "bg-gray-700" : ""}`}
                >
                  Web Development
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#app-dev"
                  className={`block px-4 py-2 ${active ? "bg-gray-700" : ""}`}
                >
                  App Development
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#cybersecurity"
                  className={`block px-4 py-2 ${active ? "bg-gray-700" : ""}`}
                >
                  Cybersecurity
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </Menu>

        {/* Career Schools Dropdown */}
        <Menu as="div" className="relative">
          <Menu.Button className="text-white text-lg hover:text-blue-400 transition-colors">
            Career Schools &#9662;
          </Menu.Button>
          <Menu.Items className="absolute bg-gray-800 text-white rounded-lg mt-2 p-2 shadow-lg">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#delhi"
                  className={`block px-4 py-2 ${active ? "bg-gray-700" : ""}`}
                >
                  Delhi
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#jaipur"
                  className={`block px-4 py-2 ${active ? "bg-gray-700" : ""}`}
                >
                  Jaipur
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </Menu>
      </div>

      {/* Login/Logout Button */}
      {user ? (
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2 text-white">
            <FiUser /> {user.name}
          </span>
          <button
            onClick={onLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-red-600 transition-colors"
          >
            <FiLogOut /> Logout
          </button>
        </div>
      ) : (
        <button
          onClick={onLogin}
          className="bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-2 rounded-full flex items-center gap-2 text-white hover:from-cyan-500 hover:to-blue-600 transition-colors"
        >
          <FiLogIn /> Login
        </button>
      )}
    </motion.nav>
  );
};

export default NavBar;