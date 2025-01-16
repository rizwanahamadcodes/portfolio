import React from 'react'

const CloseButton = ({}) => {
    return (
        <div className="relative flex h-5 w-7 flex-col justify-between">
            <span className="absolute top-[50%] h-[3px] w-full translate-y-[-50%] rotate-[45deg] rounded-full bg-primary dark:bg-white"></span>
            <span className="absolute top-[50%] h-[3px] w-full translate-y-[-50%] rotate-[-45deg] rounded-full bg-primary dark:bg-white"></span>
        </div>
    )
}

export default CloseButton
