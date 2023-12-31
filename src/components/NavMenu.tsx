'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import cn from './utils/cn'

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

type NavMenuProps = React.ComponentPropsWithoutRef<'div'> & {
    direction: 'row' | 'column'
    scrolledPast80: boolean
}

const NavMenu: React.FC<NavMenuProps> = ({
    direction = 'row',
    className,
    scrolledPast80,
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
            className={cn(
                'relative',
                direction === 'row' ? 'h-full' : 'w-full',
                className
            )}
        >
            <ul
                className={cn(
                    'relative flex h-full items-center',
                    direction === 'row' ? 'flex-row' : 'flex-col'
                )}
            >
                {navLinks.map((navLink, index) => (
                    <li
                        className={cn(
                            direction === 'row'
                                ? 'h-full'
                                : 'w-full border-b-[1px] border-gray-100 dark:border-gray-700'
                        )}
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
                            className={cn(
                                'flex w-full select-none items-center pl-[7vw] text-sm font-semibold uppercase tracking-[0.125rem] transition-all hover:bg-gray-900/5 dark:hover:bg-gray-100/5',
                                direction === 'column'
                                    ? 'h-nav-height'
                                    : 'h-full px-7',

                                navLink.path === pathname
                                    ? 'text-gray-900 hover:bg-gray-900/10 dark:text-gray-100 dark:hover:bg-gray-100/10'
                                    : '',

                                navLink.path === pathname &&
                                    (direction === 'column' || scrolledPast80)
                                    ? 'bg-gray-900/10 dark:bg-gray-100/10'
                                    : ''
                            )}
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
                className={cn(
                    'absolute bg-primary transition-all',
                    direction === 'row'
                        ? 'bottom-0 left-0 h-1 w-0 rounded-t-full'
                        : 'left-0 top-[100%] h-[100px] w-1 rounded-r-full'
                )}
            ></div>
        </div>
    )
}

export default NavMenu
