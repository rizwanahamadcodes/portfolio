'use client'

import Link from 'next/link'
import rizwanLogoGradient from '/public/img/rizwan_logo_gradient.svg'
import { useEffect, useRef, useState } from 'react'
import Container from './Container'
import Drawer, { DrawerBody, DrawerFoot, DrawerHead } from './Drawer'
import Hamburger from './Hamburger'
import NavMenu from './NavMenu'
import ThemeToggler from './ThemeToggler'
import ThemedImage from './ThemedImage'
import useDrawer from './useDrawer'

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDrawer(false)
    const [past80, setPast80] = useState<boolean>(false)
    const navSubstituteRef = useRef<HTMLDivElement | null>()

    useEffect(() => {
        const callback: IntersectionObserverCallback = (entries, observer) => {
            setPast80(!entries[0].isIntersecting)
        }

        const options: IntersectionObserverInit = {
            threshold: 1,
            rootMargin: '100px 0px 0px 0px',
        }

        const observer = new IntersectionObserver(callback, options)

        if (navSubstituteRef.current) {
            observer.observe(navSubstituteRef.current)
        }

        return () => {
            // observer.unobserve(navSubstituteRef.current)
        }
    }, [])

    const navClasses = `shadow  bg-gray-100/70 dark:bg-gray-900/70 h-nav-height backdrop-blur-sm`

    const ghostNavClasses = `h-20 dark:bg-gray-900 bg-gray-100`

    return (
        <div>
            <nav
                className={`fixed  top-0 z-10 w-full transition-all ${
                    past80 ? navClasses : ghostNavClasses
                }`}
            >
                <Container className="flex h-full items-center justify-between">
                    <Link href="/">
                        <ThemedImage
                            className="transition-all duration-300"
                            darkImageSrc={rizwanLogoGradient}
                            lightImageSrc={rizwanLogoGradient}
                            alt="Rizwan"
                            height={past80 ? '40' : '50'}
                        />
                    </Link>
                    <NavMenu
                        past80={past80}
                        direction="row"
                        className="hidden lg:block"
                    />
                    <ThemeToggler className="hidden lg:block" />
                    <button onClick={onOpen} className="lg:hidden">
                        <Hamburger />
                    </button>
                    <Drawer
                        className="lg:hidden"
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
                                    className="transition-all duration-300"
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
                                    <NavMenu
                                        past80={past80}
                                        direction="column"
                                    />

                                    <div className="flex h-nav-height items-center justify-between px-7">
                                        <ThemeToggler />
                                    </div>
                                </div>
                                <DrawerFoot px="px-[7vw]">Copyright</DrawerFoot>
                            </div>
                        </DrawerBody>
                    </Drawer>
                </Container>
            </nav>
            <div ref={navSubstituteRef} className="h-20 w-full"></div>
        </div>
    )
}

export default Navbar
