import { ButtonIcon, button } from "@/components/Button/Button";
import Container from "@/components/Container/Container";
import Section, { SectionSubtitle, SectionTitle } from "@/components/Section/Section";
import ThemedImage from "@/components/ThemedImage";
import pathConstants from "@/route/pathConstants";
import clsx from "clsx";
import { motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { HiDownload } from "react-icons/hi";
import { ImBubbles } from "react-icons/im";

type HeroSectionProps = {};

const HeroSection = (props: HeroSectionProps) => {
    const {} = props;

    return (
        <Section className="bg-white dark:bg-gray-900 border-b border-b-gray-200 dark:border-b-gray-800 mt-nav-height-large">
            <Container className="relative grid grid-cols-1 lg:grid-cols-[1fr_auto] items-center gap-4 lg:flex-row">
                <IntroSection />
                <ThemedImage darkImageSrc={"/img/hero_image_dark.svg"} lightImageSrc={"img/hero_image_light.svg"} height={0} width={400} alt="Hero image" className="absolute object-contain object-right-top lg:relative h-4.5 sm:h-6.5 md:h-10 lg:h-18 top-0 right-0" />
            </Container>
        </Section>
    );
};

type IntroSectionProps = {};

export const IntroSection = (props: IntroSectionProps) => {
    const {} = props;

    return (
        <div className="w-full">
            <GreetingLine className="mb-1" />
            <IntroLine className="mb-1.5" />
            <CTA />
        </div>
    );
};

type IntroLineProps = {
    className?: string;
};

export const IntroLine = (props: IntroLineProps) => {
    const { className } = props;

    return (
        <div className={clsx(className)}>
            <SectionTitle className="mb-0.5">Front-end Web Developer</SectionTitle>

            <SectionSubtitle className="max-w-[50ch]">I craft captivating web interfaces that blend design and functionality to create a pleasant user experience.</SectionSubtitle>
        </div>
    );
};

type GreetingLineProps = {
    className?: string;
};

const GreetingLine = (props: GreetingLineProps) => {
    const { className } = props;

    return (
        <h1 className={clsx("text-3.75 leading-1 w-full font-medium sm:text-4.5 xl:text-5.5", className)}>
            <div>Hi,</div>
            <div>
                I am
                <span className="bg-linear-to-r from-primary to-primary-support bg-clip-text text-transparent"> Rizwan</span>
            </div>
        </h1>
    );
};

type CTAProps = {
    className?: string;
};

export const CTA = (props: CTAProps) => {
    const { className } = props;

    const [hoveredItem, setHoveredItem] = useState<string | null>(null);

    return (
        <div className={clsx("flex w-full flex-col sm:flex-row", className)} onMouseLeave={() => setHoveredItem(null)}>
            {/* Contact Button */}
            <div className="w-full p-0.375  relative" onMouseEnter={() => setHoveredItem("contact")}>
                {hoveredItem === "contact" && (
                    <motion.div
                        layoutId={`cta-buttons`}
                        className="absolute h-full w-full bg-black/[0.075] dark:bg-white/[0.075] top-0 left-0 rounded-full pointer-events-none z-1 shadow-lg"
                        transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 30,
                        }}
                    />
                )}
                <Link href={pathConstants.contact.path} className={button({ className: "w-full relative z-2" })}>
                    <ButtonIcon icon={ImBubbles} />
                    Contact Me
                </Link>
            </div>

            {/* Download CV Button */}
            <div className="w-full p-0.375  relative" onMouseEnter={() => setHoveredItem("download")}>
                {hoveredItem === "download" && (
                    <motion.div
                        layoutId={`cta-buttons`}
                        className="absolute h-full w-full bg-black/[0.075] dark:bg-white/[0.075] top-0 left-0 rounded-full pointer-events-none z-1 shadow-lg"
                        transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 30,
                        }}
                    />
                )}
                <a
                    download
                    href={"/Rizwan_Ahamad_CV.pdf"}
                    className={button({
                        variant: "solid",
                        colorScheme: "themed-gray-light",
                        className: "w-full relative z-2",
                    })}>
                    <ButtonIcon icon={HiDownload} />
                    Download CV
                </a>
            </div>
        </div>
    );
};

export default HeroSection;
