/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gaMaamli: ["Ga Maamli", "sans-serif"], // Add the font family
        bebas: ["Bebas Neue", "serif"], // Add the font family
      },
      animation: {
        "gradient-move": "gradientAnimation 5s linear infinite",
      },
      keyframes: {
        gradientAnimation: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
      gridTemplateColumns: {
        16: "repeat(16, 1fr)", // 16 columns for higher-density grids
        10: "repeat(10, 1fr)", // 10 columns for medium grids
        5: "repeat(5, 1fr)",  // 5 columns for larger blocks
      },
    },
  },
  plugins: [],
};


