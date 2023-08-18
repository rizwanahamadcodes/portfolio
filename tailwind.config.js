/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',

        // Or if using `src` directory:
        './src/**/*.{js,ts,jsx,tsx,mdx}',

        // i might be in need of only one of those but i'm not gonna touch any
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-nunito)'],
            },
            colors: {
                primary: {
                    DEFAULT: '#0055ff',
                    dark: '#00091A',
                    darker: '#00040d',
                },
                dark: { gray: '#202124' },
                secondary: '#5500ff',
            },
            boxShadow: {
                left: '-1px 0px 3px 0px rgba(0,0,0,0.1), -1px 0px 2px -1px rgb(0,0,0,0.1)',
            },
        },
    },
    plugins: [],
}
