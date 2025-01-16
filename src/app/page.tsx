import Image from 'next/image'
import harry from '../../public/img/harry.jpg'
import Container from '@/components/Container'
import ThemedImage from '@/components/ThemedImage'
import heroImageLight from '../../public/img/hero_image_light.svg'
import heroImageDark from '../../public/img/hero_image_dark.svg'
import { FaPhoneAlt } from 'react-icons/fa'
import CallButton from '@/components/CallButton'

export default function Home() {
    return (
        <Container optionalStyles="py-8 flex h-after-nav lg:flex-row items-center flex-col gap-12 lg:gap-none">
            <div className="w-full">
                <div className="flex flex-col items-start  gap-5 sm:gap-7 lg:gap-8">
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
                    <span className="flex gap-8">
                        <CallButton></CallButton>
                        <CallButton bg={'bg-tertiary'}></CallButton>
                    </span>
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
