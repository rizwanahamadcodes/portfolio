import { IconType } from 'react-icons/lib'

interface ButtonProps extends React.HTMLProps<HTMLAnchorElement> {
    children: React.ReactNode
    colorScheme?: string
    type?: 'solid' | 'outline' | 'ghost'
    href?: string
    className?: string
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
        className,
        ...rest
    } = props

    const borderWidth = 'border-2'
    const colorSchemeMap: {
        [key: string]: { [key: string]: string }
    } = {
        primary: {
            solid: 'bg-primary hover:bg-primary-600 ',
            outline: `${borderWidth} hover:text-primary-600 hover:border-primary-600 border-primary text-primary`,
            ghost: 'text-primary hover:text-primary-600',
        },
        'primary-support': {
            solid: 'bg-primary-support hover:bg-primary-support-600',
            outline: `${borderWidth} hover:border-primary-support-600 border-primary-support text-primary-support hover:text-primary-support-600`,
            ghost: 'text-primary-support hover:text-primary-support-600',
        },
        secondary: {
            solid: 'bg-secondary hover:bg-secondary-600 ',
            outline: `${borderWidth} hover:border-secondary-600 border-secondary text-secondary hover:text-secondary-600`,
            ghost: 'text-secondary hover:text-secondary-600',
        },

        'secondary-support': {
            solid: 'bg-secondary-support hover:bg-secondary-support-600',
            outline: `${borderWidth} hover:border-secondary-support-600 border-secondary-support text-secondary-support hover:text-secondary-support-600`,
            ghost: 'text-secondary-support hover:text-secondary-support-600',
        },
        gray: {
            solid: 'bg-gray-800 hover:bg-gray-900 dark:bg-gray-100 dark:hover:bg-gray-200 dark:text-gray-900 dark:font-bold',
            outline: `${borderWidth} dark:border-gray-100 dark:text-gray-100 dark:hover:border-gray-200 dark:hover:text-gray-200 border-gray-800 hover:border-gray-900 text-gray-800 hover:text-gray-900`,
            ghost: 'dark:text-gray-100 dark:hover:text-gray-200 text-gray-800 hover:text-gray-900',
        },
        'primary-gradient': {
            solid: 'bg-gradient-to-r from-primary to-primary-support bg-[length:100%_100%] hover:bg-[length:200%_100%] bg-left',
            outline: `${borderWidth} hover:border-primary-600 border-primary text-primary hover:text-primary-600`,
            ghost: 'text-primary hover:text-primary-600',
        },

        'secondary-gradient': {
            solid: 'bg-gradient-to-r from-secondary to-secondary-support bg-[length:100%_100%] hover:bg-[length:200%_100%] bg-left',
            outline: `${borderWidth} hover:border-secondary-600 border-secondary text-secondary hover:text-secondary-600`,
            ghost: 'text-secondary hover:text-secondary-600',
        },
    }

    const validColorSchemes = Object.keys(colorSchemeMap)
    const validTypes = ['solid', 'outline', 'ghost']

    const resolvedColorScheme = validColorSchemes.includes(colorScheme)
        ? colorScheme
        : 'primary'
    const resolvedType = validTypes.includes(type) ? type : 'solid'

    const buttonClasses = `flex justify-center gap-3 h-10 items-center rounded-full px-5 ${
        type === 'solid' ? 'font-medium' : 'font-[700]'
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
                <a
                    href={href}
                    className={buttonClasses + ' ' + className}
                    {...rest}
                >
                    {content}
                </a>
            ) : (
                <button className={buttonClasses + ' ' + className}>
                    {content}
                </button>
            )}
        </>
    )
}

export default Button
