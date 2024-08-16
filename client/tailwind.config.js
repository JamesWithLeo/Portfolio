/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'selector',
  theme: {
    extend: {
      screens: {
        sm: "430px",
        // => @media (min-width: 640px) { ... }
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
          transform: 'translateX(0)'
        },
        '100%': {
          transform: 'translateX(27rem)'
        }
      }
    }
    , animation: {
      slide: 'slide 3s ease 0s normal forwards'
    },

    plugins: [],
  },
};
