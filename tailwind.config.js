module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        deep_orange: { 50: "#ffdddd", 100: "#ffbfbf", 400: "#ff8b38" },
        indigo: { 50: "#ddd5ff" },
        red: { 50: "#fff1f1", A200: "#ff4747" },
        yellow: {
          50: "#feffdd",
          100: "#fffcc2",
          400: "#fbff52",
          "100_01": "#fdffc9",
        },
        blue: {
          50: "#dae6ff",
          100: "#bed4ff",
          A700: "#1262ff",
          "50_01": "#e6efff",
        },
        purple: { A200_dd: "#f047ffdd" },
        light_green: { 300: "#9ad98b" },
        deep_purple: { 50: "#eeeaff", 100: "#c2b3ff", A200: "#8263ff" },
        green: { 50: "#e4ffe3", 700: "#36931f", A100: "#bbffb9" },
        gray: { 50: "#fefff4" },
        black: { 900: "#000000" },
      },
      fontFamily: { panic: "Panic", pixeled: "Pixeled" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
