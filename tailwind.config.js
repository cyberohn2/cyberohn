/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        termina: ['Termina', 'sans-serif']
      },
      animation: {
        'spin-slow': 'spin 1.2s linear infinite',
        'icon-up': 'icon-up 0.6s cubic-bezier(0.4,0,0.2,1)',
        'scroll': 'scroll 10s linear infinite'
      },
      keyframes: {
        'icon-up': {
          '0%': { transform: 'translateY(40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'scroll': {
          '0%': { transform: 'translateX(0)'},
          '100%': {transform: 'translateX(-320px * 25)'}
        }
      }
    },
  },
  plugins: [],
  variants: {
    extend: {
      backgroundColor: ['before'],
      blur: ['before'],
      opacity: ['before'],
      animation: ['before'],
      inset: ['before'],
      borderRadius: ['before'],
    },
  },
}