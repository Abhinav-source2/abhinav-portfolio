// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-scroll";
import { FiDownload } from "react-icons/fi";

const Navbar = () => {
  const navItems = ["Home", "About", "Projects", "Skills", "Experience", "Contact"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md shadow-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-white">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide hover:text-cyan-400 transition-colors cursor-pointer">
          Abhinav Jajoo
        </h1>

        {/* Navigation Links */}
        <div className="flex items-center space-x-8">
          <ul className="hidden md:flex space-x-6 text-sm font-medium">
            {navItems.map((item) => (
              <li key={item}>
                <Link
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  offset={-60}
                  className="cursor-pointer hover:text-cyan-400 transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          {/* Resume Download Button */}
          <a
            href="/src/assets/Abhinav_Jajoo_Resume.pdf"
            download
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm rounded-full font-medium hover:scale-[1.05] transition-transform"
          >
            <FiDownload /> Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
