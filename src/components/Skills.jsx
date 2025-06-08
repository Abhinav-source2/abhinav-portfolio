import React from 'react';
import Marquee from 'react-fast-marquee';
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
    <section id="skills" className="py-16 bg-transparent">
      <h2 className="text-3xl font-bold text-center text-white mb-8">
        Tools & Technologies
      </h2>

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
              <div
                key={skill.name}
                className="flex items-center bg-gray-800/30 hover:bg-gray-700/50
                  text-white px-4 py-2 m-2 rounded-full transition
                  transform hover:scale-105"
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-6 h-6 mr-2 object-contain"
                />
                <span className="font-medium">{skill.name}</span>
              </div>
            ))}
          </Marquee>
        ))}
      </div>
    </section>
  );
};

export default Skills;
