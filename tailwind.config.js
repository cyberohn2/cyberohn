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
}