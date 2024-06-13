/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      playfir:["Playfair Display", "serif"],
      itim:["Itim", "cursive"]
    }
  },
  plugins: [],
}