/** @type {import('tailwindcss').Config} */
//     @todo add next font
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primaryColorGray: '#1A1919',
        grayLight: '#666262',
        claretDark: '#330E0E',
        claretLight: '#664343',
        grayLighter: '#B3ABAB',
        backgroundColor: '#F8FBFF',
        backgroundColorTest: '#F8F8F7',
        whiteCream: '#FFFEF9',
        cta: '#8F8C73',
      },
      screens: {
        xsm: '380px',
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        poppins: ['poppins', 'sans-serif'],
        sans: ['poppins', ...defaultTheme.fontFamily.sans],
      },
      lineHeight: {
        'poppins-fit': '8.5rem',
      },
      borderWidth: {
        1: '1px',
        5: '5px',
        6: '6px',
      },
      spacing: {
        26: '6.5rem',
      },
      width: {
        42: '10.5rem',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
