/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'royal-blue': '#2405F2',
      'tint-blue': '#1C1E53',
      'dark-blue': '#282938',
      'yelow': '#FCD980',
      'grey': '#F4F6FC',
      'accent': '#EEF4FA',
      'black': '#00000',
      'white': '#FFFFFF',
      'sky': '#BBBBCB',
      'greyblue': 'rgba(244, 246, 252, 0.20)',
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      borderRadius: {
        'custom-41': '41px'
      }
    },
  },
  plugins: [],
}

