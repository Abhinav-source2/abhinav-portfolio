import React from "react";

import BreastCancerImage from "/src/assets/breast_cancer_prediction.jpg";
import SentimentAnalysisImage from "/src/assets/real_time_sentiment_analysis.png";
import DeceptionDetectionImage from "/src/assets/deception_detection.png";

const projects = [
  {
    title: "Deception Detection Model",
    description: "Used NLP and ML to detect deceptive statements from speech and text.",
    tech: ["Python", "Scikit-Learn", "NLP"],
    image: DeceptionDetectionImage,
    github: "https://github.com/Abhinav-source2/Deception_detection.git",
  },
  {
    title: "Breast Cancer Detection",
    description: "Built a CNN using EfficientNet to classify malignant vs. benign tumors with Grad-CAM visualization.",
    tech: ["TensorFlow", "Keras", "CNN"],
    image: BreastCancerImage,
    github: "https://github.com/Abhinav-source2/Breast-Cancer-Detection.git",
  },
  {
    title: "Real-time Sentiment Analysis Pipeline",
    description: "End-to-end NLP pipeline that fetches, processes and classifies sentiment from live data streams.",
    tech: ["Flask", "NLP", "HuggingFace"],
    image: SentimentAnalysisImage,
    github: "https://github.com/Abhinav-source2/Real-time-Sentiment-Analysis-Pipeline.git",
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 md:px-8 bg-transparent text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center">
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => window.open(project.github, "_blank")}
              className="rounded-xl p-4 bg-white/10 backdrop-blur-md shadow-md border border-white/10 hover:scale-105 transition-transform cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg mb-3 w-full h-40 object-contain border border-white/10"
              />
              <h3 className="text-lg font-semibold text-center text-purple-300 break-words">
                {project.title}
              </h3>
              <p className="text-sm text-gray-300 mt-2 text-center break-words">
                {project.description}
              </p>
              <div className="flex flex-wrap justify-center gap-2 mt-3">
                {project.tech.map((techItem, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-purple-600/20 text-purple-200 px-3 py-1 text-xs rounded-full border border-purple-500"
                  >
                    {techItem}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
