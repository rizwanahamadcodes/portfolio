import Button, {
    AnchorButton,
    ButtonIcon,
    NextJsLinkButton,
} from '@/components/Button'
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
            <Container className="relative flex flex-col items-center gap-16 lg:flex-row">
                <div className="w-full">
                    <div className="flex flex-col items-start gap-8">
                        <div className="flex flex-col gap-4">
                            <GreetingLine />

                            <SectionTitle>Front-end Web Developer</SectionTitle>

                            <SectionSubtitle className="max-w-[50ch]">
                                I craft captivating web interfaces that blend
                                design and functionality to create a pleasant
                                user experience.
                            </SectionSubtitle>
                        </div>

                        <div className="flex w-full flex-col items-stretch gap-4 sm:flex-row">
                            <AnchorButton
                                colorScheme={{
                                    from: 'primary',
                                    to: 'primary-400',
                                }}
                                href="/img/hero_image_light.svg"
                                className="grow shadow-primary/50"
                                download
                            >
                                <ButtonIcon icon={HiDownload} />
                                View CV
                            </AnchorButton>

                            <NextJsLinkButton
                                href="/contact-me"
                                colorScheme={{
                                    from: 'primary-support',
                                    to: 'primary-support-400',
                                }}
                                className="grow shadow-primary-support/50"
                            >
                                <ButtonIcon icon={ImBubbles} />
                                Contact Me
                            </NextJsLinkButton>
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
        <h1 className="font-medium sm:text-7xl xl:text-[5.5rem]">
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
