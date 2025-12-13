import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaDownload,
  FaArrowRight,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-[92vh] w-full flex items-center justify-center text-center px-6 overflow-hidden"
    >
      {/* Social Icons */}
      <motion.div
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 hidden md:flex flex-col gap-4 z-20"
      >
        <a
          href="https://www.instagram.com/abhinav_jajoo_4/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-pink-500 transition text-2xl"
        >
          <FaInstagram />
        </a>
        <a
          href="https://x.com/AbhinavJ69563"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-400 transition text-2xl"
        >
          <FaXTwitter />
        </a>
        <a
          href="https://www.linkedin.com/in/abhinav-jajoo-b81b2b203"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-600 transition text-2xl"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Abhinav-source2"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition text-2xl"
        >
          <FaGithub />
        </a>
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight"
        >
          I turn raw data into real-time intelligence.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-4"
        >
          Hi, I'm Abhinav — a data engineer who builds reliable data pipelines,
          scalable cloud infrastructure, and AI-powered analytics systems.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-gray-400 text-sm md:text-base mb-6"
        >
          Kafka • Airflow • AWS • ETL • Streaming Pipelines • ML Analytics
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-gray-400 text-base italic max-w-xl mx-auto"
        >
          I enjoy solving messy data problems and designing clean, elegant
          systems that actually make an impact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.45 }}
          className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4"
        >
          <a
            href="/Abhinav_Jajoo_Resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-600 text-white font-semibold rounded-full shadow-md hover:scale-105 active:scale-95 transition hover:bg-cyan-500"
          >
            <FaDownload /> Download Resume
          </a>

          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-60}
            className="inline-flex items-center gap-2 px-6 py-3 border border-cyan-400 text-cyan-400 rounded-full font-medium hover:bg-cyan-500 hover:text-white hover:scale-105 active:scale-95 transition cursor-pointer"
          >
            View Projects <FaArrowRight />
          </Link>

          <a
            href="https://www.linkedin.com/in/abhinav-jajoo-b81b2b203/"
            target="_blank"
            className="inline-flex items-center gap-2 px-6 py-3 border border-purple-400 text-purple-300 rounded-full font-medium hover:bg-purple-600 hover:text-white hover:scale-105 active:scale-95 transition group"
          >
            Let’s Connect
            <FaLinkedin className="group-hover:translate-x-1 transition" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
