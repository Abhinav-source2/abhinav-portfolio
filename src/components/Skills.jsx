import React from 'react';
import Marquee from 'react-fast-marquee';
import { motion } from 'framer-motion';
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

const chunkArray = (arr, chunkSize) =>
  Array.from({ length: Math.ceil(arr.length / chunkSize) }, (_, i) =>
    arr.slice(i * chunkSize, i * chunkSize + chunkSize)
  );

const Skills = () => {
  const skillRows = chunkArray(SKILLS, 9);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 md:px-8 text-white">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center text-cyan-300 mb-10"
      >
        Tools & Technologies
      </motion.h2>

      <div className="space-y-6">
        {skillRows.map((row, index) => (
          <Marquee
            key={index}
            gradient={false}
            speed={40}
            pauseOnHover={true}
            direction={index % 2 === 1 ? 'right' : 'left'}
          >
            {row.map((skill) => (
              <motion.div
                key={skill.name}
                whileHover={{ scale: 1.08, boxShadow: '0 0 15px #22d3ee55' }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center bg-white/5 border border-cyan-400/10 px-4 py-2 m-2 rounded-full shadow-md backdrop-blur-md transition duration-300"
              >
                <motion.img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-6 h-6 mr-2 object-contain"
                  whileHover={{ rotate: 8, scale: 1.15 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                />
                <span className="font-medium text-gray-100">{skill.name}</span>
              </motion.div>
            ))}
          </Marquee>
        ))}
      </div>
    </section>
  );
};

export default Skills;
