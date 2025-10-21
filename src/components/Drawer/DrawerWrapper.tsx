"use client";

import clsx from "clsx";
import { useDrawerProps } from "./useDrawerProps";

type DrawerWrapperProps = { children: React.ReactNode; className?: string };

export const DrawerWrapper = (props: DrawerWrapperProps) => {
    const { children, className } = props;
    const { isOpen, close } = useDrawerProps();

    const handleDrawerWrapperClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (e.target === e.currentTarget) {
            close();
        }
    };

    return (
        <div
            onClick={(e) => {
                handleDrawerWrapperClick(e);
            }}
            className={clsx("h-dvh w-full fixed top-0 left-0 z-1000 overflow-hidden transition-all duration-300", isOpen ? "visible" : "invisible", className)}>
            {children}
            <div className={clsx("h-full w-full absolute top-0 left-0 bg-gray-100/50 dark:bg-gray-900/50 backdrop-blur-xs z-20 pointer-events-none overflow-hidden transition-all", isOpen ? "visible opacity-100" : "invisible opacity-0", className)}></div>
        </div>
    );
};
