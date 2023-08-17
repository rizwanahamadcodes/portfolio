'use client'
import React, { useState } from 'react'

interface DrawerProps {
    isOpen: boolean
    onOpen: () => void
    onClose: () => void
    children: React.ReactNode
}

const Drawer: React.FC<DrawerProps> = (props) => {
    const { isOpen, onOpen, onClose, children } = props

    const handleOverlayClick = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        if (e.target === e.currentTarget) {
            onClose()
        }
    }

    return (
        <>
            <div
                className={`${
                    isOpen ? 'visible' : 'invisible'
                } absolute left-0 top-0 z-10 h-screen w-screen bg-white/50 backdrop-blur-sm dark:border-white/20 dark:bg-primary-dark/50`}
                onClick={handleOverlayClick}
            >
                <div
                    className={`${
                        isOpen ? '' : 'translate-x-[100%]'
                    } fixed right-0 top-0 h-screen w-80  bg-white shadow transition-all dark:bg-primary-dark`}
                >
                    {children}
                </div>
            </div>
        </>
    )
}

export default Drawer
