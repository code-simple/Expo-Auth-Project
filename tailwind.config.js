/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "Inter-Black": ["Inter-Black", "sans-serif"],
        "Inter-bold": ["Inter-Bold", "sans-serif"],
        "Inter-extrabold": ["Inter-ExtraBold", "sans-serif"],
        "Inter-medium": ["Inter-Medium", "sans-serif"],
      },
      colors: {
        Primary: "#6687c4",
        Black: "#3e4243",
        red: "#F2160E",
      },
    },
  },
  plugins: [],
};
