import Link, { LinkProps } from 'next/link'
import cn from './utils/cn'
import { IconType } from 'react-icons/lib'

type Colors =
    | 'primary'
    | 'primary-400'
    | 'primary-support'
    | 'primary-support-400'
    | 'secondary'
    | 'secondary-support'
    | 'gray'

type BaseButtonProps<ComponentType> = ComponentType & {
    children: React.ReactNode
    className?: string
    colorScheme?: Colors | { from: Colors; to: Colors }
    btnType?: 'solid' | 'outline' | 'ghost'
}

type ButtonWrapperProps = (
    | BaseButtonProps<LinkProps>
    | BaseButtonProps<React.ComponentPropsWithoutRef<'a'>>
    | BaseButtonProps<React.ComponentPropsWithoutRef<'button'>>
) & {
    component: React.ElementType
}

const ButtonWrapper = (props: ButtonWrapperProps) => {
    const {
        children,
        className,
        colorScheme = 'primary',
        btnType = 'solid',
        component: Component,
        ...otherProps
    } = props

    const completeButtonClasses = getButtonStyles(
        className,
        colorScheme,
        btnType
    )

    return (
        <Component className={completeButtonClasses} {...otherProps}>
            {children}
        </Component>
    )
}

type ButtonProps = BaseButtonProps<React.ComponentPropsWithoutRef<'button'>>

const Button = (props: ButtonProps) => {
    const { children, ...otherProps } = props

    return (
        <ButtonWrapper component="button" {...otherProps}>
            {children}
        </ButtonWrapper>
    )
}

type AnchorButtonProps = BaseButtonProps<React.ComponentPropsWithoutRef<'a'>>

export const AnchorButton = (props: AnchorButtonProps) => {
    const { children, ...otherProps } = props

    return (
        <ButtonWrapper component="a" {...otherProps}>
            {children}
        </ButtonWrapper>
    )
}

type NextJsLinkButtonProps = BaseButtonProps<LinkProps>

export const NextJsLinkButton = (props: NextJsLinkButtonProps) => {
    const { children, ...otherProps } = props

    return (
        <ButtonWrapper component={Link} {...otherProps}>
            {children}
        </ButtonWrapper>
    )
}

type ButtonIconProps = {
    className?: string
    icon: IconType
}
export const ButtonIcon = (props: ButtonIconProps) => {
    const { className, icon: Icon } = props

    return <Icon className={cn('text-xl', className)} />
}
type getButtonStyles = (
    className?: string,
    colorScheme?: Colors | { from: Colors; to: Colors },
    btnType?: 'solid' | 'outline' | 'ghost'
) => string

export const getButtonStyles: getButtonStyles = (
    className,
    colorScheme = 'primary',
    btnType = 'solid'
) => {
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
        gray: 'bg-gray-800 hover:bg-gray-900 dark:bg-gray-100 dark:hover:bg-gray-200 dark:text-gray-900',
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
            'primary-400': 'to-primary-400',
            'primary-support-400': 'to-primary-support-400',
            secondary: 'to-secondary',
            'secondary-support': 'to-secondary-support',
        },
    }

    const commonButtonClasses =
        'flex justify-center !text-100 gap-3 h-12 items-center rounded-full px-5 tracking-widest text-gray-100 active:scale-[0.98] font-medium shadow-lg'

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
        'border-2',
        outlineColorMap[resolvedColorScheme as keyof typeof outlineColorMap]
    )
    const ghostButtonClasses = cn(
        '',
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
    return completeButtonClasses
}

export default Button
