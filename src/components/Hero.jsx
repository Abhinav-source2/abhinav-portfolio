import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="h-screen flex items-center justify-center text-center px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
          Let’s Make Something Epic.
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          I'm Abhinav Jajoo — a developer crafting interactive, elegant experiences for the web.
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;
