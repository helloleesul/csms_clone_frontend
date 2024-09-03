/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      body: ["SUIT"],
    },
    colors: {
      primary: "#1d2934",
      secondary: "#00adff",
      tertiary: "#00d392",
      error: "#ff6252",
      gray0: "#f8fafc",
      gray100: "#f5f6f8",
      gray200: "#e8eef2",
      gray300: "#d0d5d9",
      white: "#ffffff",
      black: "#000000",
    },
  },
  plugins: [],
};
