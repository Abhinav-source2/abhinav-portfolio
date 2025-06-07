import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">Experience</h2>
        <div className="space-y-6">
          <div className="bg-black/50 p-6 rounded-xl backdrop-blur-sm shadow-md">
            <h3 className="text-xl font-semibold">Frontend Developer Intern – XYZ Tech</h3>
            <p className="text-gray-400 text-sm">June 2023 – Dec 2023</p>
            <p className="mt-2 text-gray-300">
              Developed modern user interfaces with React and improved app performance by 35%. Integrated animations with Framer Motion and collaborated in agile sprints.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
