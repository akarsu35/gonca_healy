/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT')
module.exports = withMT({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        customr:
          'rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px',
        customl:
          'rgba(240, 46, 170, 0.4) -5px -5px, rgba(240, 46, 170, 0.3) -10px -10px, rgba(240, 46, 170, 0.2) -15px -15px, rgba(240, 46, 170, 0.1) -20px -20px, rgba(240, 46, 170, 0.05) -25px -25px',

        customrl:
          'rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px,rgba(191, 165, 94,0.4) -5px -5px, rgba(191, 165, 94,0.3) -10px -10px, rgba(191, 165, 94, 0.2) -15px -15px, rgba(191, 165, 94,0.1) -20px -20px, rgba(191, 165, 94,0.05) -25px -25px',
      },
    },
  },
  plugins: [],
})
