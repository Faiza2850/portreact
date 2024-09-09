/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
    //   'tablet': '640px',
    //   // => @media (min-width: 640px) { ... }

    //   'laptop': '1024px',
    //   // => @media (min-width: 1024px) { ... }

    //   'desktop': '1280px',
    //   // => @media (min-width: 1280px) { ... }
    // },
 
    extend: {
      colors:{
        darkblue: '#001f3f',
      },
      width: {
        '104': '26rem', // Adding custom width
      },
      fontSize: {
        'tiny': '0.625rem',  // 10px
        'huge': '3rem',      // 64px
      },
      transformOrigin: {
        'custom': '100px 100px', // Custom transform origin
      },
      transformStyle: {
        'preserve-3d': 'preserve-3d',
      },
      keyframes: {
        cubespinner: {
          '0%, 100%': { transform: 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)' },
          '16%': { transform: 'rotateY(-90deg) rotateZ(90deg)' },
          '33%': { transform: 'rotateY(-90deg) rotateX(90deg)' },
          '50%': { transform: 'rotateY(-180deg) rotateZ(90deg)' },
          '66%': { transform: 'rotateY(-270deg) rotateX(90deg)' },
          '83%': { transform: 'rotateX(90deg)' },
        },

      },
      animation: {
        spincube: 'spincube 12s ease-in-out infinite ',
      },
      spacing: {
        '18p': '18%',
      },
      width: {
        '48': '12rem',
      },
      height: {
        '48': '12rem',
      },
    },
  },
  plugins: [],
}
};
