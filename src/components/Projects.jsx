import React from "react";

// Images: Replace with your actual image paths
import BreastCancerImage from "/src/assets/breast_cancer_prediction.jpg";
import SentimentAnalysisImage from "/src/assets/real_time_sentiment_analysis.png";
import DeceptionDetectionImage from "/src/assets/deception_detection.png";

const projects = [
  {
    title: "Deception Detection Model",
    image: DeceptionDetectionImage,
    github: "https://github.com/Abhinav-source2/Deception_detection.git"
  },
  {
    title: "Breast Cancer Detection",
    image: BreastCancerImage,
    github: "https://github.com/Abhinav-source2/Breast-Cancer-Detection.git"
  },
  {
    title: "Real-time Sentiment Analysis Pipeline",
    image: SentimentAnalysisImage,
    github: "https://github.com/Abhinav-source2/Real-time-Sentiment-Analysis-Pipeline.git"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-transparent text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => window.open(project.github, "_blank")}
              className="rounded-2xl p-4 shadow-lg cursor-pointer transition-transform transform hover:scale-105 border border-gray-300 bg-white/10 backdrop-blur-sm"
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-xl mb-4 w-full h-auto object-contain"
              />
              <h3 className="text-xl font-semibold text-center">{project.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;