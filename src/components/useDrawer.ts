'use client'

import { useCallback, useState } from 'react'

const useDrawer = (drawerOpen: boolean) => {
    const [isOpen, setIsOpen] = useState(drawerOpen)

    const onOpen = () => {
        setIsOpen(true)
    }

    const onClose = useCallback(() => {
        setIsOpen(false)
    }, [])

    return { isOpen, onOpen, onClose }
}

export default useDrawer
