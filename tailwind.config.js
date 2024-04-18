/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './public/fonts/**/*.woff2',
  ],
  theme: {
    fontFamily: {
      sans: ['Space Grotesk', 'sans-serif'],
      clash: ['Clash Display', 'sans-serif'],
      poppins: ['poppins', 'sans-serif'],
    },
    colors: {
      white: '#FFFFFF',
      offWhite: '#EFF3E9',
      green: '#C7F08B',
      lightBlue: '#80B7D2',
      blue: '#2B65F4',
      mediumBlue: '#2453D7',
      darkBlue: '#1745C4',
      black: '#161B23',
      grey: '#4B4B57',
      lightGrey: '#686868',
      veryLightGrey: '#C4C4C46B',
    },
    extend: {
      backgroundImage: {
        home: "url('/home-bg.png')",
      },
      fontSize: {
        '5xlplus': '3.5rem',
        '6xl': '4rem',
        '10xl': '10rem',
        '11xl': '11rem',
        '12xl': '12rem',
      },
      screens: {
        '3xl': '1920px',
      },
      height: {
        screen: '100dvh',
      },
      spacing: {
        18: '4.5rem',
      },
      keyframes: {
        pulsing: {
          '50%': { transform: 'scale(.9)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        pulsing: 'pulsing 0.7s infinite',
      },
    },
  },
  plugins: [],
};
