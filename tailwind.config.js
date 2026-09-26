/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pirateNavy: '#09101a',
        pirateGold: '#e5b85c',
        pirateGoldDark: '#d1a762',
        pirateRed: '#7a1c1c',
        posterBorder: '#8c6734',
        posterDark: '#2a1b0a',
      },
      fontFamily: {
        pirata: ['"Pirata One"', 'cursive'],
        fell: ['"IM Fell English SC"', 'serif'],
        cinzel: ['"Cinzel"', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
      }
    },
  },
  plugins: [],
}