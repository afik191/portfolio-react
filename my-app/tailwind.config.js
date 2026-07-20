/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#1e3a8a', // A deep blue for text
        secondary: '#eff6ff', // A very light blue
        accent: '#3b82f6', // A brighter blue for accents
      }
    },
  },
  plugins: [],
}
