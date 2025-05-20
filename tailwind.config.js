/** @type {import('tailwindcss').Config}*/
module.exports = {
    content: [
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend:{
            fontFamily:{
                termina: ['Termina', 'sans-serif']
            },
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
    // Add custom animation to Tailwind
    extend: {
        animation: {
            'spin-slow': 'spin 1.2s linear infinite',
            'icon-up': 'icon-up 0.6s cubic-bezier(0.4,0,0.2,1)'
        },
        keyframes: {
            'icon-up': {
                '0%': { transform: 'translateY(40px)', opacity: '0' },
                '100%': { transform: 'translateY(0)', opacity: '1' },
            }
        }
    },
}