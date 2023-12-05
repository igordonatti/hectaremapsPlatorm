/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      colors: {
        'green': {
          200: '#24FF00',
          600: '#135954',
          800: '#023F3A',
        },
        'gray': {
          300: '#D9D9D9',
          500: '#959595',
        },
        'red': {
          300: '#E57373',
        }
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}