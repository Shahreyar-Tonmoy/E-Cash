/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      Ubuntu:['Ubuntu', "sans-serif"],
      Kanit: ['Kanit', "sans-serif"],
      WorkSans: ['Work Sans', "sans-serif"]
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}