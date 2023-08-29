import Link from 'next/link'
import ThemedImage from './ThemedImage'
import rizwanLogoGradient from '/public/img/rizwan_logo__primary-to-primary-support-gradient.svg'

type RizwanLogoProps = {
    past80?: boolean
}

const RizwanLogo: React.FC<RizwanLogoProps> = (props) => {
    const { past80 } = props

    return (
        <Link href="/">
            <ThemedImage
                className="transition-all duration-300"
                darkImageSrc={rizwanLogoGradient}
                lightImageSrc={rizwanLogoGradient}
                alt="Rizwan"
                height={past80 == undefined ? '40' : past80 ? '40' : '50'}
            />
        </Link>
    )
}

export default RizwanLogo
