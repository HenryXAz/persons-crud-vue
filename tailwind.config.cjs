/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
	'./src/**/*.{vue,js,html}',
	'./index.html',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'darkmode': {
          0: 'rgba(43, 38, 44,1)',
          1: 'rgba(53, 47, 55,1)',
          2: 'rgba(64, 56, 66,1)',
          3: 'rgba(75, 66, 77,1)',
        }
      }
    },
    
  },
  plugins: [],
}
