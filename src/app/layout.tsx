import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "@next/font/google";
import WorkaroundThemeProvider from "./WorkaroundThemeProvider";
import Header from "./Header";

const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" });

export const metadata: Metadata = {
    title: "Rizwan Ahamad",
    description: "Rizwan is a frontend developer",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <WorkaroundThemeProvider>
                <body className={`${nunito.variable} font-sans`}>
                    <Header />

                    {children}
                </body>
            </WorkaroundThemeProvider>
        </html>
    );
}
