import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Experience from './components/Experience';
import ThreeBackground from './components/ThreeBackground';


function App() {
  return (
    <div className="">
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <ThreeBackground />
        <Skills />
        <Experience />
        <Contact />
      </div>
    </div>
  );
}

export default App;