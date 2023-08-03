import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import WorkaroundThemeProvider from "./WorkaroundThemeProvider";

const inter = Inter({ subsets: ["latin"] });

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
                <body className={inter.className}>
                    {/* <Navbar /> */}
                    <h1 className="pt-5 bg-blend-darken text-left mr-10 "></h1>
                    {children}
                </body>
            </WorkaroundThemeProvider>
        </html>
    );
}
