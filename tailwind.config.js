/** @type {import('tailwindcss').Config} */
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
    },
  },
  plugins: [],
}
