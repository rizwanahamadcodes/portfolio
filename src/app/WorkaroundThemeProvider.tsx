'use client'
import { ThemeProvider } from 'next-themes'
import React, { useEffect, useState } from 'react'

const WorkaroundThemeProvider = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <>{children}</>
    }

    return (
        <ThemeProvider
            enableSystem={true}
            enableColorScheme={true}
            // disableTransitionOnChange
            attribute="class"
        >
            {children}
        </ThemeProvider>
    )
}

export default WorkaroundThemeProvider
