import React, { useState, useEffect, Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { motion, useScroll, useSpring } from "framer-motion";

// Normal Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FixedBackground from "./components/FixedBackground";

// Lazy Loaded Sections (performance boost)
const About = React.lazy(() => import("./components/About"));
const Skills = React.lazy(() => import("./components/Skills"));
const Projects = React.lazy(() => import("./components/Projects"));
const Experience = React.lazy(() => import("./components/Experience"));
const Contact = React.lazy(() => import("./components/Contact"));

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (localStorage.getItem("theme")) {
      return localStorage.getItem("theme") === "dark";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // Apply dark mode smoothly
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("transition-colors", "duration-500");

    if (isDarkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  // Scroll progress bar animation
  const { scrollYProgress } = useScroll();
  const progressBar = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    restDelta: 0.001,
  });

  return (
    <div className="relative w-full h-full">
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 origin-left z-50"
        style={{ scaleX: progressBar }}
      />

      <FixedBackground />
      <Toaster position="top-center" reverseOrder={false} />

      <div className="relative z-10">
        <Navbar toggleTheme={() => setIsDarkMode(!isDarkMode)} isDarkMode={isDarkMode} />

        {/* Smooth Fade-In for Main Layout */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <Hero />

          {/* Lazy-loaded components with fallback */}
          <Suspense fallback={<div className="text-center py-10 text-gray-300">Loading...</div>}>
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
          </Suspense>
        </motion.div>
      </div>
    </div>
  );
}

export default App;
