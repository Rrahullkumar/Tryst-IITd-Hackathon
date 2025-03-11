// Footer.jsx
import React from "react";
import { FaGithub, FaDiscord, FaTwitter, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-purple-900 to-purple-950 text-gray-300 border-t border-cyan-400/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-cyan-400">WsCubeTech</h3>
            <p className="text-sm opacity-75">
              Transforming learning through immersive adventures
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-cyan-300">Explore</h4>
            <ul className="space-y-2">
              {['Courses', 'Leaderboard', 'Quests', 'Badges'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-cyan-300">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:hello@islandquest.com" className="flex items-center gap-2 hover:text-cyan-400">
                  <SiGmail /> support@WsCubeTech.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="hover:text-cyan-400">
                  +91 9876543210
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-cyan-300">Connect</h4>
            <div className="flex space-x-4 text-xl">
              {[
                { icon: <FaGithub />, label: 'GitHub' },
                { icon: <FaDiscord />, label: 'Discord' },
                { icon: <FaTwitter />, label: 'Twitter' },
                { icon: <FaLinkedin />, label: 'LinkedIn' }
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="p-2 rounded-full bg-purple-800/30 hover:bg-cyan-400/20 hover:text-cyan-400 transition-all"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-cyan-400/10 pt-8 text-center text-sm opacity-75">
          <p>
            © {new Date().getFullYear()} WsCubeTech. All rights reserved. 
            <a href="#" className="ml-2 hover:text-cyan-400">Privacy Policy</a> | 
            <a href="#" className="ml-2 hover:text-cyan-400">Terms of Service</a>
          </p>
          <p className="mt-2"> Made by Algoholics</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;