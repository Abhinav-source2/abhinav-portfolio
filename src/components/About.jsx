// src/components/About.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaBrain, FaGlobeAsia, FaRobot, FaChartLine } from "react-icons/fa";
import { GiAchievement } from "react-icons/gi";
import ProfileImage from "/src/assets/abhinav_avatar.jpg";

const stats = [
  {
    title: "Curiosity",
    level: "92%",
    icon: <FaBrain className="text-cyan-400 text-3xl" />,
    desc: "Always exploring new ideas, tools, and technologies.",
  },
  {
    title: "Geopolitics",
    level: "85%",
    icon: <FaGlobeAsia className="text-cyan-400 text-3xl" />,
    desc: "Keen observer of global affairs and macro trends.",
  },
  {
    title: "AI & Data",
    level: "95%",
    icon: <FaRobot className="text-cyan-400 text-3xl" />,
    desc: "Skilled in ML, NLP, and real-world AI applications.",
  },
  {
    title: "Economy",
    level: "88%",
    icon: <FaChartLine className="text-cyan-400 text-3xl" />,
    desc: "Passionate about market dynamics and strategic insights.",
  },
];

const achievements = [
  "Prompt Engineer 🧠",
  "Data Diver ⛏️",
  "AI Tinkerer 🤖",
  "Global Strategist 🌐",
];

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen px-4 sm:px-6 md:px-8 py-24 bg-transparent"
    >
      <div className="max-w-6xl mx-auto">
        {/* Hero Intro */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16"
        >
          <img
            src={ProfileImage}
            alt="Abhinav Jajoo Avatar"
            className="w-40 h-40 rounded-full border-4 border-cyan-400 shadow-xl"
          />
          <div className="text-center md:text-left max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-4">
              About Me
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              I’m <span className="text-white font-semibold">Abhinav Jajoo</span> — a data-driven developer, business analyst, and AI enthusiast with a sharp eye for strategy. I love building tools that bridge technology with real-world insight.
              <br /><br />
              Whether it's designing a machine learning pipeline, analyzing global trends, or crafting full-stack apps — I approach every project with curiosity, creativity, and commitment.
            </p>
          </div>
        </motion.div>

        {/* Skills & Interests Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="group bg-white/5 p-6 rounded-xl shadow-lg hover:shadow-xl backdrop-blur-md cursor-pointer border border-white/10 transition duration-300 hover:scale-[1.03]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">{stat.icon}</div>
              <h3 className="text-xl font-semibold mb-1 text-white group-hover:text-cyan-300 transition">
                {stat.title}
              </h3>
              <p className="text-sm text-gray-300 mb-2">{stat.level}</p>
              <p className="text-sm text-gray-400">{stat.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <motion.h3
          className="text-2xl font-bold text-center mb-6 text-cyan-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          🏆 Achievements Unlocked
        </motion.h3>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {achievements.map((badge, i) => (
            <motion.span
              key={i}
              className="bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 px-4 py-2 rounded-full text-sm shadow hover:shadow-md backdrop-blur"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <GiAchievement className="inline mr-2 text-cyan-300" />
              {badge}
            </motion.span>
          ))}
        </div>

        {/* Closing Line */}
        <motion.div
          className="text-center text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          More to come... Stay tuned, something is always cooking! 🚀
        </motion.div>
      </div>
    </section>
  );
};

export default About;
