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
          'eden': {
            '50': '#f0fdfa',
            '100': '#cef9f0',
            '200': '#9cf3e1',
            '300': '#63e5d0',
            '400': '#32cfba',
            '500': '#19b3a1',
            '600': '#119083',
            '700': '#12736a',
            '800': '#135954',
            '900': '#154c48',
            '950': '#052e2d',
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