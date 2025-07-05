import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import BreastCancerImage from "/src/assets/breast_cancer_prediction.jpg";
import SentimentAnalysisImage from "/src/assets/real_time_sentiment_analysis.png";
import DeceptionDetectionImage from "/src/assets/deception_detection.png";

const projects = [
  {
    title: "Deception Detection Model",
    description:
      "Built a real-time NLP system to classify deceptive speech using tone, text, and linguistic cues. Achieved 85%+ accuracy by training on custom datasets with Scikit-Learn pipelines.",
    tech: ["Python", "NLP", "Scikit-Learn", "Pandas"],
    image: DeceptionDetectionImage,
    github: "https://github.com/Abhinav-source2/Deception_detection.git",
    demo: "",
  },
  {
    title: "Breast Cancer Classification with Grad-CAM",
    description:
      "Designed a CNN using EfficientNet for binary tumor classification. Improved model transparency by integrating Grad-CAM heatmaps, achieving 92% validation accuracy.",
    tech: ["TensorFlow", "Keras", "EfficientNet", "Grad-CAM"],
    image: BreastCancerImage,
    github: "https://github.com/Abhinav-source2/Breast-Cancer-Prediction.git",
    demo: "",
  },
  {
    title: "Real-Time Sentiment Analysis Pipeline",
    description:
      "Developed an end-to-end pipeline with Flask and HuggingFace to classify live sentiment text. Supports real-time input, preprocessing, model inference, and web-based visualization.",
    tech: ["Flask", "HuggingFace", "Transformers", "NLP"],
    image: SentimentAnalysisImage,
    github:
      "https://github.com/Abhinav-source2/Real-time-Sentiment-Analysis-Pipeline.git",
    demo: "",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 md:px-8 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-14 bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-500 text-transparent bg-clip-text">
          Projects 
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <Tilt
              key={index}
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
              scale={1.02}
              transitionSpeed={1000}
              className="rounded-2xl"
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden border border-white/10 bg-white/5 rounded-2xl shadow-md hover:shadow-purple-500/30 transition h-[420px] flex flex-col"
              >
                {/* Project Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center rounded-2xl transition-transform duration-500 group-hover:scale-105"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/80 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-6 z-10">
                  <h3 className="text-2xl font-bold text-purple-300 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-300 mb-3 leading-relaxed overflow-y-auto max-h-[160px]">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {project.tech.map((techItem, i) => (
                      <span
                        key={i}
                        className="bg-purple-600/20 text-purple-200 px-3 py-1 text-xs rounded-full border border-purple-500"
                      >
                        {techItem}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 justify-center">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full text-sm transition-transform hover:scale-105"
                    >
                      <FaGithub className="text-lg" />
                      View Code
                    </a>

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-full text-sm transition-transform hover:scale-105"
                      >
                        <FaExternalLinkAlt className="text-sm" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
