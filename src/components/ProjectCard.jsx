// src/components/ProjectCard.jsx
import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ project, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      onClick={onClick}
      className="cursor-pointer group bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-cyan-500/20 transition"
    >
      {/* Image */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>

        <p className="text-gray-400 text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
