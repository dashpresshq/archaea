/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#67e8f9",
          DEFAULT: "#4b38b3",
          dark: "#3c2d90",
        },
      },
    },
  },
  plugins: [],
};
