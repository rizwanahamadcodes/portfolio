import Button from '@/components/Button'
import Container from '@/components/Container'
import ThemedImage from '@/components/ThemedImage'
import { FaPhoneAlt } from 'react-icons/fa'
import { HiDownload } from 'react-icons/hi'
import heroImageDark from '/public/img/hero_image_dark.svg'
import heroImageLight from '/public/img/hero_image_light.svg'

export default function Home() {
    return (
        <Container className="lg:gap-none flex h-after-nav flex-col items-center gap-12 py-8 lg:flex-row">
            <div className="w-full">
                <div className="flex flex-col items-start  gap-5">
                    <h1 className="font-medium sm:text-7xl xl:text-8xl">
                        <div>Hi,</div>
                        <div>
                            I am
                            <span className="text-primary"> Rizwan</span>
                        </div>
                    </h1>
                    <h2 className="font-medium text-primary-support dark:text-primary-support-300 sm:text-3xl">
                        Front-end Web Developer
                    </h2>
                    <h3 className="max-w max-w-[50ch] text-xl">
                        I craft captivating web interfaces that blend design and
                        functionality to create a pleasant user experience.
                    </h3>
                    <div className="mt-3 flex w-full flex-col items-stretch gap-5 sm:flex-row">
                        <a
                            href="/img/hero_image_light.svg"
                            className="grow"
                            download
                        >
                            <Button
                                leftIcon={HiDownload}
                                colorScheme={{
                                    from: 'primary',
                                    to: 'primary-support',
                                }}
                                className="w-full"
                            >
                                View CV
                            </Button>
                        </a>

                        <a href="tel:9828289314" className="grow">
                            <Button
                                colorScheme={{
                                    from: 'secondary',
                                    to: 'secondary-support',
                                }}
                                leftIcon={FaPhoneAlt}
                                className="w-full"
                            >
                                9828289314
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="w-50">
                <ThemedImage
                    darkImageSrc={heroImageDark}
                    lightImageSrc={heroImageLight}
                    alt="Hero image"
                />
            </div>
        </Container>
    )
}
