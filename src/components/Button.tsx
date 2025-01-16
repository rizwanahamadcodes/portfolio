import Link, { LinkProps } from 'next/link'
import cn from './utils/cn'
import { IconType } from 'react-icons/lib'

type Colors =
    | 'primary'
    | 'primary-support'
    | 'secondary'
    | 'secondary-support'
    | 'gray'

type NewButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode
    className?: string
    colorScheme?: Colors | { from: Colors; to: Colors }
    btnType?: 'solid' | 'outline' | 'ghost'
    leftIcon?: IconType
    rightIcon?: IconType
}

const Button: React.FC<NewButtonProps> = (props) => {
    const {
        children,
        className,
        colorScheme = 'primary',
        btnType = 'solid',
        leftIcon: LeftIcon,
        rightIcon: RightIcon,
        ...otherProps
    } = props

    const resolvedColorScheme =
        btnType != 'solid' && typeof colorScheme != 'string'
            ? colorScheme.from
            : colorScheme

    const solidColorMap = {
        primary: 'bg-primary hover:bg-primary-600',
        'primary-support': 'bg-primary-support hover:bg-primary-support-600',
        secondary: 'bg-secondary hover:bg-secondary-600',
        'secondary-support':
            'bg-secondary-support hover:bg-secondary-support-600',
        gray: 'bg-gray-800 hover:bg-gray-900 dark:bg-gray-100 dark:hover:bg-gray-200 dark:text-gray-900 dark:font-bold',
    }

    const outlineColorMap = {
        primary:
            'hover:text-primary-600 hover:border-primary-600 border-primary text-primary',
        'primary-support':
            'hover:text-primary-support-600 hover:border-primary-support-600 border-primary-support text-primary-support',
        secondary:
            'hover:text-secondary-600 hover:border-secondary-600 border-secondary text-secondary',
        'secondary-support':
            'hover:text-secondary-support-600 hover:border-secondary-support-600 border-secondary-support text-secondary-support',
        gray: 'dark:border-gray-100 dark:text-gray-100 dark:hover:border-gray-200 dark:hover:text-gray-200 border-gray-800 hover:border-gray-900 text-gray-800 hover:text-gray-900',
    }

    const ghostColorMap = {
        primary: 'hover:text-primary-600 text-primary',
        'primary-support':
            'hover:text-primary-support-600 text-primary-support',
        secondary: 'hover:text-secondary-600 text-secondary',
        'secondary-support':
            'hover:text-secondary-support-600 text-secondary-support',
        gray: 'dark:text-gray-100 dark:hover:text-gray-200 text-gray-800 hover:text-gray-900',
    }
    const gradientColorMap = {
        from: {
            primary: 'from-primary',
            'primary-support': 'from-primary-support',
            secondary: 'from-secondary',
            'secondary-support': 'from-secondary-support',
        },
        to: {
            primary: 'to-primary',
            'primary-support': 'to-primary-support',
            secondary: 'to-secondary',
            'secondary-support': 'to-secondary-support',
        },
    }

    const commonButtonClasses =
        'flex justify-center gap-3 h-10 items-center rounded-full px-5 tracking-widest transition-all hover:shadow hover:shadow-gray-900/30 active:shadow active:shadow-gray-900/30 text-gray-100 active:scale-[0.98]'

    const solidButtonClasses =
        typeof resolvedColorScheme === 'string'
            ? cn(
                  'font-medium',
                  solidColorMap[
                      resolvedColorScheme as keyof typeof solidColorMap
                  ]
              )
            : cn(
                  'bg-gradient-to-r bg-[length:100%_100%] hover:bg-[length:200%_100%] bg-left',
                  gradientColorMap.from[
                      resolvedColorScheme.from as keyof typeof gradientColorMap.from
                  ],
                  gradientColorMap.to[
                      resolvedColorScheme.to as keyof typeof gradientColorMap.to
                  ]
              )

    const outlineButtonClasses = cn(
        'font-[700] border-2',
        outlineColorMap[resolvedColorScheme as keyof typeof outlineColorMap]
    )
    const ghostButtonClasses = cn(
        'font-[700]',
        ghostColorMap[resolvedColorScheme as keyof typeof ghostColorMap]
    )

    const completeButtonClasses = cn(
        commonButtonClasses,
        {
            [solidButtonClasses]: btnType === 'solid',
            [outlineButtonClasses]: btnType === 'outline',
            [ghostButtonClasses]: btnType === 'ghost',
        },
        className
    )

    const iconClasses = `text-xl`

    const content = (
        <>
            {LeftIcon ? <LeftIcon className={iconClasses} /> : ''}
            {children}
            {RightIcon ? <RightIcon className={iconClasses} /> : ''}
        </>
    )

    return (
        <button className={completeButtonClasses} {...otherProps}>
            {content}
        </button>
    )
}

export default Button
