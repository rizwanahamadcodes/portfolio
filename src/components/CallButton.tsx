import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'

const CallButton = () => {
    return (
        <button className="flex h-12 items-center gap-4 rounded-full bg-gradient-to-r from-primary to-secondary px-4 text-gray-100  bg-blend-overlay transition-all hover:bg-gray-100/10 hover:shadow hover:shadow-gray-900/50 active:bg-gray-900/10">
            <FaPhoneAlt className="text-2xl" />
            <p className="tracking-wider">9823239314</p>
        </button>
    )
}

export default CallButton
