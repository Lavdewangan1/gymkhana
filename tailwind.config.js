/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 0.25s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
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
