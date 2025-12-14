import React, { Suspense, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { motion, useScroll, useSpring } from "framer-motion";

// Regular Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FixedBackground from "./components/FixedBackground";
import BackToTop from "./components/BackToTop";
import Footer from "./components/Footer";

// Lazy Loaded Sections
const About = React.lazy(() => import("./components/About"));
const Skills = React.lazy(() => import("./components/Skills"));
const Projects = React.lazy(() => import("./components/Projects"));
const Experience = React.lazy(() => import("./components/Experience"));
const Contact = React.lazy(() => import("./components/Contact"));

function App() {
  // Scroll Progress Bar
  const { scrollYProgress } = useScroll();
  const progressBar = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 20,
    restDelta: 0.001,
  });

  // Scroll to top on initial load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="relative w-full h-full">

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-400 to-purple-500 origin-left z-[999]"
        style={{ scaleX: progressBar }}
      />

      {/* Background Effects */}
      <FixedBackground />

      {/* Toast Notifications */}
      <Toaster position="top-center" reverseOrder={false} />

      <div className="relative z-10">

        {/* Navbar Always Visible */}
        <Navbar />

        {/* Smooth Fade-In Wrapper */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        >
          {/* Hero Section */}
          <Hero />

          {/* Lazy-loaded Sections with Neon Loader */}
          <Suspense
            fallback={
              <div className="flex justify-center items-center py-20">
                <div className="h-10 w-10 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
              </div>
            }
          >
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
          </Suspense>

          {/* Footer & Back-To-Top Button */}
          <Footer />
          <BackToTop />
        </motion.div>
      </div>
    </div>
  );
}

export default App;
