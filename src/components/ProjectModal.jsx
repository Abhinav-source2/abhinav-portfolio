// src/components/ProjectModal.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaTimes, FaGithub } from "react-icons/fa";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black/70 backdrop-blur-xl flex items-center justify-center p-6 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="bg-white/10 border border-white/20 rounded-2xl p-8 max-w-3xl w-full relative shadow-2xl overflow-y-auto max-h-[85vh]"
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-300 hover:text-white"
        >
          <FaTimes size={22} />
        </button>

        <h2 className="text-3xl font-bold text-white mb-4">
          {project.title}
        </h2>

        <p className="text-gray-300 mb-6">{project.descriptionLong}</p>

        {/* Architecture Diagram */}
        {project.archDiagram && (
          <img
            src={project.archDiagram}
            alt="Architecture Diagram"
            className="rounded-xl shadow-lg mb-6"
          />
        )}

        {/* Steps */}
        <h3 className="text-xl font-semibold text-cyan-400 mb-3">Pipeline Breakdown</h3>
        <ul className="list-disc ml-6 text-gray-300 space-y-2 mb-6">
          {project.steps.map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ul>

        {/* Github Link */}
        <a
          href={project.github}
          target="_blank"
          className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white px-5 py-2 rounded-full transition"
        >
          <FaGithub />
          View Code
        </a>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;
