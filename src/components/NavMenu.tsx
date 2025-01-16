'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

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
}

const NavMenu: React.FC<NavMenuProps> = ({ direction = 'row' }) => {
    const pathname = usePathname()

    const [sliderBounds, setSliderBounds] = useState<SliderBoundsProps>({
        top: 0,
        left: 0,
        height: 0,
        width: 0,
    })

    const onLIClick = (sliderBounds: SliderBoundsProps) => {
        setSliderBounds(sliderBounds)
    }

    return (
        <div
            className={`${
                direction === 'row' ? 'h-full' : 'top-[100px] w-full'
            } relative `}
        >
            <ul
                className={`${
                    direction === 'row' ? 'flex-row' : 'flex-col'
                } relative flex h-full items-center`}
            >
                {navLinks.map((navLink, index) => (
                    <li
                        className={`${
                            direction === 'row' ? 'h-full' : 'w-full'
                        }`}
                        key={index}
                    >
                        <Link
                            href={navLink.path}
                            className={`
                        ${
                            navLink.path === pathname
                                ? 'text-primary dark:text-white'
                                : ''
                        }
                        ${
                            direction === 'row'
                                ? 'h-full px-7'
                                : 'w-full py-5 pl-5'
                        }
                        transition-alldark:text-white flex select-none  items-center text-[0.9rem] font-bold uppercase tracking-[0.125rem]`}
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
                } absolute bg-primary transition-all dark:bg-white`}
            ></div>
        </div>
    )
}

export default NavMenu
