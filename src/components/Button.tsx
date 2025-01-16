import Link from 'next/link'
import React from 'react'
import { IconType } from 'react-icons/lib'
interface ButtonProps {
    children: React.ReactNode
    colorScheme?: string
    type?: 'solid' | 'outline' | 'ghost'
    href?: string
    leftIcon?: IconType
    rightIcon?: IconType
}

const Button: React.FC<ButtonProps> = (props) => {
    const {
        children,
        colorScheme = 'primary',
        type = 'solid',
        href,
        leftIcon: LeftIcon,
        rightIcon: RightIcon,
    } = props

    const borderWidth = 'border-2'
    console.log(href)
    const colorSchemeMap: {
        [key: string]: { [key: string]: string }
    } = {
        primary: {
            solid: 'bg-primary hover:bg-primary-600 ',
            outline: `${borderWidth} hover:border-primary-600 border-primary text-primary`,
            ghost: '',
        },
        'primary-support': {
            solid: 'bg-primary-support hover:bg-primary-support-600',
            outline: `${borderWidth} hover:border-primary-support-600 border-primary-support text-primary-support`,
            ghost: '',
        },
        secondary: {
            solid: 'bg-secondary hover:bg-secondary-600 ',
            outline: `${borderWidth} hover:border-secondary-600 border-secondary text-secondary`,
            ghost: '',
        },

        'secondary-support': {
            solid: 'bg-secondary-support hover:bg-secondary-support-600',
            outline: `${borderWidth} hover:border-secondary-support-600 border-secondary-support text-secondary-support`,
            ghost: '',
        },
        gray: {
            solid: 'bg-gray-500 hover:bg-gray-600',
            outline: `${borderWidth} hover:border-gray-600 border-gray-500 text-gray-500`,
            ghost: '',
        },

        'dark-gray': {
            solid: 'bg-gray-900 hover:bg-black ',
            outline: `${borderWidth} hover:border-black border-gray-900 text-gray-900`,
            ghost: '',
        },
        'primary-gradient': {
            solid: 'bg-gradient-to-r from-primary to-primary-support bg-[length:100%_100%] hover:bg-[length:200%_100%] bg-left',
            outline: `${borderWidth} hover:border-primary-600 border-primary text-primary`,
            ghost: '',
        },

        'secondary-gradient': {
            solid: 'bg-gradient-to-r from-secondary to-secondary-support bg-[length:100%_100%] hover:bg-[length:200%_100%] bg-left',
            outline: `${borderWidth} hover:border-secondary-600 border-secondary text-secondary`,
            ghost: '',
        },
    }

    const validColorSchemes = Object.keys(colorSchemeMap)
    const validTypes = ['solid', 'outline', 'ghost']

    const resolvedColorScheme = validColorSchemes.includes(colorScheme)
        ? colorScheme
        : 'primary'
    const resolvedType = validTypes.includes(type) ? type : 'solid'

    const buttonClasses = `flex gap-3 h-10 items-center rounded-full px-5 ${
        type === 'outline' ? 'font-[700]' : 'font-medium'
    } uppercase tracking-widest text-gray-100 transition-all hover:shadow hover:shadow-gray-900/30 active:scale-[0.98] active:shadow active:shadow-gray-900/30 ${
        colorSchemeMap[resolvedColorScheme][resolvedType]
    }`

    const iconClasses = `text-xl`

    const content = (
        <>
            {LeftIcon ? <LeftIcon className={iconClasses} /> : ''}
            {children}
            {RightIcon ? <RightIcon className={iconClasses} /> : ''}
        </>
    )

    return (
        <>
            {href != undefined ? (
                <Link href={href} className={buttonClasses}>
                    {content}
                </Link>
            ) : (
                <button className={buttonClasses}>{content}</button>
            )}
        </>
    )
}

export default Button
