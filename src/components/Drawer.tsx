'use client'

import { useCallback, useState } from 'react'

import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'
import CloseButton from './CloseButton'
import cn from './utils/cn'

type DrawerProps = React.HTMLProps<HTMLDivElement> & {
    isOpen: boolean
    onOpen: () => void
    onClose: () => void
    children: React.ReactNode
}

const Drawer = (props: DrawerProps) => {
    const { isOpen, onOpen, onClose, children, className } = props
    const pathname = usePathname()

    const handleOverlayClick = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        if (e.target === e.currentTarget) {
            onClose()
        }
    }

    useEffect(() => {
        onClose()
    }, [pathname, onClose])

    return (
        <>
            <div
                className={cn(
                    'invisible absolute left-0 top-0 z-50 h-screen w-full bg-gray-100/50 backdrop-blur-sm dark:bg-gray-900/50',
                    { visible: isOpen },
                    className
                )}
                onClick={handleOverlayClick}
            >
                <div
                    className={cn(
                        'absolute left-full top-0 flex h-screen w-80 flex-col border-l-[1px] border-gray-900/20 bg-white shadow-left transition-transform dark:border-gray-100/20 dark:bg-gray-800',
                        { 'translate-x-[-100%]': isOpen }
                    )}
                >
                    {children}
                </div>
            </div>
        </>
    )
}
export const useDrawer = (drawerOpen: boolean) => {
    const [isOpen, setIsOpen] = useState(drawerOpen)

    const onOpen = () => {
        setIsOpen(true)
    }

    const onClose = useCallback(() => {
        setIsOpen(false)
    }, [])

    return { isOpen, onOpen, onClose }
}
type DrawerHeadProps = {
    heightPost80PxScroll?: string
    children: React.ReactNode
    isSticky?: boolean
    px?: string
    hasCloseButton?: boolean
    scrolledPast80: boolean
    onClose: () => void
}

export const DrawerHead: React.FC<DrawerHeadProps> = (props) => {
    const {
        children,
        scrolledPast80,
        heightPost80PxScroll,
        px,
        isSticky = true,
        onClose,
        hasCloseButton = false,
    } = props

    return (
        <div>
            <div
                className={cn(
                    'fixed flex w-full items-center border-b-[1px] border-gray-100 px-7 dark:border-gray-700',
                    px,
                    scrolledPast80 ? 'h-nav-height' : [heightPost80PxScroll]
                )}
            >
                <div className="grow">{children}</div>
                {hasCloseButton ? (
                    <span className="cursor-pointer" onClick={onClose}>
                        <CloseButton />
                    </span>
                ) : (
                    <></>
                )}
            </div>

            <div
                className={cn(
                    scrolledPast80 ? 'h-nav-height' : [heightPost80PxScroll]
                )}
            ></div>
        </div>
    )
}

interface DrawerBodyProps {
    children: React.ReactNode
    px?: string
}

export const DrawerBody: React.FC<DrawerBodyProps> = (props) => {
    const { children, px } = props

    return <div className={cn('grow overflow-y-auto', px)}>{children}</div>
}
interface DrawerFootProps {
    children: React.ReactNode
    px?: string
}

export const DrawerFoot: React.FC<DrawerFootProps> = (props) => {
    const { children, px } = props

    return (
        <div className={cn('flex h-nav-height items-center', px)}>
            {children}
        </div>
    )
}

export default Drawer
