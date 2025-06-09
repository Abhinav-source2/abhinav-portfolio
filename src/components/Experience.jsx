// src/components/Experience.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";
import { MdWork } from "react-icons/md";

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 text-white">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          <FaBriefcase className="inline mr-2 text-purple-400" /> Experience
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-black/40 p-6 md:p-8 rounded-2xl border border-white/10 backdrop-blur-md shadow-xl hover:shadow-purple-700/30 transition"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-purple-500 text-white p-3 rounded-full">
              <MdWork className="text-xl" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-purple-300">
                Business Analyst Intern – FUDR
              </h3>
              <p className="text-sm text-gray-400">May 2024 – July 2024</p>
            </div>
          </div>

          <ul className="list-disc list-inside text-gray-300 space-y-3 text-sm md:text-base">
            <li><strong>Increased customer reach by 20%</strong> through data-backed engagement strategies and user research.</li>
            <li>Scraped and structured a dataset of <strong>600+ brands and 500 clients</strong> for internal analysis.</li>
            <li>Developed a custom CRM app to centralize client interactions, boosting response speed and retention.</li>
            <li>Designed a live <strong>data-driven dashboard</strong> using automation pipelines to visualize KPIs and insights.</li>
            <li>Collaborated cross-functionally with devs and ops to ship features rapidly in Agile sprints.</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
