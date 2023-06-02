/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin'); 

module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {

      colors : {
        'dark_color': '#121927',
        'dark_color_hover': '#3c414d',
        'dark_white_bg' : '#f9fbfc',
        'dark_white_border' : '#f5f5f7',

        'blue_contest' : '#004de5',
        'light_ash_text': '#686c7f',
        'light_black_text': '#121319',
        'gray_bg' : '#ebecf2'
       },

       keyframes: {
        fadeIn: {
         'from': {opacity: '0'  },
         'to': {opacity: '1' },
        },
        slideIn: {
         'from': { width: '0%' },
         'to': { width: 'content-fit' }
       }
      },

      animation: {
       slideIn: 'slideIn 800ms  ',
       fadeIn: 'fadeIn 800ms  ',
     }
    },
  },
  plugins: [
   plugin(function({ addVariant }) {
    addVariant('current', '&.active');
   })


  ],
}
