import React from "react";
import { FaGithub } from "react-icons/fa";

import BreastCancerImage from "/src/assets/breast_cancer_prediction.jpg";
import SentimentAnalysisImage from "/src/assets/real_time_sentiment_analysis.png";
import DeceptionDetectionImage from "/src/assets/deception_detection.png";

const projects = [
  {
    title: "Deception Detection Model",
    description: "Leveraged NLP and ML to distinguish between truthful and deceptive statements in real-time using speech and text data.",
    tech: ["Python", "Scikit-Learn", "NLP"],
    image: DeceptionDetectionImage,
    github: "https://github.com/Abhinav-source2/Deception_detection.git",
  },
  {
    title: "Breast Cancer Detection",
    description: "Built a CNN using EfficientNet to classify tumors as benign or malignant with Grad-CAM visualization for interpretability.",
    tech: ["TensorFlow", "Keras", "CNN"],
    image: BreastCancerImage,
    github: "https://github.com/Abhinav-source2/Breast-Cancer-Prediction.git",
  },
  {
    title: "Real-time Sentiment Analysis Pipeline",
    description: "Developed an end-to-end pipeline that processes live text data, performs NLP preprocessing, and classifies sentiment in real time.",
    tech: ["Flask", "HuggingFace", "NLP"],
    image: SentimentAnalysisImage,
    github: "https://github.com/Abhinav-source2/Real-time-Sentiment-Analysis-Pipeline.git",
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 md:px-8 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-14 bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-500 text-transparent bg-clip-text">
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => window.open(project.github, "_blank")}
              className="relative group rounded-2xl overflow-hidden cursor-pointer border border-white/10 bg-white/5 backdrop-blur-lg p-2 transition duration-300 hover:scale-[1.015] shadow-xl hover:shadow-purple-500/20"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay Content */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 backdrop-blur-md transition-opacity duration-300 flex flex-col justify-center items-center text-center p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-purple-300 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-300 mb-3 leading-relaxed">
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
                <FaGithub className="text-2xl text-white hover:text-purple-400 transition-transform transform hover:scale-110 animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
