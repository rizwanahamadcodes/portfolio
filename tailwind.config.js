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
                    100: 'hsl(220deg, 80%, 90%)',
                    200: 'hsl(220deg, 80%, 80%)',
                    300: 'hsl(220deg, 80%, 70%)',
                    400: 'hsl(220deg, 80%, 60%)',
                    DEFAULT: 'hsl(220deg,80%,50%)',
                    600: 'hsl(220deg,80%,40%)',
                    700: 'hsl(220deg,80%,30%)',
                    800: 'hsl(220deg,80%,20%)',
                    900: 'hsl(220deg,80%,10%)',

                    support: {
                        100: 'hsl(260deg, 80%, 90%)',
                        200: 'hsl(260deg, 80%, 80%)',
                        300: 'hsl(260deg, 80%, 70%)',
                        400: 'hsl(260deg, 80%, 60%)',
                        DEFAULT: 'hsl(260deg,80%,50%)',
                        600: 'hsl(260deg,80%,40%)',
                        700: 'hsl(260deg,80%,30%)',
                        800: 'hsl(260deg,80%,20%)',
                        900: 'hsl(260deg,80%,10%)',
                    },
                },

                secondary: {
                    100: 'hsl(0deg,100%, 90%)',
                    200: 'hsl(0deg,100%, 80%)',
                    300: 'hsl(0deg,100%, 70%)',
                    400: 'hsl(0deg,100%, 60%)',
                    DEFAULT: 'hsl(0deg,100%,50%)',
                    600: 'hsl(0deg,100%,40%)',
                    700: 'hsl(0deg,100%,30%)',
                    800: 'hsl(0deg,100%,20%)',
                    900: 'hsl(0deg,100%,10%)',

                    support: {
                        100: 'hsl(40deg, 100%, 90%)',
                        200: 'hsl(40deg, 100%, 80%)',
                        300: 'hsl(40deg, 100%, 70%)',
                        400: 'hsl(40deg, 100%, 60%)',
                        DEFAULT: 'hsl(40deg,100%,50%)',
                        600: 'hsl(40deg,100%,40%)',
                        700: 'hsl(40deg,100%,30%)',
                        800: 'hsl(40deg,100%,20%)',
                        900: 'hsl(40deg,100%,10%)',
                    },
                },

                gray: {
                    100: 'hsl(220deg,10%,90%)', //#e6e6e6
                    200: 'hsl(220deg,10%,80%)', //#cccccc
                    300: 'hsl(220deg,10%,70%)', //#b3b3bb3
                    400: 'hsl(220deg,10%,60%)', //#999999
                    500: 'hsl(220deg,10%,50%)', //#808080
                    600: 'hsl(220deg,10%,40%)', //#666666
                    700: 'hsl(220deg,10%,30%)', //#4d4d4d
                    800: 'hsl(220deg,10%,20%)', //#333333
                    900: 'hsl(220deg,10%,10%)', //#1a1a1a
                },
            },

            boxShadow: {
                left: '-1px 0px 3px 0px rgba(0,0,0,0.1), -1px 0px 2px -1px rgb(0,0,0,0.1)',
            },
            spacing: {
                'nav-height': '60px',
                'after-nav': 'calc( 100vh - 60px )',
            },
        },
    },
    plugins: [],
}

// If there's an element over an element transition by 100, if you're adding an effect: hover, active, transition by 50

// in light mode you can have a white element over a white background cause you can give borders and shadows and that will provide the necessary elevation
// but in dark borders just create a box and shadows are invisible so

// i'm still debating if i should use low opacity black and white or should i use grays
// i think lower opacity blacks and whites should be a better option cause then they won't look ugly if i change the theme colors, or implement a color in place of gray-900 for dark
// i need to figure out what i should do for hover of eleements which do not have a distinct background

// in light mode you can make elements which use white
// but in dark mode you won't make elements which use black
// if white comes inside of the theme color then it can be absolute white

// okay decided hover gets a shift by 5 and active gets a shift by 10
// these colors are not directly defined as grays but as different opacities of gray-900 and gray-100

// in the nav menu text got a tint of primary color when active by use of primary light and primary dark

// opaque backgrounds get an opaque border gray-100 gray-900,
// translucent backgrounds get a translucent border gray-BG_OF_THE_ELEMENT+-gray/20, BG_OF_THE_ELEMENT will be different in dark and light modes
// WILL THIS LATER FOR THE DRAWER
