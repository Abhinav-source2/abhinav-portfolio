import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative w-full py-10 mt-20 bg-transparent backdrop-blur-xl text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Name */}
        <h2 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Abhinav Jajoo
        </h2>

        {/* Tagline */}
        <p className="text-gray-400 text-sm mb-6">
          Building intelligent systems — transforming raw data into impact.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-xl mb-6">
          <a
            href="https://github.com/Abhinav-source2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white hover:scale-110 transition-all"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/abhinav-jajoo-b81b2b203"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-cyan-400 hover:scale-110 transition-all"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.instagram.com/abhinav_jajoo_4/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-pink-400 hover:scale-110 transition-all"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Divider Line */}
        <div className="w-full h-[1px] bg-white/10 mb-6"></div>

        {/* Copyright */}
        <p className="text-gray-500 text-xs">
          © {new Date().getFullYear()} Abhinav Jajoo — All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
