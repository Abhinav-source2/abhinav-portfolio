// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const navItems = ["Home", "About", "Projects", "Skills", "Experience", "Contact"];
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md shadow-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-white">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide hover:text-cyan-400 transition-colors cursor-pointer">
          Abhinav Jajoo
        </h1>

        {/* Desktop Navigation Links */}
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

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <FiX size={24} className="hover:text-cyan-400" />
            ) : (
              <FiMenu size={24} className="hover:text-cyan-400" />
            )}
          </button>
        </div>

        {/* Resume Download Button (hidden on mobile) */}
        <a
          href="/src/assets/Abhinav_Jajoo_Resume.pdf"
          download
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm rounded-full font-medium hover:scale-[1.05] transition-transform"
        >
          <FiDownload /> Resume
        </a>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md py-4 px-6">
          <ul className="space-y-4 text-sm font-medium">
            {navItems.map((item) => (
              <li key={item}>
                <Link
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  offset={-60}
                  className="cursor-pointer hover:text-cyan-400 transition-colors block"
                  onClick={closeMenu}
                >
                  {item}
                </Link>
              </li>
            ))}
            {/* Resume Download (visible on mobile) */}
            <li>
              <a
                href="/src/assets/Abhinav_Jajoo_Resume.pdf"
                download
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm rounded-full font-medium hover:scale-[1.05] transition-transform"
              >
                <FiDownload /> Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
