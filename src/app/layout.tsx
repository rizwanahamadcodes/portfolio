import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from '@next/font/google'
import WorkaroundThemeProvider from './WorkaroundThemeProvider'
import Navbar from '@/components/Navbar'

const nunito = Nunito({ subsets: ['latin'], variable: '--font-nunito' })

export const metadata: Metadata = {
    title: 'Rizwan',
    description: 'Rizwan is a frontend developer',
}

interface RootLayoutProps {
    children: React.ReactNode
}

export default function RootLayout(props: RootLayoutProps) {
    const { children } = props

    return (
        <html lang="en">
            <body className={`${nunito.variable} font-sans`}>
                <WorkaroundThemeProvider>
                    <Navbar />
                    {children}
                </WorkaroundThemeProvider>
            </body>
        </html>
    )
}
