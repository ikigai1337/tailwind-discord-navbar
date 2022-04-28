const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#202225',
        secondary: '#5865f2', 
        grey: colors.neutral,
        gray : {
           900: '#202225',
          800: '#2f3136',
          700: '#36393f', 
          600: '#4f545c',
          400: '#d4d7dc',
          300: '#e3e5e8',
          200: '#ebedef',
          100: '#f2f3f5',
        },
      }
    },
  },
  variants: {
    extend: {

       borderRadius: ['hover'],
    },
  },
  plugins: [],
}