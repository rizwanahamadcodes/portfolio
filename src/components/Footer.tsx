import React, { HTMLProps, ReactElement } from 'react'
import Section from './Section'
import RizwanLogo from './RizwanLogo'
import Link from 'next/link'
import { IconType } from 'react-icons/lib'
import { SiGmail } from 'react-icons/si'
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs'
import { FaPhoneAlt } from 'react-icons/fa'
import Container from './Container'
import cn from './utils/cn'

const footerLinks = [
    {
        label: 'Home',
        href: '/',
        icon: '',
    },
    {
        label: 'About me',
        href: '/about-me',
        icon: '',
    },

    {
        label: 'Projects',
        href: '/projects',
        icon: '',
    },
    {
        label: 'Contact me',
        href: '/contact-me',
        icon: '',
    },
]

const socialLinks = [
    {
        label: 'Facebook',
        href: 'https://www.facebook.com/profile.php?id=100047043491338',
        icon: BsFacebook,
    },
    {
        label: 'Instagram',
        href: 'https://www.instagram.com/rizwan29972/',
        icon: BsInstagram,
    },
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/',
        icon: BsLinkedin,
    },
    {
        label: 'Github',
        href: 'https://github.com/rizwanahamadcodes',
        icon: BsGithub,
    },
]
const FooterContactLinks = [
    {
        label: 'rizwanahamadcodes@gmail',
        href: 'mailto:rizwanahamadcodes@gmail.com',
        icon: SiGmail,
    },
]

const Footer = () => {
    return (
        <footer>
            <Section className="pb-0">
                <Container className="mb-6 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
                    <FooterColumn>
                        <FooterColumnTitle>
                            <RizwanLogo variant="blackandwhite" />
                        </FooterColumnTitle>
                        <FooterColumnBody>
                            <p>
                                Feel free to get in touch for your projects.
                                Looking forward to hearing from you.
                            </p>
                        </FooterColumnBody>
                    </FooterColumn>

                    <FooterColumn>
                        <FooterColumnTitle>Browse</FooterColumnTitle>
                        <FooterColumnBody>
                            <FooterColumnLinks links={footerLinks} />
                        </FooterColumnBody>
                    </FooterColumn>

                    <FooterColumn>
                        <FooterColumnTitle>Socials</FooterColumnTitle>
                        <FooterColumnBody>
                            <FooterColumnLinks links={socialLinks} />
                        </FooterColumnBody>
                    </FooterColumn>

                    <FooterColumn>
                        <FooterColumnTitle>Contact</FooterColumnTitle>
                        <FooterColumnBody>
                            <FooterColumnLinks links={FooterContactLinks} />
                        </FooterColumnBody>
                    </FooterColumn>
                </Container>
                <p className="bg-gray-50 py-4 text-center dark:bg-gray-800">
                    Copyright
                </p>
            </Section>
        </footer>
    )
}

export const HorizontalDivider = (
    props: React.ComponentPropsWithoutRef<'div'>
) => {
    const { className } = props
    return (
        <div
            className={cn(
                'h-0.5 w-full bg-gray-200 dark:bg-gray-800',
                className
            )}
        ></div>
    )
}

type FooterColumnProps = {
    children: React.ReactNode
}
const FooterColumn = (props: FooterColumnProps) => {
    const { children } = props

    return <div className="flex flex-col gap-4">{children}</div>
}

type FooterColumnTitleProps = {
    children: React.ReactNode
}
const FooterColumnTitle = (props: FooterColumnTitleProps) => {
    const { children } = props

    return <div className="font-semibold uppercase">{children}</div>
}

type FooterColumnBodyProps = {
    children: React.ReactNode
}
const FooterColumnBody = (props: FooterColumnBodyProps) => {
    const { children } = props

    return <div>{children}</div>
}

type FooterLinkType = {
    label: string
    href: string
    icon: string | IconType
}
type FooterColumnLinksProps = {
    links: FooterLinkType[]
}
const FooterColumnLinks = (props: FooterColumnLinksProps) => {
    const { links } = props

    return (
        <ul className="flex flex-col gap-2">
            {links.map((link) => {
                const { icon: Icon } = link

                return (
                    <li key={link.href} className="flex gap-2">
                        {typeof Icon === 'string' ? null : (
                            <Icon className="text-xl" />
                        )}
                        <Link href={link.href}>{link.label}</Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default Footer
