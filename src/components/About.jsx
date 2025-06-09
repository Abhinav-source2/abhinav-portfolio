import React from "react";
import { motion } from "framer-motion";
import { FaBrain, FaGlobeAsia, FaRobot, FaChartLine } from "react-icons/fa";
import { GiAchievement } from "react-icons/gi";
import ProfileImage from "/src/assets/abhinav_avatar.jpg";

const stats = [
  { title: "Curiosity", level: "92%", icon: <FaBrain className="text-accent text-3xl" />, desc: "Always exploring new ideas, tools, and tech." },
  { title: "Geopolitics", level: "85%", icon: <FaGlobeAsia className="text-accent text-3xl" />, desc: "Deeply interested in global affairs and current events." },
  { title: "AI & Data", level: "95%", icon: <FaRobot className="text-accent text-3xl" />, desc: "Hands-on with ML, NLP, and AI-driven projects." },
  { title: "Economy", level: "88%", icon: <FaChartLine className="text-accent text-3xl" />, desc: "Fascinated by markets, policy, and macro trends." },
];

const achievements = [
  "Prompt Engineer 🧠",
  "Data Diver ⛏",
  "AI Tinkerer 🤖",
  "Global Strategist 🌐",
];

const About = () => {
  return (
    <section id="about" className="min-h-screen px-4 sm:px-6 md:px-8 py-24 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16"
        >
          <img
            src={ProfileImage}
            alt="Abhinav Jajoo Avatar"
            className="w-40 h-40 rounded-full border-4 border-accent shadow-lg"
          />

          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-accent mb-3">About Me</h2>
            <p className="text-gray-300 text-sm md:text-base max-w-xl">
              I’m Abhinav Jajoo — a curious coder, business analyst, and AI tinkerer passionate about building data-driven solutions that solve real-world problems. I thrive at the intersection of technology, strategy, and storytelling.
              <br /><br />
              Outside code, I binge on geopolitics, debate market trends, and occasionally get obsessed with building something weird in Python.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="bg-white/5 p-6 rounded-xl shadow-lg hover:shadow-xl backdrop-blur-md cursor-pointer border border-white/10"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="mb-4">{stat.icon}</div>
              <h3 className="text-xl font-semibold mb-1 text-white">{stat.title}</h3>
              <p className="text-sm text-gray-300 mb-2">{stat.level}</p>
              <p className="text-sm text-gray-400">{stat.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.h3
          className="text-2xl font-bold text-center mb-4 text-accent"
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
              className="bg-yellow-500/10 border border-yellow-400/30 text-yellow-300 px-4 py-2 rounded-full text-sm shadow hover:shadow-md"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <GiAchievement className="inline mr-2 text-yellow-400" />
              {badge}
            </motion.span>
          ))}
        </div>

        <motion.div
          className="text-center text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          More to come... Stay tuned, something is cooking! 🚀
        </motion.div>
      </div>
    </section>
  );
};

export default About;
