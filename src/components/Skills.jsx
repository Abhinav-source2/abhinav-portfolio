import React from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

// ----------------------------
// IMPORT ONLY RELEVANT SKILLS
// ----------------------------
import airflow from "../assets/airflow.svg";
import aws from "../assets/aws-svgrepo-com.svg";
import docker from "../assets/docker.svg";
import git from "../assets/git.svg";
import hadoop from "../assets/hadoop.svg";
import js from "../assets/JavaScript.svg";
import keras from "../assets/keras.svg";
import matplotlib from "../assets/matplotlib.png";
import mongodb from "../assets/mongodb.svg";
import nodejs from "../assets/Nodejs.svg";
import numpy from "../assets/Numpy.svg";
import pandas from "../assets/Pandas.svg";
import postgresql from "../assets/PostgreSQL.svg";
import powerbi from "../assets/powerbi-svgrepo-com.svg";
import pyspark from "../assets/PySpark.svg";
import python from "../assets/python.svg";
import react from "../assets/React.svg";
import tailwind from "../assets/TailwindCSS.svg";
import tensorflow from "../assets/tenserflow.svg";
import threejs from "../assets/threejs.svg";
import vite from "../assets/vite.svg";

// ----------------------------
// CLEAN, PROFESSIONAL CATEGORIES
// ----------------------------
const CATEGORIES = [
  {
    title: "Data Engineering",
    skills: [
      { name: "Airflow", icon: airflow },
      { name: "PySpark", icon: pyspark },
      { name: "AWS", icon: aws },
      { name: "Hadoop", icon: hadoop },
      { name: "PostgreSQL", icon: postgresql },
    ],
  },
  {
    title: "Machine Learning",
    skills: [
      { name: "TensorFlow", icon: tensorflow },
      { name: "Keras", icon: keras },
      { name: "NumPy", icon: numpy },
      { name: "Pandas", icon: pandas },
      { name: "Matplotlib", icon: matplotlib },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS", icon: aws },
      { name: "Docker", icon: docker },
      { name: "Git", icon: git },
      { name: "Node.js", icon: nodejs },
      { name: "MongoDB", icon: mongodb },
    ],
  },
  {
    title: "Frontend & Tools",
    skills: [
      { name: "React", icon: react },
      { name: "Tailwind CSS", icon: tailwind },
      { name: "JavaScript", icon: js },
      { name: "Three.js", icon: threejs },
      { name: "Vite", icon: vite },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 px-4 sm:px-6 md:px-8 bg-transparent text-white relative"
    >
      {/* HEADER */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
      >
        ⚡ Skills & Technologies
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center text-gray-300 max-w-2xl mx-auto mb-14 text-sm sm:text-base"
      >
        Technologies I work with daily to build scalable, reliable, and
        intelligent data systems.
      </motion.p>

      {/* CATEGORY BLOCKS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
        {CATEGORIES.map((cat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 p-6 rounded-2xl shadow-lg backdrop-blur-md hover:shadow-cyan-400/20 transition-all hover:scale-[1.03]"
          >
            <h3 className="text-xl font-semibold text-white mb-4">
              {cat.title}
            </h3>

            <div className="flex flex-wrap gap-3">
              {cat.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-full border border-white/10 hover:bg-white/20 transition"
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-6 h-6 object-contain"
                  />
                  <span className="text-sm text-gray-200">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* PREMIUM MARQUEE — FOR AESTHETIC FINISHING */}
      <div className="space-y-8">
        {CATEGORIES.map((cat, index) => (
          <Marquee
            key={index}
            gradient={false}
            speed={40}
            pauseOnHover
            direction={index % 2 === 1 ? "right" : "left"}
          >
            {cat.skills.map((skill) => (
              <motion.div
                key={skill.name}
                whileHover={{ scale: 1.15 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex items-center gap-3 bg-white/10 border border-white/10 px-5 py-3 m-3 rounded-full shadow-md backdrop-blur-md hover:shadow-cyan-400/30 transition-all duration-300"
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-8 h-8 object-contain"
                />
                <span className="font-medium text-white text-sm">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </Marquee>
        ))}
      </div>
    </section>
  );
};

export default Skills;
