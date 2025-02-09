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
      'smoke-white': '#ECECF1',
      'sky': '#BBBBCB',
      'greyblue': 'rgba(244, 246, 252, 0.20)',
      'linear': 'linear-gradient(329deg, #1C1E53 -10.96%, rgba(28, 30, 83, 0.42) 103.96%)',
    },
    fontSize: {
      xs: '0.75rem', /* 12px */
      sm: '0.875rem', /* 14px */
      base: '1rem', /* 16px */
      lg: '1.125rem', /* 18px */
      xl: '1.25rem', /* 20px */
      '2xl': '1.5rem', /* 24px */
      '3xl': '1.875rem', /* 30px */
      '3xll': '2rem', /* 32px */
      '4xl': '2.25rem', /* 36px */
      '4xll': '2.375rem', /* 38px */
      '5xl': '3rem', /* 48px */
      '6xl': '3.375rem', /* 54px */
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      borderRadius: {
        'custom-41': '41px'
      },
    },
  },
  plugins: [],
}

