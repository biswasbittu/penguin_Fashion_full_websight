/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                custom: ['Bebas Neue', 'sans-serif'],
                roboto: ['Roboto', 'sans-serif'],
            }
        },
    },
    plugins: [],
}