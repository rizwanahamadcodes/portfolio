'use client'
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

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

    useEffect(() => {
        onClose()
    }, [pathname])

    return (
        <>
            <div
                className={`${
                    isOpen ? 'visible' : 'invisible'
                } absolute left-0 top-0 z-10 h-screen w-screen bg-white/50 backdrop-blur-sm dark:border-white/20 dark:bg-primary-dark/50 ${customClasses}`}
                onClick={handleOverlayClick}
            >
                <div
                    className={`${
                        isOpen ? '' : 'translate-x-[100%]'
                    } fixed right-0 top-0 h-screen w-80  bg-white shadow transition-transform dark:bg-primary-dark`}
                >
                    {children}
                </div>
            </div>
        </>
    )
}

export default Drawer
