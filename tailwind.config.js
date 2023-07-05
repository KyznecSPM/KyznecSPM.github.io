/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        brand: "rgb(125, 76, 219)",
        text_main: "rgba(237, 237, 237, 0.8)",
        text_second: "rgb(248, 248, 248)",
      },
    },
  },

  plugins: [],
};
