/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        reddit_dark: {
          DEFAULT: '#030303',
          brighter: '#272728'

        },
        reddit_border: {
          DEFAULT: '#343536',

        },
        reddit_text: {
          DEFAULT: 'rgb(215,218,220)',
          darker: '#818384',

        }
      }
    },
  },
  plugins: [],
}
