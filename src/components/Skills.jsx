import React from 'react';
import Marquee from 'react-fast-marquee';
import { motion } from 'framer-motion';

// Imports
import airflow from '../assets/airflow.svg';
import aws from '../assets/aws-svgrepo-com.svg';
import C from '../assets/C.svg';
import CSS3 from '../assets/CSS3.svg';
import docker from '../assets/docker.svg';
import excel from '../assets/excel-document-svgrepo-com.svg';
import git from '../assets/git.svg';
import hadoop from '../assets/hadoop.svg';
import html5 from '../assets/html5.svg';
import js from '../assets/JavaScript.svg';
import java from '../assets/java-svgrepo-com.svg';
import keras from '../assets/keras.svg';
import ml from '../assets/machine-learning.svg';
import matplotlib from '../assets/matplotlib.png';
import mongodb from '../assets/mongodb.svg';
import nodejs from '../assets/Nodejs.svg';
import numpy from '../assets/Numpy.svg';
import pandas from '../assets/Pandas.svg';
import postgresql from '../assets/PostgreSQL.svg';
import powerbi from '../assets/powerbi-svgrepo-com.svg';
import pyspark from '../assets/PySpark.svg';
import python from '../assets/python.svg';
import react from '../assets/React.svg';
import tailwind from '../assets/TailwindCSS.svg';
import tensorflow from '../assets/tenserflow.svg';
import threejs from '../assets/threejs.svg';
import vite from '../assets/vite.svg';

// Data
const SKILLS = [
  { name: 'Airflow', icon: airflow },
  { name: 'AWS', icon: aws },
  { name: 'C', icon: C },
  { name: 'CSS3', icon: CSS3 },
  { name: 'Docker', icon: docker },
  { name: 'Excel', icon: excel },
  { name: 'Git', icon: git },
  { name: 'Hadoop', icon: hadoop },
  { name: 'HTML5', icon: html5 },
  { name: 'JavaScript', icon: js },
  { name: 'Java', icon: java },
  { name: 'Keras', icon: keras },
  { name: 'ML', icon: ml },
  { name: 'Matplotlib', icon: matplotlib },
  { name: 'MongoDB', icon: mongodb },
  { name: 'Node.js', icon: nodejs },
  { name: 'NumPy', icon: numpy },
  { name: 'Pandas', icon: pandas },
  { name: 'PostgreSQL', icon: postgresql },
  { name: 'Power BI', icon: powerbi },
  { name: 'PySpark', icon: pyspark },
  { name: 'Python', icon: python },
  { name: 'React', icon: react },
  { name: 'Tailwind CSS', icon: tailwind },
  { name: 'TensorFlow', icon: tensorflow },
  { name: 'Three.js', icon: threejs },
  { name: 'Vite', icon: vite },
];

// Utility: Break into 3 rows
const chunkArray = (arr, chunkSize) =>
  Array.from({ length: Math.ceil(arr.length / chunkSize) }, (_, i) =>
    arr.slice(i * chunkSize, i * chunkSize + chunkSize)
  );

const Skills = () => {
  const skillRows = chunkArray(SKILLS, 9);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 md:px-8 bg-transparent text-white relative z-10">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-bold text-center mb-14 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
      >
        🛠️ Tools & Technologies
      </motion.h2>

      <div className="space-y-8">
        {skillRows.map((row, index) => (
          <Marquee
            key={index}
            gradient={false}
            speed={40}
            pauseOnHover
            direction={index % 2 === 1 ? 'right' : 'left'}
          >
            {row.map((skill) => (
              <motion.div
                key={skill.name}
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="flex items-center gap-3 bg-white/10 border border-white/10 px-5 py-3 m-3 rounded-full shadow-md backdrop-blur-md hover:shadow-cyan-400/20 transition-all duration-300"
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
                />
                <span className="font-medium text-white text-sm sm:text-base">
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
