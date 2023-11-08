/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        "dark-mode": "#000000",
        "dark-gray": "#3b3a3b",
        "dark-text": "#f2f2f2",
        "dark-accent": "#8C8B8D",
        "dark-secondary": "#272626",
      },
    },
  },
  plugins: [require("daisyui")],
};
