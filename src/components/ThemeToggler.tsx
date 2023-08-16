'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { IoIosMoon, IoIosSunny } from 'react-icons/io'

const ThemeToggler = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, resolvedTheme, setTheme } = useTheme()
    const [checked, setChecked] = useState(resolvedTheme === 'dark')

    const onThemeTogglerChange = () => {
        setChecked(!checked)

        setTheme(resolvedTheme == 'dark' ? 'light' : 'dark')
    }

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <label
            htmlFor="theme-toggle-checkbox"
            className="border-1 relative cursor-pointer select-none rounded-full shadow"
        >
            <input
                type="checkbox"
                id="theme-toggle-checkbox"
                className="peer/themeToggler absolute h-0 w-0 opacity-0"
                checked={checked}
                onChange={onThemeTogglerChange}
            />

            <div className="flex h-8 w-16 items-center justify-between rounded-full bg-white p-2 peer-checked/themeToggler:bg-primary-dark">
                <IoIosSunny className="text-xl text-primary" />
                <IoIosMoon className="text-xl text-white" />
            </div>
            <div className="absolute right-1 top-1 h-6 w-6 rounded-full bg-primary transition-all peer-checked/themeToggler:right-9 peer-checked/themeToggler:bg-white"></div>
        </label>
    )
}

export default ThemeToggler
