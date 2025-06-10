import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";
import { MdWork } from "react-icons/md";

const experienceList = [
  {
    title: "Business Analyst Intern – FUDR",
    date: "May 2024 – July 2024",
    icon: <MdWork className="text-xl" />,
    points: [
      "Increased customer reach by 20% through data-backed engagement strategies and user research.",
      "Scraped and structured a dataset of 600+ brands and 500 clients for internal analysis.",
      "Developed a custom CRM app to centralize client interactions, boosting response speed and retention.",
      "Designed a live data-driven dashboard using automation pipelines to visualize KPIs and insights.",
      "Collaborated cross-functionally with devs and ops to ship features rapidly in Agile sprints.",
    ],
  },
  // Add more roles here if needed
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 text-white">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-16 text-center text-cyan-300"
        >
          <FaBriefcase className="inline mr-2 text-cyan-400" /> Experience
        </motion.h2>

        <div className="relative border-l border-cyan-800/40 ml-4">
          {experienceList.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative mb-12 ml-6 group"
            >
              {/* Timeline dot */}
              <span className="absolute -left-[30px] top-2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-black/70 shadow-cyan-500 shadow-sm group-hover:scale-110 transition duration-300"></span>

              <div className="bg-white/5 backdrop-blur-lg border border-cyan-400/20 rounded-2xl p-6 md:p-8 shadow-lg transition duration-300 group-hover:border-cyan-400 group-hover:shadow-cyan-400/30 hover:scale-[1.02] active:scale-95">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-cyan-500 text-white p-3 rounded-full">
                    {exp.icon}
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-cyan-300">
                      {exp.title}
                    </h3>
                    <p className="text-sm text-gray-400">{exp.date}</p>
                  </div>
                </div>
                <ul className="list-disc list-inside text-gray-300 space-y-3 text-sm md:text-base pl-2">
                  {exp.points.map((point, i) => (
                    <li key={i}>
                      {point.replace(/(\d+%|\d+\+|dashboard)/gi, (match) => (
                        <span className="text-white font-medium">{match}</span>
                      ))}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
