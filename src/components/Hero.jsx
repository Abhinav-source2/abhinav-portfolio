import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaDownload,
  FaArrowRight,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center justify-center text-center px-6 overflow-hidden"
    >
      {/* Social Icons */}
      <div className="absolute left-6 top-1/2 transform -translate-y-1/2 hidden md:flex flex-col gap-6 z-20">
        <a
          href="https://www.instagram.com/abhinav_jajoo_4/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-pink-500 transition duration-300 text-2xl"
        >
          <FaInstagram />
        </a>
        <a
          href="https://x.com/AbhinavJ69563?t=mAsD-AewMs6cnDKUFxdGCw&s=09"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-400 transition duration-300 text-2xl"
        >
          <FaXTwitter />
        </a>
        <a
          href="https://www.linkedin.com/in/abhinav-jajoo-b81b2b203"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-600 transition duration-300 text-2xl"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Abhinav-source2"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition duration-300 text-2xl"
        >
          <FaGithub />
        </a>
      </div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-10"
      >
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-4">
          Data Engineer. AI Builder. Problem Solver.
        </h1>

        <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-2">
          Hi, I'm Abhinav Jajoo — I build intelligent, real-time data systems
        </p>

        <TypeAnimation
          sequence={[
            "Data Engineer ⚙️",
            2000,
            "ML Pipeline Expert 🚀",
            2000,
            "Analytics Developer 📊",
            2000,
            "Prompt Engineer 🧠",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-base sm:text-lg md:text-2xl text-gray-400 block mb-4"
        />

        <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
          I design end-to-end data pipelines, scalable infra, and AI-powered
          tools that convert raw signals into smart business outcomes.
        </p>

        <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-4 flex-wrap">
          <a
            href="/Abhinav_Jajoo_Resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:scale-105 active:scale-95 transition duration-300"
          >
            <FaDownload /> Download Resume
          </a>

          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-60}
            className="inline-flex items-center gap-2 px-6 py-3 border border-cyan-400 text-cyan-400 rounded-full font-medium hover:bg-cyan-500 hover:text-white hover:scale-105 active:scale-95 transition duration-300 cursor-pointer"
          >
            View Projects <FaArrowRight />
          </Link>

          <a
            href="https://www.linkedin.com/in/abhinav-jajoo-b81b2b203/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-purple-400 text-purple-300 rounded-full font-medium hover:bg-purple-600 hover:text-white hover:scale-105 active:scale-95 transition duration-300"
          >
            Let’s Connect <FaLinkedin />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
