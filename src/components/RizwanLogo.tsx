import Link from 'next/link'
import ThemedImage from './ThemedImage'
import rizwanLogoGradient from '/public/img/rizwan_logo__primary-to-primary-support-gradient.svg'
import Image from 'next/image'
import rizwanLogoGray100 from '/public/img/rizwan_logo__gray-100.svg'
import rizwanLogoGray900 from '/public/img/rizwan_logo__gray-900.svg'

type RizwanLogoProps = {
    variant?: 'gradient' | 'blackandwhite'
    past80?: boolean
}

const RizwanLogo: React.FC<RizwanLogoProps> = (props) => {
    const { past80, variant = 'gradient' } = props

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
                height={past80 == undefined ? '40' : past80 ? '40' : '50'}
            />
        </Link>
    )
}

export default RizwanLogo
