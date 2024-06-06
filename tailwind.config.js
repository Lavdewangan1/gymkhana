/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      colors:{
        primary: "#000",
        secondary: "#fff",
        tertiary: "#96FB56",
      }
    },
  },
  plugins: [],
};
