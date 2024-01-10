/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './src/components/**/*.{html,js}',
      './src/pages/**/*.{html,js}',
      './index.html',],
  theme: {
    extend: {
      colors: {
        // 'lightRed': 'C8151C',
        'color-blue': '#4888C6',
        'color-success': '#941D34',
        'color-orange': '#F94F4F',
        'color-text': '#686363',
        'color-secondary': '#A39A9B',
        'color-warning': '#E0A750',
        'color-yellow': '#FFCA40',
        'color-danger': '#F94F4F',
        'color-green': '#2A770F',
        'color-white': '#FFFFFF',
        'color-bg-gray-light': '#F1F1F1',
        'color-bg-gray-dark': '#D5D5D5',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      }
    },
  },
  variants: {},
  plugins: [],
}

