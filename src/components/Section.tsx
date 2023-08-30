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

        console.log(children)
        
    return (
        <section className={cn('py-10', sectionClassName)}>
            {title != undefined ? (
                <Container className="mb-8 text-center">
                    <h2 className="text-3xl font-medium text-primary dark:text-primary">
                        {title}
                    </h2>
                    <h3 className="text-xl">{subtitle}</h3>
                </Container>
            ) : (
                <></>
            )}
            <Container className={cn(containerClassName)}>{children}</Container>
        </section>
    )
}

export default Section
