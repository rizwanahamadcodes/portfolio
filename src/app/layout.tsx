import WorkAroundThemeProvider from "./WorkaroundThemeProvider";
import Footer from "@/components/Footer/Footer";
import NavbarWithObserver from "@/components/Navbar/NavbarWithObserver";
import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

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
                <div id="modals-wrapper"></div>
            </body>
        </html>
    );
}
