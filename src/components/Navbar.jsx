import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";
import { FaSun, FaMoon } from "react-icons/fa";

const Navbar = ({ toggleTheme, isDarkMode }) => {
  const navItems = ["Home", "About", "Projects", "Skills", "Experience", "Contact"];
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/60 dark:bg-black/30 backdrop-blur-md shadow-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-4 flex justify-between items-center text-black dark:text-white">
        <h1 className="text-xl sm:text-2xl font-bold tracking-wide hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors cursor-pointer">
          Abhinav Jajoo
        </h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-4 sm:space-x-6 text-sm sm:text-base font-medium items-center">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                to={item.toLowerCase()}
                smooth={true}
                spy={true}
                offset={-60}
                duration={500}
                activeClass="text-cyan-500 dark:text-cyan-300 underline underline-offset-4"
                className="cursor-pointer transition-colors hover:text-cyan-500 dark:hover:text-cyan-300 hover:scale-105 active:scale-95 duration-300"
              >
                {item}
              </Link>
            </li>
          ))}

          {/* Dark Mode Toggle */}
          <li>
            <button
              onClick={toggleTheme}
              className="ml-4 text-xl hover:text-yellow-400 dark:hover:text-yellow-200 transition-colors"
              title="Toggle Theme"
            >
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </button>
          </li>

          {/* Resume Button */}
          <li>
            <a
              href="/Abhinav_Jajoo_Resume.pdf"
              download
              className="ml-4 inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm rounded-full font-medium hover:scale-105 active:scale-95 transition-transform duration-300"
            >
              <FiDownload /> Resume
            </a>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-3">
          <button onClick={toggleTheme} title="Toggle Theme">
            {isDarkMode ? (
              <FaSun className="text-yellow-400 text-xl" />
            ) : (
              <FaMoon className="text-gray-200 text-xl" />
            )}
          </button>
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <FiX size={24} className="hover:text-cyan-400 transition duration-300" />
            ) : (
              <FiMenu size={24} className="hover:text-cyan-400 transition duration-300" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/90 dark:bg-black/90 backdrop-blur-md py-4 px-4 sm:px-6 text-black dark:text-white">
          <ul className="space-y-4 text-sm font-medium">
            {navItems.map((item) => (
              <li key={item}>
                <Link
                  to={item.toLowerCase()}
                  smooth={true}
                  spy={true}
                  offset={-60}
                  duration={500}
                  activeClass="text-cyan-500 dark:text-cyan-300 underline underline-offset-4"
                  className="cursor-pointer block hover:text-cyan-500 dark:hover:text-cyan-300 hover:scale-105 active:scale-95 duration-300"
                  onClick={closeMenu}
                >
                  {item}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="/Abhinav_Jajoo_Resume.pdf"
                download
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm rounded-full font-medium hover:scale-105 active:scale-95 transition-transform duration-300"
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
