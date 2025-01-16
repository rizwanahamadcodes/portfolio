import React from 'react'

const OrDivider = () => {
    return (
        <div className="relative flex items-center justify-center md:h-full">
            <div className="absolute h-0.5 w-full bg-gray-200 dark:bg-gray-800 md:h-full md:w-0.5"></div>
            <div className="z-[2] flex h-[44px] w-[44px] items-center justify-center rounded-full border-2 bg-gray-100 text-center text-sm dark:border-gray-800 dark:bg-gray-900">
                OR
            </div>
        </div>
    )
}

export default OrDivider
