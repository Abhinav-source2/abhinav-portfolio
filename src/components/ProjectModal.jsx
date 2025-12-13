// src/components/ProjectModal.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center p-6 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="bg-white/10 border border-white/20 rounded-2xl max-w-3xl p-8 relative shadow-2xl"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <button
          className="absolute top-4 right-4 text-gray-300 hover:text-white"
          onClick={onClose}
        >
          <FaTimes className="text-xl" />
        </button>

        <h2 className="text-2xl font-bold text-white mb-4">
          {project.title}
        </h2>

        <p className="text-gray-300 mb-4">{project.descriptionLong}</p>

        {/* Architecture Diagram */}
        <img
          src={project.archDiagram}
          alt="Architecture"
          className="w-full rounded-lg shadow mb-6"
        />

        <h3 className="text-lg font-semibold text-cyan-400 mb-2">Key Steps</h3>
        <ul className="list-disc ml-6 text-gray-300 mb-6">
          {project.steps.map((step, idx) => (
            <li key={idx} className="mb-2">{step}</li>
          ))}
        </ul>

        <a
          href={project.github}
          target="_blank"
          className="text-cyan-300 underline hover:text-cyan-200"
        >
          View GitHub Repo →
        </a>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;
