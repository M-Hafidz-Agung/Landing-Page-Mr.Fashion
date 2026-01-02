/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
        "./app/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                cream: {
                    50: '#FDFBF7',
                    100: '#FAF6F0',
                    200: '#EAE0D5',
                },
                pink: {
                    50: '#FCE7E7',
                    100: '#F5D0D0',
                    500: '#D48C92',
                    600: '#C07078',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
            }
        },
    },
    plugins: [],
}
