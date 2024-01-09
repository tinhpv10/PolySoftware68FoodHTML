/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './src/components/**/*.{html,js}',
      './src/pages/**/*.{html,js}',
      './index.html',],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
}

