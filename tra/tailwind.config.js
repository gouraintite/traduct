/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#A96F25',
        secondary: '#E4A34A',
        tert: '#72491B'
      }
    },
  },
  plugins: [],
}