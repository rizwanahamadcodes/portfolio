import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import WorkAroundThemeProvider from "./WorkAroundThemeProvider";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import NavbarWithObserver from "@/components/Navbar/NavbarWithObserver";
import Footer from "@/components/Footer/Footer";

const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-montserrat",
});

export const metadata: Metadata = {
    title: "Rizwan",
    description: "Rizwan is a frontend developer",
};

type RootLayoutProps = {
    children: React.ReactNode;
};

export default function RootLayout(props: RootLayoutProps) {
    const { children } = props;

    return (
        <html lang="en">
            <body
                className={`${montserrat.variable} flex h-screen flex-col font-sans`}>
                <WorkAroundThemeProvider>
                    <NavbarWithObserver />
                    {children}
                    <Footer />
                </WorkAroundThemeProvider>
            </body>
        </html>
    );
}
