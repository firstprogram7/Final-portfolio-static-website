/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        vibrate: {
          "0%, 100%": { transform: "translateX(0)" },
          "20%": { transform: "translateX(-2px)" },
          "40%": { transform: "translateX(2px)" },
          "60%": { transform: "translateX(-2px)" },
          "80%": { transform: "translateX(2px)" },
        },
      },
      animation: {
        vibrate: "vibrate 0.2s linear infinite",
      },
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
