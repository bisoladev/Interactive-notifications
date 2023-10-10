/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        snow: '#F7FAFD',
        darkText: '#1C202B',
        text: '#5E6778',
        greyText: '#939CAD',
        red: '#F36663',
        borderGrey: '#DDE7EE',
        blue: '#0A327B',
        hoverBlue: '#E5EFFA',
      },
    },
  },
  plugins: [],
};
