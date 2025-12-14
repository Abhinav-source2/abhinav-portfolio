import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const navItems = ["Home", "About", "Projects", "Skills", "Experience", "Contact"];
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
      ${
        scrolled
          ? "bg-black/40 backdrop-blur-xl border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-4 flex justify-between items-center text-white">

        {/* Logo */}
        <h1 className="text-xl sm:text-2xl font-bold tracking-wide cursor-pointer hover:text-cyan-400 transition">
          Abhinav Jajoo
        </h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 text-sm sm:text-base font-medium items-center">
          {navItems.map((item) => (
            <li key={item} className="relative group">
              <Link
                to={item.toLowerCase()}
                smooth={true}
                spy={true}
                offset={-60}
                duration={500}
                className="cursor-pointer transition text-gray-300 hover:text-white"
              >
                {item}
              </Link>

              {/* Hover underline */}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </li>
          ))}

          {/* Resume Button */}
          <li>
            <a
              href="/Abhinav_Jajoo_Resume.pdf"
              download
              className="ml-3 inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 
                         text-white text-sm rounded-full font-medium shadow-md hover:shadow-cyan-400/40 
                         hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <FiDownload /> Resume
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-200 hover:text-cyan-400 transition"
        >
          {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black/70 backdrop-blur-xl py-5 px-6 text-white border-t border-white/10">
          <ul className="space-y-5 text-base font-medium">
            {navItems.map((item) => (
              <li key={item}>
                <Link
                  to={item.toLowerCase()}
                  smooth={true}
                  spy={true}
                  offset={-60}
                  duration={500}
                  onClick={closeMenu}
                  className="block cursor-pointer hover:text-cyan-400 transition"
                >
                  {item}
                </Link>
              </li>
            ))}

            <li>
              <a
                href="/Abhinav_Jajoo_Resume.pdf"
                download
                className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 
                           text-white text-sm rounded-full font-medium shadow-md hover:scale-105 
                           active:scale-95 transition"
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
