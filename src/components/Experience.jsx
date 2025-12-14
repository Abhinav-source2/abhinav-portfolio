import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaCheckCircle } from "react-icons/fa";
import { MdWork } from "react-icons/md";

const experienceList = [
  {
    title: "Data Analyst Intern – FUDR",
    date: "May 2024 – July 2024 | Onsite",
    icon: <MdWork className="text-xl" />,
    points: [
      "Designed and optimized SQL pipelines across 600+ brands, powering dashboards for marketing, CX, and strategy teams.",
      "Reduced SQL query execution time by 40% using indexing, query refactoring, and eliminating redundant joins.",
      "Automated reporting pipeline using reusable SQL views + Excel integrations, reducing manual reporting effort by 60%.",
      "Scraped, cleaned, and structured data from 500+ client touchpoints using Python, Selenium, and BeautifulSoup.",
    ],
    tools: ["SQL", "Python", "Power BI", "Excel", "Web Scraping"],
  },
];

const highlightKeywords = (text) => {
  const keywords = [
    "40%",
    "60%",
    "600+",
    "500+",
    "SQL",
    "Python",
    "Power BI",
    "Excel",
    "automated",
    "optimized",
    "reduced",
  ];

  const regex = new RegExp(`(${keywords.join("|")})`, "gi");

  return text.split(regex).map((part, i) =>
    keywords.includes(part) ? (
      <span key={i} className="text-cyan-300 font-semibold">
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
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
        >
          <FaBriefcase className="inline mr-2 text-cyan-400" /> Experience
        </motion.h2>

        {/* Timeline Container */}
        <div className="relative pl-8 border-l border-cyan-500/20">

          {experienceList.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative mb-14 group"
            >
              {/* Timeline Dot */}
              <span className="absolute -left-[34px] top-2 w-5 h-5 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full shadow-lg shadow-cyan-500/30"></span>

              {/* Card */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-md shadow-lg hover:shadow-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300">
                
                {/* Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-br from-cyan-500 to-purple-600 text-white p-3 rounded-full shadow-lg">
                    {exp.icon}
                  </div>

                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-cyan-300">
                      {exp.title}
                    </h3>
                    <p className="text-sm text-gray-400">{exp.date}</p>
                  </div>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-3 text-gray-300 text-sm md:text-base leading-relaxed">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex gap-2">
                      <FaCheckCircle className="text-cyan-300 mt-1 text-sm" />
                      {highlightKeywords(point)}
                    </li>
                  ))}
                </ul>

                {/* Tools */}
                <div className="mt-5 flex flex-wrap gap-3">
                  {exp.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="bg-cyan-600/10 text-cyan-200 px-3 py-1 text-xs rounded-full border border-cyan-500/40"
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
