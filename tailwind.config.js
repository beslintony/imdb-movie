/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#f9b8d3",
          secondary: "#6be09e",
          accent: "#add9ed",
          neutral: "#27303F",
          "base-100": "#2D293D",
          info: "#67CFE9",
          success: "#289F61",
          warning: "#F5DD70",
          error: "#F55442",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
