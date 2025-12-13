// src/components/About.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaServer, FaCloud, FaChartLine, FaCogs } from "react-icons/fa";
import { MdPsychology } from "react-icons/md";
import ProfileImage from "/src/assets/abhinav_avatar.jpg";

const expertise = [
  {
    title: "Data Engineering",
    desc: "Building real-time and batch pipelines, orchestrating workflows, and designing reliable data architectures.",
    icon: <FaServer className="text-cyan-400 text-3xl" />,
  },
  {
    title: "Cloud & Automation",
    desc: "Deploying serverless and containerized systems on AWS with automated analytics and cost-efficient scaling.",
    icon: <FaCloud className="text-cyan-400 text-3xl" />,
  },
  {
    title: "ML-Driven Analytics",
    desc: "Integrating forecasting, NLP, and anomaly-detection models into production-grade ETL/ELT systems.",
    icon: <FaChartLine className="text-cyan-400 text-3xl" />,
  },
  {
    title: "Systems Thinking",
    desc: "Approaching problems with clarity—prioritizing scalability, reliability, monitoring, and long-term maintainability.",
    icon: <MdPsychology className="text-cyan-400 text-3xl" />,
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen px-4 sm:px-6 md:px-8 py-28 bg-transparent"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 mb-20"
        >
          <img
            src={ProfileImage}
            alt="Abhinav Jajoo"
            className="w-40 h-40 rounded-full border-2 border-cyan-400 shadow-xl object-cover"
          />

          <div className="text-center md:text-left max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-4">
              About Me
            </h2>

            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Hi, I'm <span className="text-white font-semibold">Abhinav</span> —
              a data engineer who enjoys building reliable pipelines, scalable cloud 
              architectures, and ML-powered analytics systems. I work across ingestion, 
              orchestration, modeling, and automation—turning messy datasets into clean, 
              structured, insight-ready systems.
              <br /><br />
              My experience ranges from real-time streaming pipelines using{" "}
              <span className="text-white font-semibold">Kafka & Airflow</span>, to 
              cloud-native analytics infrastructures leveraging{" "}
              <span className="text-white font-semibold">AWS Glue, Athena, and S3</span>. 
              I love designing systems that don’t just function—but scale, monitor themselves, 
              and provide meaningful business value.
              <br /><br />
              Outside engineering, I stay curious about{" "}
              <span className="text-white font-semibold">geopolitics, psychology, and system design</span>. 
              These help me think more clearly about how people use data and how intelligent systems should behave.
            </p>
          </div>
        </motion.div>

        {/* Expertise Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {expertise.map((item, i) => (
            <motion.div
              key={i}
              className="group bg-white/5 p-6 rounded-xl shadow-lg backdrop-blur-md border border-white/10 transition duration-300 hover:scale-[1.03] hover:shadow-cyan-500/10 cursor-default"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-cyan-300 transition">
                {item.title}
              </h3>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Achievements Section */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl font-bold text-cyan-400 mb-4">Highlights</h3>
          <p className="text-gray-400 text-base max-w-2xl mx-auto">
            Built real-time ingestion systems, automated BI pipelines, deployed ML analytics, 
            and optimized SQL workflows powering insights for 600+ brands. Always improving, always building.
          </p>
        </motion.div>

        {/* Closing Line */}
        <motion.p
          className="text-center text-gray-500 text-sm italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          More to come — something is always cooking. 🚀
        </motion.p>
      </div>
    </section>
  );
};

export default About;
