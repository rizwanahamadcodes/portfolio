'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Navbar from './Navbar'

interface NavLinkProps {
    navLink: {
        name: string
        path: string
    }
}

interface SliderBoundsProps {
    top: number
    left: number
    height: number
    width: number
}

const navLinks = [
    { name: 'home', path: '/' },
    { name: 'about me', path: '/about-me' },
    { name: 'projects', path: '/projects' },
    { name: 'contact me', path: '/contact-me' },
]

interface NavMenuProps {
    direction: 'row' | 'column'
    customClasses?: string
}

const NavMenu: React.FC<NavMenuProps> = ({
    direction = 'row',
    customClasses,
}) => {
    const pathname = usePathname()

    const [sliderBounds, setSliderBounds] = useState<SliderBoundsProps>({
        top: 0,
        left: 0,
        height: 0,
        width: 0,
    })

    // const [dimensions, setDimensions] = useState({
    //     height: window.innerHeight,
    //     width: window.innerWidth,
    // })

    const onLIClick = (sliderBounds: SliderBoundsProps) => {
        setSliderBounds(sliderBounds)
    }

    const liRefs = useRef<HTMLLIElement[]>([])

    useEffect(() => {
        const activeLiRef = liRefs.current.find(
            (liRef) => liRef.getAttribute('data-path') === pathname
        )

        if (activeLiRef) {
            setSliderBounds({
                top: activeLiRef.offsetTop,
                left: activeLiRef.offsetLeft,
                height: activeLiRef.offsetHeight,
                width: activeLiRef.offsetWidth,
            })
        }
    }, [pathname])
    // }, [pathname, dimensions])

    // Rerender on resize not baked into react
    // useEffect(() => {
    //     function handleResize() {
    //         setDimensions({
    //             height: window.innerHeight,
    //             width: window.innerWidth,
    //         })
    //     }
    //     if (typeof window != undefined) {
    //         window.addEventListener('resize', handleResize)
    //     }
    // }, [])

    return (
        <div
            className={`${
                direction === 'row' ? 'h-full' : 'w-full'
            } relative ${customClasses}`}
        >
            <ul
                className={`${
                    direction === 'row' ? 'flex-row' : 'flex-col'
                } relative flex h-full items-center`}
            >
                {navLinks.map((navLink, index) => (
                    <li
                        className={`${
                            direction === 'row'
                                ? 'h-full'
                                : 'w-full border-b-[1px] border-gray-100 first-of-type:border-t-[1px]'
                        }
                        `}
                        key={navLink.path}
                        data-path={navLink.path}
                        ref={(el) => {
                            if (el && !liRefs.current.includes(el)) {
                                liRefs.current.push(el)
                            }
                        }}
                    >
                        <Link
                            href={navLink.path}
                            className={`
                        ${
                            navLink.path === pathname
                                ? 'bg-primary/10 text-primary hover:bg-primary/10'
                                : ''
                        }
                        ${
                            direction === 'row'
                                ? 'h-full px-7'
                                : 'w-full py-5 pl-8'
                        }
                        flex select-none items-center text-[0.9rem]  font-bold uppercase tracking-[0.125rem] transition-all hover:bg-black/5 dark:hover:bg-white/5`}
                            onClick={(e) => {
                                onLIClick({
                                    top: (e.target as HTMLLIElement).offsetTop,
                                    left: (e.target as HTMLLIElement)
                                        .offsetLeft,
                                    height: (e.target as HTMLLIElement)
                                        .offsetHeight,
                                    width: (e.target as HTMLLIElement)
                                        .offsetWidth,
                                })
                            }}
                        >
                            {navLink.name}
                        </Link>
                    </li>
                ))}
            </ul>
            <div
                style={
                    direction === 'row'
                        ? {
                              left: sliderBounds.left,
                              width: sliderBounds.width,
                          }
                        : {
                              top: sliderBounds.top,
                              height: sliderBounds.height,
                          }
                }
                className={`${
                    direction === 'row'
                        ? 'bottom-0 left-0 h-1 w-0 rounded-t-full'
                        : 'left-0 top-[100%] h-[100px] w-1 rounded-r-full'
                } absolute bg-primary transition-all`}
            ></div>
        </div>
    )
}

export default NavMenu
