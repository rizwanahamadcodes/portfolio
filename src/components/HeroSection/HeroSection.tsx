import heroImageDark from "/public/img/hero_image_dark.svg";
import heroImageLight from "/public/img/hero_image_light.svg";
import { ImBubbles } from "react-icons/im";
import Button, { ButtonIcon, button } from "@/components/Button/Button";
import Section, {
    SectionCategoryTitle,
    SectionSubtitle,
    SectionTitle,
} from "@/components/Section/Section";
import Container from "@/components/Container/Container";
import { HiDownload } from "react-icons/hi";
import Link from "next/link";
import pathConstants from "@/route/pathConstants";
import ThemedImage from "@/components/ThemedImage";
import clsx from "clsx";

type HeroSectionProps = {};

const HeroSection = (props: HeroSectionProps) => {
    const {} = props;

    return (
        <Section className="bg-white dark:bg-gray-900 border-b border-b-gray-200 dark:border-b-gray-800 mt-navHeight-large">
            <Container className="relative flex flex-col items-center gap-4 lg:flex-row">
                <IntroSection />
                <div>
                    <ThemedImage
                        darkImageSrc={heroImageDark}
                        lightImageSrc={heroImageLight}
                        alt="Hero image"
                    />
                </div>
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
            <SectionTitle className="mb-0.5">
                Front-end Web Developer
            </SectionTitle>

            <SectionSubtitle className="max-w-[50ch]">
                I craft captivating web interfaces that blend design and
                functionality to create a pleasant user experience.
            </SectionSubtitle>
        </div>
    );
};

type GreetingLineProps = {
    className?: string;
};

const GreetingLine = (props: GreetingLineProps) => {
    const { className } = props;

    return (
        <h1
            className={clsx(
                "text-3.75 leading-1 w-full font-medium sm:text-4.5 xl:text-5.5",
                className
            )}>
            <div>Hi,</div>
            <div>
                I am
                <span className="bg-gradient-to-r from-primary to-primary-support bg-clip-text text-transparent">
                    {" "}
                    Rizwan
                </span>
            </div>
        </h1>
    );
};

type CTAProps = {
    className?: string;
};

export const CTA = (props: CTAProps) => {
    const { className } = props;

    return (
        <div
            className={clsx(
                "flex w-full flex-col gap-1 sm:flex-row",
                className
            )}>
            <Link
                href={pathConstants.contact.path}
                className={button({ className: "w-full" })}>
                <ButtonIcon icon={ImBubbles} />
                Contact Me
            </Link>
            <a
                download
                href={"/Rizwan_Ahamad_CV.pdf"}
                className={button({
                    variant: "outline",
                    colorScheme: "themed-gray",
                    className: "w-full",
                })}>
                <ButtonIcon icon={HiDownload} />
                Download CV
            </a>
        </div>
    );
};

export default HeroSection;
