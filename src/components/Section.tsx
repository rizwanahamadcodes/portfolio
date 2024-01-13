import React, { useContext } from 'react'
import cn from './utils/cn'

type SectionProps = {
    children?: React.ReactNode
    className?: string
}

const Section = (props: SectionProps) => {
    const { children, className } = props

    return <section className={cn('py-8', className)}>{children}</section>
}

export default Section

const headingColorClasses = ''

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
                'text-2xl font-medium text-primary dark:text-primary sm:text-4xl',
                defaultBottomMargin && 'mb-2',
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
        <p className={cn('text-lg', defaultBottomMargin && 'mb-8', className)}>
            {children}
        </p>
    )
}

type SectionCategoryTitleProps = {
    className?: string
    children?: React.ReactNode
    defaultBottomMargin?: boolean
}

export const SectionCategoryTitle = (props: SectionCategoryTitleProps) => {
    const { children, defaultBottomMargin, className } = props

    return (
        <h5
            className={cn(
                defaultBottomMargin && 'mb-4',
                'text-xl font-medium text-gray-900 dark:text-gray-100 sm:text-2xl',
                className
            )}
        >
            {children}
        </h5>
    )
}
