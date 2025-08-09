import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
    mode: "jit",
    content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],

    darkMode: "class",

    theme: {
        spacing: () => {
            const spacing: {
                [key: string]: string;
            } = {};

            for (let i = 0; i <= 3; i += 0.125) {
                spacing[i] = `${i}rem`;
            }
            for (let i = 1; i <= 25; i += 0.25) {
                spacing[i] = `${i}rem`;
            }

            spacing["navHeight-large"] = "5rem";
            spacing["navHeight-small"] = "4rem";

            return spacing;
        },
        borderRadius: () => {
            const borderRadius: {
                [key: string]: string;
            } = {};

            for (let i = 0; i <= 1; i += 0.125) {
                borderRadius[i] = `${i}rem`;
            }
            for (let i = 1; i <= 3; i += 0.25) {
                borderRadius[i] = `${i}rem`;
            }

            borderRadius["none"] = `0`;
            borderRadius["full"] = `9999px`;

            return borderRadius;
        },
        fontSize: () => {
            const fontSize: {
                [key: string]: string;
            } = {};

            for (let i = 0; i <= 2; i += 0.125) {
                fontSize[i] = `${i}rem`;
            }

            for (let i = 2; i <= 10; i += 0.25) {
                fontSize[i] = `${i}rem`;
            }

            return fontSize;
        },
        lineHeight: () => {
            const lineHeight: {
                [key: string]: string;
            } = {};

            for (let i = 0; i <= 5; i += 0.125) {
                lineHeight[i] = `${i}`;
            }

            return lineHeight;
        },
        colors: {
            primary: {
                50: "hsl(220deg, 80%, 95%)",
                100: "hsl(220deg, 80%, 90%)",
                200: "hsl(220deg, 80%, 80%)",
                300: "hsl(220deg, 80%, 70%)",
                400: "hsl(220deg, 80%, 60%)",
                DEFAULT: "hsl(220deg,80%,50%)",
                600: "hsl(220deg,80%,40%)",
                700: "hsl(220deg,80%,30%)",
                800: "hsl(220deg,80%,20%)",
                900: "hsl(220deg,80%,10%)",
                950: "hsl(220deg,80%,5%)",

                support: {
                    50: "hsl(260deg, 80%, 95%)",
                    100: "hsl(260deg, 80%, 90%)",
                    200: "hsl(260deg, 80%, 80%)",
                    300: "hsl(260deg, 80%, 70%)",
                    400: "hsl(260deg, 80%, 60%)",
                    DEFAULT: "hsl(260deg,80%,50%)",
                    600: "hsl(260deg,80%,40%)",
                    700: "hsl(260deg,80%,30%)",
                    800: "hsl(260deg,80%,20%)",
                    900: "hsl(260deg,80%,10%)",
                    950: "hsl(260deg,80%,5%)",
                },
            },

            secondary: {
                50: "hsl(0deg,100%, 95%)",
                100: "hsl(0deg,100%, 90%)",
                200: "hsl(0deg,100%, 80%)",
                300: "hsl(0deg,100%, 70%)",
                400: "hsl(0deg,100%, 60%)",
                DEFAULT: "hsl(0deg,100%,50%)",
                600: "hsl(0deg,100%,40%)",
                700: "hsl(0deg,100%,30%)",
                800: "hsl(0deg,100%,20%)",
                900: "hsl(0deg,100%,10%)",
                950: "hsl(0deg,100%,5%)",

                support: {
                    50: "hsl(40deg, 100%, 95%)",
                    100: "hsl(40deg, 100%, 90%)",
                    200: "hsl(40deg, 100%, 80%)",
                    300: "hsl(40deg, 100%, 70%)",
                    400: "hsl(40deg, 100%, 60%)",
                    DEFAULT: "hsl(40deg,100%,50%)",
                    600: "hsl(40deg,100%,40%)",
                    700: "hsl(40deg,100%,30%)",
                    800: "hsl(40deg,100%,20%)",
                    900: "hsl(40deg,100%,10%)",
                    950: "hsl(40deg,100%,5%)",
                },
            },

            gray: {
                50: "hsl(220deg, 10%, 95%)",
                100: "hsl(220deg, 10%, 90%)",
                150: "hsl(220deg, 10%, 85%)",
                200: "hsl(220deg, 10%, 80%)",
                250: "hsl(220deg, 10%, 75%)",
                300: "hsl(220deg, 10%, 70%)",
                350: "hsl(220deg, 10%, 65%)",
                400: "hsl(220deg, 10%, 60%)",
                450: "hsl(220deg, 10%, 55%)",
                500: "hsl(220deg, 10%, 50%)",
                550: "hsl(220deg, 10%, 45%)",
                600: "hsl(220deg, 10%, 40%)",
                650: "hsl(220deg, 10%, 35%)",
                700: "hsl(220deg, 10%, 30%)",
                750: "hsl(220deg, 10%, 25%)",
                800: "hsl(220deg, 10%, 20%)",
                850: "hsl(220deg, 10%, 15%)",
                900: "hsl(220deg, 10%, 10%)",
                950: "hsl(220deg, 10%, 5%)",
            },
            black: "#000",
            white: "#fff",
            transparent: "transparent",
        },

        extend: {
            screens: {
                xs: "480px",
            },
            fontFamily: {
                sans: ["var(--font-montserrat)", ...defaultTheme.fontFamily.sans],
            },
            minHeight: () => {
                const minHeight: {
                    [key: string]: string;
                } = {};

                for (let i = 0; i <= 3; i += 0.125) {
                    minHeight[i] = `${i}rem`;
                }
                for (let i = 1; i <= 25; i += 0.25) {
                    minHeight[i] = `${i}rem`;
                }

                minHeight["0"] = "0";
                minHeight["navHeight"] = "5rem";

                return minHeight;
            },
            minWidth: () => {
                const minWidth: {
                    [key: string]: string;
                } = {};

                for (let i = 0; i <= 3; i += 0.125) {
                    minWidth[i] = `${i}rem`;
                }
                for (let i = 1; i <= 25; i += 0.25) {
                    minWidth[i] = `${i}rem`;
                }

                minWidth["0"] = "0";
                minWidth["navHeight"] = "5rem";

                return minWidth;
            },
            backgroundImage: {
                "radial-gradient": "radial-gradient(var(--tw-gradient-stops))",
            },
            animation: {
                "spin-clockwise": "spin-clockwise 15s linear infinite",
                "spin-anticlockwise": "spin-anticlockwise 15s linear infinite",
                ripple: "ripple var(--duration, 2s) ease calc(var(--i, 0) * 0.2s) infinite",
            },
            keyframes: {
                ripple: {
                    "0%": {
                        transform: "translate(-50%, -50%) scale(1)",
                    },
                    "100%": {
                        transform: "translate(-50%, -50%) scale(1)",
                    },
                    "50%": {
                        transform: "translate(-50%, -50%) scale(1.2)",
                    },
                },

                "spin-clockwise": {
                    from: { transform: "rotate(0deg)" },
                    to: { transform: "rotate(360deg)" },
                },
                "spin-anticlockwise": {
                    from: { transform: "rotate(0deg)" },
                    to: { transform: "rotate(-360deg)" },
                },
            },
            boxShadow: {
                left: "-1px 0px 3px 0px rgba(0,0,0,0.05), -1px 0px 2px -1px rgb(0,0,0,0.05)",
            },
        },
    },
    plugins: [],
};
export default config;
