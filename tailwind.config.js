/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        popins: "'Poppins', sans-serif",
        roboto: "'Roboto', sans-serif",
        inter: "'Inter', sans-serif",
      },
      colors: {
        primaryColor: '#F6E87B',
        primaryColorBlue: '#6343BE',
        primaryColorPurple: '#421363',
        primaryColorBlack: '#000000',
        primaryColor5: '#F4F3E1',
      },
    },
  },
  plugins: [require('daisyui')],
  // TODO: Theme color light
  daisyui: {
    themes: ['light'],
  },
}
