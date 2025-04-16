/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transform: {
        'flip-y': 'rotateX(0deg) rotateY(180deg)',
      },
      colors: {
        lightYellow: "#FFFD70",
        goldenOrange: "#FFB531",
      },
      fontFamily: {
        inter: [ 'Inter', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        slideDown: 'slideDown 1.5s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
    
  },
  plugins: [],
}

