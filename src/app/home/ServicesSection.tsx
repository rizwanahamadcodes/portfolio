import Container from '@/components/Container'
import Section, {
    SectionSubtitle,
    SectionTitle,
    SectionCategoryTitle,
} from '@/components/Section'
import { AiOutlineThunderbolt } from 'react-icons/ai'
import { MdDevices } from 'react-icons/md'
import { GiResize } from 'react-icons/gi'
import React from 'react'
import { IconType } from 'react-icons'

const services = [
    {
        title: 'Fast',
        icon: AiOutlineThunderbolt,
        desc: 'Made with best practise in mind, the websites perform as well as they are supposed to',
    },
    {
        title: 'Responsive',
        icon: MdDevices,
        desc: 'Websites that are fully functional and look good on mobiles, laptops and desktops',
    },
    {
        title: 'Scalable',
        icon: GiResize,
        desc: 'Built with modular components such that new features can easily be added when necessary',
    },
]

const ServicesSection = () => {
    return (
        <Section className="bg-gray-100 dark:bg-gray-900 border-y border-y-gray-200 dark:border-y-gray-800">
            <Container className="flex flex-col items-center">
                <SectionTitle defaultBottomMargin>I make websites</SectionTitle>
                <SectionSubtitle defaultBottomMargin>that are:</SectionSubtitle>
            </Container>
            <Container className="grid grid-cols-1 gap-4 xs:grid-cols-2 md:grid-cols-3">
                {services.map((service) => {
                    const { title, icon, desc } = service
                    return (
                        <ServiceCard key={title}>
                            <ServiceIcon icon={icon} />
                            <ServiceTitle>{title}</ServiceTitle>
                            <ServiceBody>{desc}</ServiceBody>
                        </ServiceCard>
                    )
                })}
            </Container>
        </Section>
    )
}

type ServiceCardProps = {
    children: React.ReactNode
}

const ServiceCard = (props: ServiceCardProps) => {
    const { children } = props

    return (
        <div className="flex basis-full flex-col items-center rounded-lg bg-white p-6 shadow dark:bg-gray-800 ">
            {children}
        </div>
    )
}

type ServiceIcon = {
    icon: IconType
}

const ServiceIcon = (props: ServiceIcon) => {
    const { icon: Icon } = props

    return (
        <div className="mb-2 flex items-center justify-center rounded-full bg-primary bg-gradient-to-t from-primary to-primary-400 p-6 text-gray-100">
            <Icon className="text-3xl text-gray-100" />
        </div>
    )
}

type ServiceBodyProps = {
    children: React.ReactNode
}

const ServiceBody = (props: ServiceBodyProps) => {
    const { children } = props

    return <p>{children}</p>
}
type ServiceTitleProps = {
    children: React.ReactNode
}

const ServiceTitle = (props: ServiceTitleProps) => {
    const { children } = props

    return (
        <SectionCategoryTitle className="mb-4">{children}</SectionCategoryTitle>
    )
}

export default ServicesSection
