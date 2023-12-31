'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import Container from './Container'
import Drawer, { DrawerBody, DrawerFoot, DrawerHead } from './Drawer'
import Hamburger from './Hamburger'
import NavMenu from './NavMenu'
import ThemeToggler from './ThemeToggler'
import ThemedImage from './ThemedImage'
import { useDrawer } from './Drawer'
import RizwanLogo from './RizwanLogo'
import cn from './utils/cn'

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDrawer(false)
    const [scrolledPast80, setScrolledPast80] = useState(false)
    const navSubstituteRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const navSubstitute = navSubstituteRef.current

        const callback: IntersectionObserverCallback = (entries, observer) => {
            setScrolledPast80(!entries[0].isIntersecting)
        }

        const options: IntersectionObserverInit = {
            threshold: 1,
            rootMargin: '100px 0px 0px 0px',
        }

        const observer = new IntersectionObserver(callback, options)

        if (navSubstitute) {
            observer.observe(navSubstitute)
        }

        return () => {
            observer.unobserve(navSubstitute as Element)
        }
    }, [])

    const navClasses = `shadow h-nav-height`
    const ghostNavClasses = `h-20`

    return (
        <div>
            <nav
                className={cn(
                    'fixed top-0 z-10 w-full bg-gray-100/50 backdrop-blur-sm transition-all dark:bg-gray-900/50',
                    scrolledPast80 ? [navClasses] : [ghostNavClasses]
                )}
            >
                <Container className="flex h-full items-center justify-between">
                    <RizwanLogo scrolledPast80={scrolledPast80} />
                    <NavMenu
                        scrolledPast80={scrolledPast80}
                        direction="row"
                        className="hidden lg:block"
                    />
                    <div className="min-w-[64px]">
                        <ThemeToggler className="hidden lg:block" />
                    </div>
                    <Hamburger className="lg:hidden" onClick={onOpen} />
                    <Drawer
                        className="lg:hidden"
                        isOpen={isOpen}
                        onOpen={onOpen}
                        onClose={onClose}
                    >
                        <DrawerHead
                            heightPost80PxScroll="h-20"
                            scrolledPast80={scrolledPast80}
                            hasCloseButton={true}
                            onClose={onClose}
                            px={'px-[7vw]'}
                        >
                            <RizwanLogo />
                        </DrawerHead>
                        <DrawerBody>
                            <div className="flex h-full flex-col justify-between">
                                <div>
                                    <NavMenu
                                        scrolledPast80={scrolledPast80}
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
