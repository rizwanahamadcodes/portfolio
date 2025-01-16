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

    // shadow[-1px_0px_3px_0px_rgba(0,0,0,0.75) -1px_0px_3px_0px_red]
    return (
        <>
            <div
                className={`${
                    isOpen ? 'visible' : 'invisible'
                } absolute left-0 top-0 z-10 h-screen w-screen bg-gray-100/50 backdrop-blur-sm dark:bg-gray-900/50 ${customClasses}`}
                onClick={handleOverlayClick}
            >
                <div
                    className={`${
                        isOpen ? '' : 'translate-x-[100%]'
                    } fixed right-0 top-0  h-screen w-80 overflow-y-scroll border-l-[1px] border-gray-900/20 bg-white shadow-left transition-transform dark:border-gray-100/20 dark:bg-gray-800`}
                >
                    {children}
                </div>
            </div>
        </>
    )
}

export default Drawer
