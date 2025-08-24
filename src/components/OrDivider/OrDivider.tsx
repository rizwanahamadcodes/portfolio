import React from "react";

const OrDivider = () => {
    return (
        <div className="relative flex items-center justify-center">
            <div className="absolute h-[2px] w-full bg-gray-200 dark:bg-gray-800"></div>
            <div className="absolute h-full w-[2px] bg-gray-200 dark:bg-gray-800"></div>
            <div className="z-[2] flex h-2.875 w-2.875 items-center justify-center rounded-full border-2 bg-gray-100 text-center text-sm dark:border-gray-800 dark:bg-gray-900">
                OR
            </div>
        </div>
    );
};

export default OrDivider;
