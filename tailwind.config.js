  /** @type {import('tailwindcss').Config} */
  module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
      extend : {
        colors: {
          'green': {
            200: '#24FF00',
            300: '#86EFAC',
            600: '#135954',
            800: '#023F3A',
          },
          'gray': {
            300: '#D9D9D9',
            500: '#959595',
          },
          'red': {
            300: '#E57373',
            900: '#FF0000',
          }
        },  
        fontFamily: {
          'poppins': ['Poppins', 'sans-serif']
        }
      },
    },
  }