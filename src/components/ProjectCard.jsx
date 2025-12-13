// src/components/ProjectCard.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const ProjectCard = ({ title, description, image, tags, onClick }) => {
  return (
    <motion.div
      className="bg-white/5 border border-white/10 rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-500/10 transition hover:scale-[1.02] cursor-pointer backdrop-blur-md"
      onClick={onClick}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <img src={image} alt={title} className="w-full h-48 object-cover opacity-90" />

      <div className="p-5">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-3">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-200 transition text-sm font-medium">
          View Case Study <FaArrowRight />
        </button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
