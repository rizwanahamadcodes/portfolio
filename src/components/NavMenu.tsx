'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

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

interface NavMenuProps extends React.HTMLProps<HTMLDivElement> {
    direction: 'row' | 'column'
    past80: boolean
}

const NavMenu: React.FC<NavMenuProps> = ({
    direction = 'row',
    className,
    past80,
}) => {
    const pathname = usePathname()

    const [sliderBounds, setSliderBounds] = useState({
        top: 0,
        left: 0,
        height: 0,
        width: 0,
    })

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

    return (
        <div
            className={`${
                direction === 'row' ? 'h-full' : 'w-full'
            } relative ${className}`}
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
                                : 'w-full border-b-[1px] border-gray-100 dark:border-gray-700'
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
                                ? !past80 && direction == 'row'
                                    ? 'text-primary-900 hover:bg-gray-900/5 dark:text-primary-100 dark:hover:bg-gray-100/5'
                                    : 'bg-gray-900/10 text-primary-900 hover:bg-gray-900/5 dark:bg-gray-100/10 dark:text-primary-100 dark:hover:bg-gray-100/5'
                                : 'text-gray-600 hover:bg-gray-900/5 dark:hover:bg-gray-100/5'
                        }
                        ${
                            direction === 'row'
                                ? 'h-full px-7'
                                : 'h-nav-height w-full pl-[7vw]'
                        }
                        flex select-none items-center text-[0.9rem]  font-bold uppercase tracking-[0.125rem] transition-all`}
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
