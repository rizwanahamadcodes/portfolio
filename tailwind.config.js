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
                    DEFAULT: 'hsl(220deg, 100%, 50%)',
                    dark: 'hsl(220deg, 100%, 5%)',
                    darker: 'hsl(222deg, 100%, 3%)',
                },

                secondary: 'hsl(260deg, 100%, 50%)',

                // If there's an element over an element transition by 100, if you're adding an effect: hover, active, transition by 50

                // in light mode you can have a white element over a white background cause you can give borders and shadows and that will provide the necessary elevation
                // but in dark borders just create a box and shadows are invisible so

                // i'm still debating if i should use low opacity black and white or should i use grays
                // i think lower opacity blacks and whites should be a better option cause then they won't look ugly if i change the theme colors, or implement a color in place of gray-900 for dark
                // i need to figure out what i should do for hover of eleements which do not have a distinct background

                gray: {
                    50: 'hsl(0deg,0%,95%)',
                    100: 'hsl(0deg,0%,90%)',
                    150: 'hsl(0deg,0%,85%)',
                    200: 'hsl(0deg,0%,80%)',
                    250: 'hsl(0deg,0%,75%)',
                    300: 'hsl(0deg,0%,70%)',
                    350: 'hsl(0deg,0%,65%)',
                    400: 'hsl(0deg,0%,60%)',
                    450: 'hsl(0deg,0%,55%)',
                    500: 'hsl(0deg,0%,50%)',
                    550: 'hsl(0deg,0%,45%)',
                    600: 'hsl(0deg,0%,40%)',
                    650: 'hsl(0deg,0%,35%)',
                    700: 'hsl(0deg,0%,30%)',
                    750: 'hsl(0deg,0%,25%)',
                    800: 'hsl(0deg,0%,20%)',
                    850: 'hsl(0deg,0%,15%)',
                    900: 'hsl(0deg,0%,10%)',
                    950: 'hsl(0deg,0%,5%)',
                },

                darkmodesubstitute: {
                    white: 'hsl(0deg,0%,10%)',
                    black: 'hsl(0deg,0%,100%)',
                },
            },
            boxShadow: {
                left: '-1px 0px 3px 0px rgba(0,0,0,0.1), -1px 0px 2px -1px rgb(0,0,0,0.1)',
            },
        },
    },
    plugins: [],
}
