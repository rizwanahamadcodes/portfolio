import Button from '@/components/Button'
import Container from '@/components/Container'
import ThemedImage from '@/components/ThemedImage'
import { FaPhoneAlt } from 'react-icons/fa'
import { HiDownload } from 'react-icons/hi'
import { GiClick } from 'react-icons/gi'
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
                    <h2 className="text-2xl font-medium text-secondary dark:text-secondary sm:text-3xl">
                        Front-end Web Developer
                    </h2>
                    <p className="max-w max-w-[50ch] text-xl">
                        I craft captivating web interfaces that blend design and
                        functionality to create a pleasant user experience.
                    </p>
                    <div className="mt-3 flex w-full flex-col items-stretch gap-5 sm:flex-row">
                        <Button
                            leftIcon={HiDownload}
                            colorScheme="primary-gradient"
                            href="/public/img/hero_image_light.svg"
                            download="hero_image_light.svg"
                            className="grow"
                        >
                            View CV
                        </Button>

                        <Button
                            leftIcon={FaPhoneAlt}
                            colorScheme="secondary-gradient"
                            href="tel:9828289314"
                            className="grow"
                        >
                            9828289314
                        </Button>
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
