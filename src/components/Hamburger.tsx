import React from 'react'

const Hamburger = ({}) => {
    return (
        <div className="flex h-5 w-7 flex-col justify-between">
            {Array(3)
                .fill(null)
                .map((_, index) => (
                    <div
                        key={index}
                        className="h-[3px] w-full rounded-full bg-primary dark:bg-gray-100"
                    ></div>
                ))}
        </div>
    )
}

export default Hamburger
