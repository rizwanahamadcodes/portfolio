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
import CloseButton from './CloseButton'

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
                <NavMenu direction="row" customClasses="hidden lg:block" />
                <ThemeToggler customClasses="hidden lg:block" />
                <button onClick={onOpen} className="lg:hidden">
                    <Hamburger />
                </button>
                <Drawer
                    customClasses="lg:hidden"
                    isOpen={isOpen}
                    onOpen={onOpen}
                    onClose={onClose}
                >
                    <div className="flex h-[60px] items-center justify-between px-8">
                        <Link href="/" onClick={onClose}>
                            <ThemedImage
                                darkImageSrc={rizwanLogoWhite}
                                lightImageSrc={rizwanLogoPrimary}
                                alt="Rizwan"
                                height="40"
                            />
                        </Link>
                        <button onClick={onClose}>
                            <CloseButton />
                        </button>
                    </div>
                    <NavMenu direction="column" />
                    <div className="mt-4 pl-7">
                        <ThemeToggler />
                    </div>
                </Drawer>
            </Container>
        </nav>
    )
}

export default Navbar
