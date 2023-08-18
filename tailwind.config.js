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
                    DEFAULT: 'hsl(220deg, 100%, 60%)', //#3377ff
                    dark: 'hsl(220deg, 100%, 5%)', //
                    darker: 'hsl(222deg, 100%, 3%)', //
                },

                secondary: 'hsl(260deg, 100%, 60%)', // #7733ff
                tertiary: 'hsl(260deg, 100%, 60%)', //

                // If there's an element over an element transition by 100, if you're adding an effect: hover, active, transition by 50

                // in light mode you can have a white element over a white background cause you can give borders and shadows and that will provide the necessary elevation
                // but in dark borders just create a box and shadows are invisible so

                // i'm still debating if i should use low opacity black and white or should i use grays
                // i think lower opacity blacks and whites should be a better option cause then they won't look ugly if i change the theme colors, or implement a color in place of gray-900 for dark
                // i need to figure out what i should do for hover of eleements which do not have a distinct background

                gray: {
                    // 50: 'hsl(0deg,0%,95%)', //#f2f2f2
                    100: 'hsl(0deg,0%,90%)', //#e6e6e6
                    150: 'hsl(0deg,0%,85%)', //#d9d9d9
                    200: 'hsl(0deg,0%,80%)', //#cccccc
                    250: 'hsl(0deg,0%,75%)', //#bfbfbf
                    300: 'hsl(0deg,0%,70%)', //#b3b3bb3
                    350: 'hsl(0deg,0%,65%)', //#a6a6a6
                    400: 'hsl(0deg,0%,60%)', //#999999
                    450: 'hsl(0deg,0%,55%)', //#8c8c8c
                    500: 'hsl(0deg,0%,50%)', //#808080
                    550: 'hsl(0deg,0%,45%)', //#737373
                    600: 'hsl(0deg,0%,40%)', //#666666
                    650: 'hsl(0deg,0%,35%)', //#595959
                    700: 'hsl(0deg,0%,30%)', //#4d4d4d
                    750: 'hsl(0deg,0%,25%)', //#404040
                    800: 'hsl(0deg,0%,20%)', //#333333
                    850: 'hsl(0deg,0%,15%)', //#262626
                    900: 'hsl(0deg,0%,10%)', //#1a1a1a
                    // 950: 'hsl(0deg,0%,5%)', //#0d0d0d
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
