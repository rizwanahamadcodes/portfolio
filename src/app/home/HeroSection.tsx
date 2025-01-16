import Button from '@/components/Button'
import Section, { SectionSubtitle, SectionTitle } from '@/components/Section'
import ThemedImage from '@/components/ThemedImage'
import { ImBubbles } from 'react-icons/im'
import { HiDownload } from 'react-icons/hi'
import heroImageDark from '/public/img/hero_image_dark.svg'
import heroImageLight from '/public/img/hero_image_light.svg'
import Link from 'next/link'
import Container from '@/components/Container'

const HeroSection = () => {
    return (
        <Section>
            <Container className="flex flex-col items-center gap-12 lg:flex-row">
                <div className="w-full">
                    <div className="flex flex-col items-start gap-5">
                        <GreetingLine />

                        <SectionTitle>Front-end Web Developer</SectionTitle>
                        <SectionSubtitle className="mb-3 max-w-[50ch]">
                            I craft captivating web interfaces that blend design
                            and functionality to create a pleasant user
                            experience.
                        </SectionSubtitle>

                        <div className="flex w-full flex-col items-stretch gap-5 sm:flex-row">
                            <a
                                href="/img/hero_image_light.svg"
                                className="grow"
                                download
                            >
                                <Button
                                    leftIcon={HiDownload}
                                    colorScheme="primary"
                                    className="w-full"
                                >
                                    View CV
                                </Button>
                            </a>

                            <Link className="grow" href={'/contact-me'}>
                                <Button
                                    colorScheme="primary-support"
                                    leftIcon={ImBubbles}
                                    className="w-full"
                                >
                                    Contact Me
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div>
                    <ThemedImage
                        darkImageSrc={heroImageDark}
                        lightImageSrc={heroImageLight}
                        alt="Hero image"
                    />
                </div>
            </Container>
        </Section>
    )
}

const GreetingLine = () => {
    return (
        <h1 className="font-medium sm:text-7xl xl:text-8xl">
            <div>Hi,</div>
            <div>
                I am
                <span className="bg-gradient-to-r from-primary to-primary-support bg-clip-text text-transparent">
                    {' '}
                    Rizwan
                </span>
            </div>
        </h1>
    )
}

export default HeroSection
