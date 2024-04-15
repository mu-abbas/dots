/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Space Grotesk', 'sans-serif'],
    },
    colors: {
      white: '#FFFFFF',
      offWhite: '#EFF3E9',
      green: '#C7F08B',
      lightBlue: '#80B7D2',
      blue: '#2B65F4',
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
    },
  },
  plugins: [],
};
