// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: [
  "./index.html", "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      animation: {
        fade: 'fadeIn 0.5s ease-in-out',
        bounceIn: 'bounceIn 0.6s ease',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        bounceIn: {
          '0%': {
            opacity: 0,
            transform: 'scale(0.95) translateY(10px)',
          },
          '100%': {
            opacity: 1,
            transform: 'scale(1) translateY(0)',
          },
        },
      },
      transitionProperty: {
        'background-color': 'background-color',
        'spacing': 'margin, padding',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // for better form styles
  ],
};
