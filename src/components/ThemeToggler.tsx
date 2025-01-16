'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { IoIosMoon, IoIosSunny } from 'react-icons/io'

interface ThemeTogglerProps {
    customClasses?: string
}

const ThemeToggler: React.FC<ThemeTogglerProps> = ({ customClasses }) => {
    const [mounted, setMounted] = useState(false)
    const { theme, resolvedTheme, setTheme } = useTheme()
    const [checked, setChecked] = useState(resolvedTheme === 'dark')

    const onThemeTogglerChange = () => {
        setTheme(resolvedTheme == 'dark' ? 'light' : 'dark')
    }

    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        setChecked(resolvedTheme === 'dark')
    }, [resolvedTheme])

    if (!mounted) {
        return null
    }

    return (
        <label
            htmlFor="theme-toggle-checkbox"
            className={`relative block w-16 cursor-pointer select-none rounded-full shadow ${customClasses}`}
        >
            <input
                type="checkbox"
                id="theme-toggle-checkbox"
                className="peer/themeToggler absolute h-0 w-0 opacity-0"
                checked={checked}
                onChange={onThemeTogglerChange}
            />

            <div className="flex h-8 w-16 items-center justify-between rounded-full bg-primary p-2 peer-checked/themeToggler:bg-white">
                <IoIosSunny className="text-xl text-white peer-checked/themeToggler:text-primary-darker dark:text-darkmodesubstitute-white" />
                <IoIosMoon className="text-xl text-white peer-checked/themeToggler:text-primary-darker dark:text-darkmodesubstitute-white" />
            </div>
            <div className="absolute right-1 top-1 h-6 w-6 rounded-full bg-white transition-all peer-checked/themeToggler:right-9 peer-checked/themeToggler:bg-primary-darker"></div>
        </label>
    )
}

export default ThemeToggler
