/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn .25s ease-in',
        slideDown: 'slideDown 0.3s ease-in',
      },
      colors:{
        primary: '#fc4f13'
      },
      backgroundColor: {
        primary: '#fc4f13',
        secondary: '#27153E'
      }
    },
    backgroundImage:{
      "teachBg": "url('/src/assets/teach.svg')",
      "loginBg": "url('/src/assets/desktop.jpg')",
      "registerBg": "url('/src/assets/register.png')",
      "uTypeBg": "url('/src/assets/uType.png')"
    },
  },
  plugins: [],
}