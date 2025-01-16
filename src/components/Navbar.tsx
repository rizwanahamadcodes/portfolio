import Link from 'next/link'
import rizwanLogoPrimary from '../../public/img/rizwan_logo_primary.svg'
import rizwanLogoWhite from '../../public/img/rizwan_logo_white.svg'
import Container from './Container'
import ThemedImage from './ThemedImage'
import ThemeToggler from './ThemeToggler'

const Navbar = () => {
    return (
        <nav className="bg fixed z-10 h-[60px] w-full border-b-[1px] border-black/20 bg-white/50 shadow backdrop-blur-sm dark:border-white/20 dark:bg-primary-dark/50">
            <Container optionalStyles="h-full flex items-center justify-between">
                <Link href="#">
                    <ThemedImage
                        darkImageSrc={rizwanLogoPrimary}
                        lightImageSrc={rizwanLogoPrimary}
                        alt="Rizwan"
                        height="40"
                    />
                </Link>
                <ThemeToggler />
            </Container>
        </nav>
    )
}

export default Navbar
