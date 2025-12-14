// src/components/Projects.jsx
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { motion } from "framer-motion";

// Import Images
import SroadImage from "/src/assets/SROAD.png";
import BreastCancerImage from "/src/assets/breast_cancer_prediction.jpg";
import SentimentImage from "/src/assets/real_time_sentiment_analysis.png";

// Architecture Diagrams
import SroadArch from "/src/assets/SROAD_Arch.png";
import SentimentArch from "/src/assets/Sentiment_Arch.png";

const projects = [
  // ⭐ FEATURED PROJECT FIRST
  {
    title: "SROAD – Smart Revenue Optimization & Anomaly Detection",
    description:
      "A real-time revenue intelligence platform with Kafka ingestion, AWS ETL, ML forecasting, and anomaly detection dashboards.",
    descriptionLong:
      "Designed a production-grade revenue analytics platform integrating Kafka stream ingestion, AWS Glue ETL pipelines, Athena querying, and ML forecasting models to identify revenue anomalies in real-time.",
    steps: [
      "Kafka ingests Shopify + synthetic commerce traffic",
      "AWS Glue ETL pipelines clean & structure raw data",
      "Athena enables sub-second analytical queries",
      "Forecasting models detect unusual revenue shifts",
      "Dashboard visualizes KPIs & anomaly alerts",
    ],
    tech: ["Kafka", "AWS Glue", "Athena", "S3", "Python", "Forecasting"],
    image: SroadImage,
    archDiagram: SroadArch,
    github: "https://github.com/Abhinav-source2",
  },

  {
    title: "Real-Time Sentiment Analysis Pipeline",
    description:
      "End-to-end NLP pipeline using Flask + Transformers for real-time sentiment scoring and analytics.",
    descriptionLong:
      "Built a streaming NLP pipeline leveraging Flask, HuggingFace Transformers, and automated preprocessing to classify live user text sentiment in real time. Outputs feed into a structured analytics layer.",
    steps: [
      "User text ingested from UI/API",
      "Preprocessing pipeline cleanses text",
      "Transformers model predicts sentiment",
      "Results streamed to analytics dashboard",
    ],
    tech: ["Flask", "HuggingFace", "Transformers", "NLP"],
    image: SentimentImage,
    archDiagram: SentimentArch,
    github:
      "https://github.com/Abhinav-source2/Real-time-Sentiment-Analysis-Pipeline",
  },

  {
    title: "Breast Cancer Classification (Grad-CAM)",
    description:
      "EfficientNet classifier with Grad-CAM heatmaps for medical explainability.",
    descriptionLong:
      "Built a deep learning pipeline using EfficientNetB0 for binary tumor classification with medical-grade Grad-CAM visual explanations.",
    steps: [
      "Dataset preprocessing & augmentation",
      "EfficientNetB0 training",
      "Activation visualization via Grad-CAM",
      "Model evaluation (92% accuracy)",
    ],
    tech: ["TensorFlow", "Keras", "EfficientNet", "Grad-CAM"],
    image: BreastCancerImage,
    archDiagram: null,
    github:
      "https://github.com/Abhinav-source2/Breast-Cancer-Prediction",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-cyan-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Projects
        </motion.h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <ProjectCard
              key={idx}
              project={p}
              onClick={() => setSelectedProject(p)}
            />
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;
