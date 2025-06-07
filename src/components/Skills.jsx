import React from "react";

const skills = ["JavaScript", "React", "Tailwind CSS", "Three.js", "Git", "Node.js", "Vite", "HTML5", "CSS3"];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, idx) => (
            <span
              key={idx}
              className="px-4 py-2 bg-gradient-to-br from-cyan-500 to-purple-600 text-sm rounded-full shadow-lg"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
