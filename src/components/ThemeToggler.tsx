'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { IoIosMoon, IoIosSunny } from 'react-icons/io'
import cn from './utils/cn'

const ThemeToggler = (props: React.HTMLProps<HTMLLabelElement>) => {
    const { className } = props

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

    const iconClasses =
        'text-xl text-white peer-checked/themeToggler:text-gray-900 dark:text-gray-900'
    return (
        <label
            htmlFor="theme-toggle-checkbox"
            className={cn(
                'relative block w-16 cursor-pointer select-none rounded-full shadow',
                className
            )}
        >
            <input
                type="checkbox"
                id="theme-toggle-checkbox"
                className="peer/themeToggler absolute h-0 w-0 opacity-0"
                checked={checked}
                onChange={onThemeTogglerChange}
            />

            <div className="flex h-8 w-16 items-center justify-between rounded-full bg-primary p-2 peer-checked/themeToggler:bg-gray-100">
                <IoIosSunny className={iconClasses} />
                <IoIosMoon className={iconClasses} />
            </div>
            <div className="absolute right-1 top-1 h-6 w-6 rounded-full bg-white transition-all peer-checked/themeToggler:right-9 peer-checked/themeToggler:bg-gray-900"></div>
        </label>
    )
}

export default ThemeToggler
