/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          lighter: "#a196de",
          light: "#a196de",
          DEFAULT: "#4b38b3",
          dark: "#3c2d90",
          darker: "#251c59",
        },
      },
    },
  },
  plugins: [],
};
