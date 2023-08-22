'use client'

import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'
import CloseButton from './CloseButton'

interface DrawerProps extends React.HTMLProps<HTMLDivElement> {
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
                className={`${
                    isOpen ? 'visible' : 'invisible'
                } absolute left-0 top-0 z-10 h-screen w-full bg-gray-100/50 backdrop-blur-sm dark:bg-gray-900/50 ${className}`}
                onClick={handleOverlayClick}
            >
                <div
                    className={`${
                        isOpen ? 'translate-x-[-100%]' : ''
                    }  absolute left-full top-0 flex h-screen w-80 flex-col border-l-[1px] border-gray-900/20 bg-white shadow-left transition-transform dark:border-gray-100/20 dark:bg-gray-800`}
                >
                    {children}
                </div>
            </div>
        </>
    )
}

interface DrawerHeadProps {
    children: React.ReactNode
    isSticky?: boolean
    px?: string
    hasCloseButton?: boolean
    onClose: () => void
}

export const DrawerHead: React.FC<DrawerHeadProps> = (props) => {
    const {
        children,
        px,
        isSticky = true,
        onClose,
        hasCloseButton = false,
    } = props

    return (
        <div>
            <div
                className={`fixed flex h-nav-height w-full items-center border-b-[1px] border-gray-100 dark:border-gray-700 ${
                    px ? px : 'px-7'
                }`}
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

            <div className="h-nav-height"></div>
        </div>
    )
}

interface DrawerBodyProps {
    children: React.ReactNode
    px?: string
}

export const DrawerBody: React.FC<DrawerBodyProps> = (props) => {
    const { children, px } = props

    return (
        <div className={`grow overflow-y-auto ${px ? px : ''}`}>{children}</div>
    )
}
interface DrawerFootProps {
    children: React.ReactNode
    px?: string
}

export const DrawerFoot: React.FC<DrawerFootProps> = (props) => {
    const { children, px } = props

    return (
        <div className={`flex h-nav-height items-center ${px ? px : ''}`}>
            {children}
        </div>
    )
}

export default Drawer
