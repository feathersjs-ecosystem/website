/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{html,js}',
    './src/theme/**/*.{html,js}',
    './src/pages/**/*.{html,js,md}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#E6746C'
        }
      }
    }
  },
  plugins: []
};
