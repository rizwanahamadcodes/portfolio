import './globals.css'
import type { Metadata } from 'next'
// import { Nunito } from '@next/font/google'
import { Montserrat } from '@next/font/google'
import WorkaroundThemeProvider from './WorkaroundThemeProvider'
import Navbar from '@/components/Navbar'

// const nunito = Nunito({ subsets: ['latin'], variable: '--font-nunito' })
const montserrat = Montserrat({
    subsets: ['latin'],
    variable: '--font-montserrat',
})

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
            <body className={`${montserrat.variable} font-sans`}>
                <WorkaroundThemeProvider>
                    <Navbar />
                    {children}
                </WorkaroundThemeProvider>
            </body>
        </html>
    )
}
