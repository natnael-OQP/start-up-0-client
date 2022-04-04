const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                lato: ['Lato', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                dark: '#0f0f0f',
                light: '#f2f2f3',
                medium: '#D3D7DA',
            },
        },
    },
    plugins: [],
}
