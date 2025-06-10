import React, { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast'; // ✅ Toast import
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import FixedBackground from "./components/FixedBackground";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (localStorage.getItem('theme')) {
      return localStorage.getItem('theme') === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  return (
    <div className="relative w-full h-full">
      <FixedBackground />
      <Toaster position="top-center" reverseOrder={false} /> {/* ✅ Toast ready */}
      <div className="relative z-10">
        <Navbar toggleTheme={() => setIsDarkMode(!isDarkMode)} isDarkMode={isDarkMode} />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </div>
  );
}

export default App;
