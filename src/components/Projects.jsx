import React from "react";

const projects = [
  {
    title: "Deception Detection Model",
    description:
      "A multimodal deception detection system using MediaPipe, MFCC, BERT, and SVM. Achieved 83% accuracy in text, 64% in facial and vocal analysis.",
    image: "/src/assets/placeholder.png",
  },
  {
    title: "Breast Cancer Detection (EfficientNet + Grad-CAM)",
    description:
      "A deep learning model using EfficientNetB0 to classify mammograms into benign or malignant. Achieved 100% accuracy with Grad-CAM visualizations.",
    image: "/src/assets/placeholder.png",
  },
  {
    title: "Real-time Sentiment Analysis Pipeline",
    description:
      "Built using Apache Airflow, NLP, and YouTube/Reddit APIs. Classified and stored sentiments in MongoDB/PostgreSQL and visualized using Power BI.",
    image: "/src/assets/placeholder.png",
  },
  {
    title: "Smart Home Automation",
    description:
      "An intelligent IoT-based smart home system using sensors, mobile app, and automation.",
    image: "/src/assets/placeholder.png",
  },
  {
    title: "3D Portfolio Website",
    description:
      "A futuristic 3D portfolio built with React, Tailwind, and Three.js featuring a rotating object and animated contact form.",
    image: "/src/assets/placeholder.png",
  },
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
              className="bg-black/50 rounded-2xl p-6 shadow-lg backdrop-blur-md transition hover:scale-[1.02]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-xl mb-4 w-full h-52 object-cover"
              />
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-400 mt-2">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
