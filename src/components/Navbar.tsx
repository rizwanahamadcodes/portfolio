'use client'

import Link from 'next/link'
import rizwanLogoPrimary from '../../public/img/rizwan_logo_primary.svg'
import rizwanLogoWhite from '../../public/img/rizwan_logo_white.svg'
import Container from './Container'
import ThemedImage from './ThemedImage'
import ThemeToggler from './ThemeToggler'
import NavMenu from './NavMenu'
import Drawer from './Drawer'
import useDrawer from './useDrawer'
import Hamburger from './Hamburger'

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDrawer(false)

    return (
        <nav className="bg fixed top-0 z-10 h-[60px] w-full border-b-[1px] border-black/20 bg-white/50 shadow backdrop-blur-sm dark:border-white/20 dark:bg-primary-dark/50">
            <Container optionalStyles="h-full flex items-center justify-between">
                <Link href="/">
                    <ThemedImage
                        darkImageSrc={rizwanLogoWhite}
                        lightImageSrc={rizwanLogoPrimary}
                        alt="Rizwan"
                        height="40"
                    />
                </Link>
                <NavMenu direction="row" />
                <ThemeToggler />
                <button onClick={onOpen} className="lg:hidden">
                    <Hamburger />
                </button>
                <Drawer isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
                    <div className="flex h-[60px] items-center px-8">
                        <Link href="/" onClick={onClose}>
                            <ThemedImage
                                darkImageSrc={rizwanLogoWhite}
                                lightImageSrc={rizwanLogoPrimary}
                                alt="Rizwan"
                                height="40"
                            />
                        </Link>
                    </div>
                    <NavMenu direction="column" />
                    <ThemeToggler />
                </Drawer>
            </Container>
        </nav>
    )
}

export default Navbar
