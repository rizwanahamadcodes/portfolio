import Link from 'next/link'
import ThemedImage from './ThemedImage'
import rizwanLogoGradient from '/public/img/rizwan_logo__primary-to-primary-support-gradient.svg'
import Image, { ImageProps } from 'next/image'
import rizwanLogoGray100 from '/public/img/rizwan_logo__gray-100.svg'
import rizwanLogoGray900 from '/public/img/rizwan_logo__gray-900.svg'

type RizwanLogoProps = Omit<ImageProps, 'src' | 'alt'> & {
    variant?: 'gradient' | 'blackandwhite'
    scrolledPast80?: boolean
}

const RizwanLogo = (props: RizwanLogoProps) => {
    const { scrolledPast80, variant = 'gradient', ...otherProps } = props

    return (
        <Link href="/">
            <ThemedImage
                className="transition-all duration-300"
                darkImageSrc={
                    variant === 'blackandwhite'
                        ? rizwanLogoGray100
                        : rizwanLogoGradient
                }
                lightImageSrc={
                    variant === 'blackandwhite'
                        ? rizwanLogoGray900
                        : rizwanLogoGradient
                }
                alt="Rizwan"
                height={
                    scrolledPast80 == undefined
                        ? '40'
                        : scrolledPast80
                        ? '40'
                        : '50'
                }
                {...otherProps}
            />
        </Link>
    )
}

export default RizwanLogo
