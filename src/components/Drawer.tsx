'use client'
import React, { Children, useCallback, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import CloseButton from './CloseButton'

import defaultTheme from 'tailwindcss/defaultTheme'

interface DrawerProps {
    isOpen: boolean
    onOpen: () => void
    onClose: () => void
    children: React.ReactNode
    customClasses?: string
}

const Drawer: React.FC<DrawerProps> = (props) => {
    const { isOpen, onOpen, onClose, children, customClasses } = props
    const pathname = usePathname()

    const handleOverlayClick = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        if (e.target === e.currentTarget) {
            onClose()
        }
    }

    const memoizedOnClose = useCallback(() => {
        onClose()
    }, [onClose])

    useEffect(() => {
        memoizedOnClose()
    }, [pathname, memoizedOnClose])

    return (
        <>
            <div
                className={`${
                    isOpen ? 'visible' : 'invisible'
                } absolute left-0 top-0 z-10 h-screen w-full bg-gray-100/50 backdrop-blur-sm dark:bg-gray-900/50 ${customClasses}`}
                onClick={handleOverlayClick}
            >
                <div
                    className={`${
                        isOpen ? 'translate-x-[-100%]' : ''
                    }  absolute left-full top-0  h-screen w-80 border-l-[1px] border-gray-900/20 bg-white shadow-left transition-transform dark:border-gray-100/20 dark:bg-gray-800`}
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
}

export const DrawerHead: React.FC<DrawerHeadProps> = (props) => {
    const { children, px, isSticky = true, hasCloseButton = false } = props

    return (
        <div
            className={`fixed flex h-nav-height w-full items-center border-b-[1px] border-gray-100 dark:border-gray-700 ${
                px ? px : 'px-7'
            }`}
        >
            <div className="grow">{children}</div>
            {hasCloseButton ? <CloseButton /> : <></>}
        </div>
    )
}

interface DrawerBodyProps {
    children: React.ReactNode
    isSticky?: boolean
    px?: number
    hasCloseButton?: boolean
}

export const DrawerBody: React.FC<DrawerBodyProps> = (props) => {
    return <></>
}

export default Drawer
