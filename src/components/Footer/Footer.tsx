import React, { HTMLProps, ReactElement } from "react";
import Section from "@/components/Section/Section";
import RizwanLogo from "@/components/RizwanLogo";
import Link from "next/link";
import { IconType } from "react-icons/lib";
import { SiGmail } from "react-icons/si";
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import Container from "@/components/Container/Container";
import FooterCopyright from "@/components/Footer/FooterCopyright";
import clsx from "clsx";

const footerLinks = [
    {
        label: "Home",
        href: "/",
        icon: "",
    },
    {
        label: "About me",
        href: "/about-me",
        icon: "",
    },

    {
        label: "Projects",
        href: "/projects",
        icon: "",
    },
    {
        label: "Contact me",
        href: "/contact-me",
        icon: "",
    },
];

const socialLinks = [
    {
        label: "Facebook",
        href: "https://www.facebook.com/profile.php?id=100047043491338",
        icon: BsFacebook,
    },
    {
        label: "Instagram",
        href: "https://www.instagram.com/rizwan29972/",
        icon: BsInstagram,
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/",
        icon: BsLinkedin,
    },
    {
        label: "Github",
        href: "https://github.com/rizwanahamadcodes",
        icon: BsGithub,
    },
];
const FooterContactLinks = [
    {
        label: "rizwanahamadcodes@gmail.com",
        href: "mailto:rizwanahamadcodes@gmail.com",
        icon: SiGmail,
    },
];
const Footer = () => {
    return (
        <footer className="mt-auto">
            <Section className="bg-gray-100 pb-0 dark:bg-gray-900 border-b border-b-gray-200 dark:border-b-gray-800">
                <Container className="mb-1.5 grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-4">
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
                <FooterCopyright />
            </Section>
        </footer>
    );
};

export const HorizontalDivider = (
    props: React.ComponentPropsWithoutRef<"div">
) => {
    const { className } = props;
    return (
        <div
            className={clsx(
                "h-1 w-full bg-gray-200 dark:bg-gray-800",
                className
            )}></div>
    );
};

type FooterColumnProps = {
    children: React.ReactNode;
};
const FooterColumn = (props: FooterColumnProps) => {
    const { children } = props;

    return <div className="flex flex-col gap-1">{children}</div>;
};

type FooterColumnTitleProps = {
    children: React.ReactNode;
};
const FooterColumnTitle = (props: FooterColumnTitleProps) => {
    const { children } = props;

    return (
        <div className="font-medium uppercase text-gray-900 dark:text-gray-100">
            {children}
        </div>
    );
};

type FooterColumnBodyProps = {
    children: React.ReactNode;
};
const FooterColumnBody = (props: FooterColumnBodyProps) => {
    const { children } = props;

    return <div>{children}</div>;
};

type FooterLinkType = {
    label: string;
    href: string;
    icon: string | IconType;
};
type FooterColumnLinksProps = {
    links: FooterLinkType[];
};
const FooterColumnLinks = (props: FooterColumnLinksProps) => {
    const { links } = props;

    return (
        <ul className="flex flex-col gap-0.5">
            {links.map((link) => {
                const { icon: Icon } = link;

                return (
                    <li key={link.href} className="group/footerLinkGroup">
                        <Link
                            className="flex gap-0.5 text-gray-700 dark:text-gray-300 hover:text-gray-900 hover:dark:text-gray-100"
                            href={link.href}>
                            {typeof Icon === "string" ? null : (
                                <Icon className="text-1.25 text-gray-700 shrink-0 dark:text-gray-300 group-hover/footerLinkGroup:text-gray-900 group-hover/footerLinkGroup:dark:text-gray-100" />
                            )}
                            <p className="whitespace-nowrap overflow-hidden overflow-ellipsis">
                                {link.label}
                            </p>
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default Footer;
