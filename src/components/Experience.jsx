import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 text-white">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -40 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }} 
          className="text-4xl font-bold mb-10 text-center"
        >
          <FaBriefcase className="inline mr-2 text-purple-400" /> Experience
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 p-8 rounded-2xl backdrop-blur-md border border-white/10 shadow-lg hover:shadow-purple-600/40 transition-shadow"
        >
          <h3 className="text-2xl font-semibold mb-2 text-purple-300">Business Analyst Intern – FUDR</h3>
          <p className="text-sm text-gray-400 mb-4">May 2024 – July 2024</p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Researched and analyzed client engagement strategies, resulting in a 20% boost in customer reach.</li>
            <li>Built a structured dataset of 600+ brands and 500 clients using Python-based web scraping tools.</li>
            <li>Created an interactive, data-driven dashboard for tracking client metrics and business performance.</li>
            <li>Applied web development and automation skills to build internal tools for improved operational efficiency.</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;