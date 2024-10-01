/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'selector',
  theme: {
    extend: {
      screens: {
        sm: "430px",
      },
      colors: {
        darkContrast: '#ef4444',
        darkPrimary: '#363333',
        dark600: '#2A2727',
        dark900: '#272121',

        contrast: '#8294C4',
        light: '#f5f5f5',
        light100: '#efefef'
      }
    }, keyframes: {
      slide: {
        '0%': {
          transform: 'scaleY(1)',
          transform: 'scaleX(1)'
        },
        '100%': {
          transform: 'scaleY(1.3)',
          transform: 'scaleX(1.3)'
        }
      }
    }
    , animation: {
      slide: 'slide 3s ease 0s normal forwards'
    },

    plugins: [],
  },
};
