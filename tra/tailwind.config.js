/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'exp': "url('./src/assets/exp1.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      colors: {
        primary: '#A96F25',
        secondary: '#E4A34A',
        tert: '#72491B'
      }
    },
  },
  plugins: [],
}