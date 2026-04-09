/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        primary: "#252525",
        secondary: "#303030",
        accent: "#22c55e",

        text: {
          dark: "#303030",
          light: "#696969",
          off: "#f0efec",
        },
        background: {
          peach: "#f94144",
          orange: "#f3722c",
          brightOrange: "#f8961e",
          yellow: "#f9c74f",
          green: "#90be6d",
          torquise: "#43aa8b",
          blue: "#577590",
        },
      },
    },
  },
  plugins: [],
};

