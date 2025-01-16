import React from 'react'
import cn from './utils/cn'

type SectionProps = {
    children?: React.ReactNode
    className?: string
}

const Section = (props: SectionProps) => {
    const { children, className } = props

    return <section className={cn('py-10', className)}>{children}</section>
}

export default Section

const headingColorClasses = 'text-primary dark:text-primary font-medium'

type SectionTitleProps = {
    className?: string
    children?: React.ReactNode
    defaultBottomMargin?: boolean
}

export const SectionTitle = (props: SectionTitleProps) => {
    const { children, className, defaultBottomMargin = false } = props

    return (
        <h2
            className={cn(
                'text-2xl font-medium sm:text-3xl',
                defaultBottomMargin && 'mb-8',
                headingColorClasses,
                className
            )}
        >
            {children}
        </h2>
    )
}

type SectionSubtitleProps = {
    className?: string
    children?: React.ReactNode
    defaultBottomMargin?: boolean
}

export const SectionSubtitle = (props: SectionSubtitleProps) => {
    const { children, className, defaultBottomMargin } = props

    return (
        <h3
            className={cn(
                'sm:xl text-lg font-medium',
                defaultBottomMargin && 'mb-8',
                className
            )}
        >
            {children}
        </h3>
    )
}

type SectionCategoryTitleProps = {
    className?: string
    children?: React.ReactNode
}

export const SectionCategoryTitle = (props: SectionCategoryTitleProps) => {
    const { children, className } = props

    return (
        <h5
            className={cn(
                'mb-4',
                headingColorClasses,
                'text-gray-900 dark:text-gray-100',
                className
            )}
        >
            {children}
        </h5>
    )
}
