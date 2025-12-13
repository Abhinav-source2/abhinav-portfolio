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
      className="relative h-screen w-full flex items-center justify-center text-center px-6 overflow-hidden"
    >
      {/* Social Icons */}
      <div className="absolute left-6 top-1/2 transform -translate-y-1/2 hidden md:flex flex-col gap-6 z-20">
        <a href="https://www.instagram.com/abhinav_jajoo_4/" 
           target="_blank" 
           className="text-gray-400 hover:text-pink-500 text-2xl transition">
          <FaInstagram />
        </a>
        <a href="https://x.com/AbhinavJ69563" 
           target="_blank" 
           className="text-gray-400 hover:text-blue-400 text-2xl transition">
          <FaXTwitter />
        </a>
        <a href="https://www.linkedin.com/in/abhinav-jajoo-b81b2b203" 
           target="_blank" 
           className="text-gray-400 hover:text-blue-600 text-2xl transition">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Abhinav-source2" 
           target="_blank" 
           className="text-gray-400 hover:text-white text-2xl transition">
          <FaGithub />
        </a>
      </div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 max-w-3xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
          I turn raw data into real-time intelligence.
        </h1>

        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-4">
          Hi, I'm Abhinav — a data engineer who builds reliable data pipelines, scalable cloud infrastructure,
          and AI-powered analytics systems.
        </p>

        <p className="text-gray-400 text-sm md:text-base mb-6">
          Kafka • Airflow • AWS • ETL • Streaming Pipelines • ML Analytics
        </p>

        <p className="text-gray-400 text-base italic max-w-xl mx-auto">
          I enjoy solving messy data problems and designing clean, elegant systems that actually make an impact.
        </p>

        <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4">
          <a
            href="/Abhinav_Jajoo_Resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-600 text-white font-semibold rounded-full shadow-md hover:bg-cyan-500 transition"
          >
            <FaDownload /> Download Resume
          </a>

          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-60}
            className="inline-flex items-center gap-2 px-6 py-3 border border-cyan-400 text-cyan-400 rounded-full font-medium hover:bg-cyan-500 hover:text-white transition cursor-pointer"
          >
            View Projects <FaArrowRight />
          </Link>

          <a
            href="https://www.linkedin.com/in/abhinav-jajoo-b81b2b203/"
            target="_blank"
            className="inline-flex items-center gap-2 px-6 py-3 border border-purple-400 text-purple-300 rounded-full font-medium hover:bg-purple-600 hover:text-white transition"
          >
            Let’s Connect <FaLinkedin />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
