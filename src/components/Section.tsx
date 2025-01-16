import React from 'react'
import cn from './utils/cn'
import { title } from 'process'
import Container from './Container'

type SectionProps = {
    children?: React.ReactNode
    sectionClassName?: string
    containerClassName?: string
    title?: string
    subtitle?: string
}

const Section: React.FC<SectionProps> = (props) => {
    const { title, subtitle, children, sectionClassName, containerClassName } =
        props

    return (
        <section className={cn('py-10', sectionClassName)}>
            {title != undefined ? (
                <Container className="mb-8 text-center">
                    <SectionTitle>{title}</SectionTitle>
                    <SectionSubtitle>{subtitle}</SectionSubtitle>
                </Container>
            ) : (
                <></>
            )}
            <Container className={cn(containerClassName)}>{children}</Container>
        </section>
    )
}

export default Section

const headingColorClasses = 'text-primary dark:text-primary font-medium'

type SectionTitleProps = {
    className?: string
    children?: React.ReactNode
}

export const SectionTitle: React.FC<SectionTitleProps> = (props) => {
    const { children, className } = props

    return (
        <h2
            className={cn(
                'text-2xl font-medium sm:text-3xl',
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
}

export const SectionSubtitle: React.FC<SectionSubtitleProps> = (props) => {
    const { children, className } = props

    return (
        <h3 className={cn('sm:xl text-lg font-medium', className)}>
            {children}
        </h3>
    )
}

type SectionCategoryTitleProps = {
    className?: string
    children?: React.ReactNode
}

export const SectionCategoryTitle: React.FC<SectionCategoryTitleProps> = (
    props
) => {
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
