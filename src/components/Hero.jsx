// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaDownload, FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="home" className="h-screen flex items-center justify-center text-center px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
          Hi, I'm Abhinav Jajoo
        </h1>
        <p className="mt-3 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          I build real-time data-driven apps and intelligent systems that solve real-world problems with code.
        </p>

        <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-4">
          <a
            href="/src/assets/Abhinav_Jajoo_Resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:scale-105 hover:brightness-110 transition duration-300"
          >
            <FaDownload /> Download Resume
          </a>

          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-60}
            className="inline-flex items-center gap-2 px-6 py-3 border border-cyan-400 text-cyan-400 rounded-full font-medium hover:bg-cyan-500 hover:text-white transition duration-300 cursor-pointer"
          >
            View Projects <FaArrowRight />
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
