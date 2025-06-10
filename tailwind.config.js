/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // ✅ Enables class-based dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"]
      },
      colors: {
        primary: "#1e1e2f",
        secondary: "#3b3b5f",
        accent: "#8f00ff",
      },
    },
  },
  plugins: [],
};
