/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      color:{
        'default_color': '#121927',
        'default_color_hover': '#3c414d',
        'default_white_hover' : '#f9fbfc',
        'default_white_border' : '#f5f5f7',
        'blue_contest' : '#004de5',
        'ash_text': '#686c7f',
        'black_text': '#121319',
        'gray_bg' : '#ebecf2'
       },
    },
  },
  plugins: [],
}
