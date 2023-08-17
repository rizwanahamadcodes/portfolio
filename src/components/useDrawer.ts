'use client'

import { useState } from 'react'

const useDrawer = (drawerOpen: boolean) => {
    const [isOpen, setIsOpen] = useState(drawerOpen)

    const onOpen = () => {
        setIsOpen(true)
    }

    const onClose = () => {
        setIsOpen(false)
    }

    return { isOpen, onOpen, onClose }
}

export default useDrawer
