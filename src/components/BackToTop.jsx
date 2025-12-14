import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollTop}
      className={`fixed bottom-6 right-6 z-50 p-4 rounded-full bg-gradient-to-r 
      from-cyan-500 to-purple-600 shadow-lg shadow-cyan-500/40 
      hover:scale-110 active:scale-95 transition-all duration-300 text-white 
      ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      title="Back to top"
    >
      <FaArrowUp className="text-lg" />
    </button>
  );
};

export default BackToTop;
