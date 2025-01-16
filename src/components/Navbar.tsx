'use client'

import Link from 'next/link'
import rizwanLogoGradient from '../../public/img/rizwan_logo_gradient.svg'

import CloseButton from './CloseButton'
import Container from './Container'
import Drawer, { DrawerBody, DrawerFoot, DrawerHead } from './Drawer'
import Hamburger from './Hamburger'
import NavMenu from './NavMenu'
import ThemeToggler from './ThemeToggler'
import ThemedImage from './ThemedImage'
import useDrawer from './useDrawer'

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDrawer(false)

    return (
        <nav className="bg fixed top-0 z-10 h-nav-height w-full border-b-[1px] border-gray-900/20 bg-white/50 shadow backdrop-blur-sm dark:border-gray-100/20 dark:bg-gray-800/50">
            <Container optionalStyles="h-full flex items-center justify-between">
                <Link href="/">
                    <ThemedImage
                        darkImageSrc={rizwanLogoGradient}
                        lightImageSrc={rizwanLogoGradient}
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
                    <DrawerHead
                        hasCloseButton={true}
                        onClose={onClose}
                        px={'px-[7vw]'}
                    >
                        <Link href="/" onClick={onClose}>
                            <ThemedImage
                                darkImageSrc={rizwanLogoGradient}
                                lightImageSrc={rizwanLogoGradient}
                                alt="Rizwan"
                                height="40"
                            />
                        </Link>
                    </DrawerHead>
                    <DrawerBody>
                        <div className="flex h-full flex-col justify-between">
                            <div>
                                <NavMenu direction="column" />

                                <div className="flex h-nav-height items-center justify-between px-7">
                                    <ThemeToggler />
                                </div>
                            </div>
                            <DrawerFoot px="px-[7vw]">Copyright</DrawerFoot>
                        </div>
                    </DrawerBody>
                    {/*
                    </div>
                     */}
                </Drawer>
            </Container>
        </nav>
    )
}

export default Navbar
