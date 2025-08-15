import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";
import { MdWork } from "react-icons/md";

const experienceList = [
  {
    title: "Data Analyst Intern – FUDR",
    date: "May 2024 – July 2024 | Onsite",
    icon: <MdWork className="text-xl" />,
     points: [
      "Designed and wrote complex SQL queries to extract, clean, and transform customer data across 600+ brands, supporting real-time dashboards and internal analytics workflows.",
      "Refactored inefficient queries by removing redundant joins and adding indexes, reducing query execution time by 40% and improving backend performance.",
      "Built reusable SQL views and scheduled Excel integrations for Power BI reports, cutting report generation time by 60% and enhancing decision speed across departments.",
      "Scraped and structured data from 500+ client touchpoints using Postman, Selenium, and BeautifulSoup, automating insight generation for marketing and operations.",
    ],
    tools: ["Python", "SQL", "Power BI", "Excel", "Web Scraping"],
  },
];

const highlightKeywords = (text) => {
  const keywords = [
    "20%",
    "600+",
    "500",
    "CRM app",
    "dashboard",
    "automation",
    "Python",
    "SQL",
    "Power BI",
    "Excel",
  ];
  const regex = new RegExp(`\\b(${keywords.join("|")})\\b`, "gi");

  return text.split(regex).map((part, i) =>
    keywords.includes(part) ? (
      <span key={i} className="text-white font-semibold">
        {part}
      </span>
    ) : (
      part
    )
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 text-white">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
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
                  <div className="bg-cyan-500 text-white p-3 rounded-full shadow-md">
                    {exp.icon}
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-cyan-300">
                      {exp.title}
                    </h3>
                    <p className="text-sm text-gray-400">{exp.date}</p>
                  </div>
                </div>

                {/* Role points */}
                <ul className="list-disc list-inside text-gray-300 space-y-3 text-sm md:text-base pl-2">
                  {exp.points.map((point, i) => (
                    <li key={i}>{highlightKeywords(point)}</li>
                  ))}
                </ul>

                {/* Tools used */}
                <div className="mt-5 flex flex-wrap gap-3">
                  {exp.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="bg-cyan-600/10 text-cyan-200 text-xs px-3 py-1 rounded-full border border-cyan-500/40"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
