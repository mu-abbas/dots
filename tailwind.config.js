/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    fontFamily: {
      sans: ['var(--font-grotesk)', 'sans-serif'],
      clash: ['var(--font-clash)', 'sans-serif'],
      poppins: ['var(--font-poppins)', 'sans-serif'],
    },

    colors: {
      white: '#FFFFFF', //ok
      offWhite: '#EFEDEB', //ok
      beige: '#EFF3E9',
      black: '#161B23', //ok

      yellow: '#F2E76E', //ok
      red: '#ef4444', //ok

      lightGreen: '#A7F9CD', //ok
      green: '#C7F08B', //ok
      darkGreen: '#00ae7b',
      extraDarkGreen: '#005057',

      lightBlue: '#80B7D2', //ok
      mediumBlue: '#83A1CE',
      babyBlue: '#80B1CC',
      blue: '#2B65F4', //ok
      lightNavy: '#94B6FF', //ok
      navy: '#1745BF', //ok

      extraLightPurple: '#FAC7FF',
      lightPurple: '#A799FF', //ok
      purple: '#5152D8', //ok

      lightGrey: '#B9C8DE', //ok
      grey: '#4B4B57', //ok
    },

    extend: {
      backgroundImage: {
        home: "url('/image/home/home-bg.png')",
        readyToStart: "url('/image/ready-to-start-bg.png')",
        services: "url('/image/services/services-bg.png')",
        ourDesign: "url('/image/services/our-design-bg.png')",
        aboutUs: "url('/image/about-us/about-bg.png')",
        weDots: "url('/image/about-us/aboutUs-We.png')",
        DotsPower: "url('/image/about-us/Power-bg.png')",
        presentationDesign: "url('/image/presentation-design/Presentation_Bckgd1.png')",
        presentationTemplates: "url('/image/presentation-templates/PresentationTemplate_Background2.png')",
        pitchDecks: "url('/image/pitch-decks/Pitch_Bckgd1.png')",
        documentDesign: "url('/image/document-design/Document_Bckgd1.png')",
        shape4: "url('/image/presentation-design/Shape4.png')",
        shape2: "url('/image/presentation-design/Shape2.png')",
        shape3: "url('/image/presentation-design/Shape3.png')",
      },

      backgroundSize: {
        '25%': '25%',
        '50%': '50%',
        '75%': '75%',
      },

      fontSize: {
        '4xlplus': '2.75rem',
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
        screen: '100svh',
      },

      spacing: {
        18: '4.5rem',
      },

      keyframes: {
        pulsing: {
          '50%': { transform: 'scale(.9)' },
          '100%': { transform: 'scale(1)' },
        },
        expand: {
          '0%': { transform: 'scaleY(0)' },
          '100%': { transform: 'scaleY(1)' },
        },
        popUp: {
          '0%': { transform: 'scale(0)', opcaity: 0 },
          '100%': { transform: 'scale(1)', opcaity: 1 },
        },
        opacity: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-100%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },

      animation: {
        pulsing: 'pulsing 0.7s infinite',
        expand: 'expand 0.5s',
        popUp: 'popUp 0.5s ease-out',
        opacity: 'opacity 0.5s',
        slideDown: 'slideDown 0.5s ease-out',
      },
    },
  },

  plugins: [],
};
