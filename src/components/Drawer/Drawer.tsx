"use client";

import CloseButton from "@/components/CloseButton/CloseButton";
import { DrawerContext, useDrawerProps } from "@/components/Drawer/useDrawerProps";
import RizwanLogo from "@/components/RizwanLogo";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { DrawerWrapper } from "./DrawerWrapper";

export type DrawerProps = {
    children?: React.ReactNode;
    isOpen: boolean;
    open: () => void;
    close: () => void;
    toggle?: () => void;
    className?: string;
};
// <div className="h-full w-full absolute p-0.5">
//     <div className={clsx("relative h-full w-full backdrop-blur-md transition-all rounded-full", viewportTouchingStatus?.topTouchedTop ? "" : "shadow-lg shadow-black/5 dark:shadow-black/20 bg-white/10 dark:bg-black/10")}></div>
// </div>
const Drawer = (props: DrawerProps) => {
    const { className, children, isOpen, open, close, toggle } = props;

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!isOpen) return;

        const scrollY = window.scrollY;
        const body = document.body;
        const root = document.documentElement;
        const previousBodyStyles = {
            position: body.style.position,
            top: body.style.top,
            width: body.style.width,
            overflow: body.style.overflow,
        };
        const previousRootOverflow = root.style.overflow;

        body.style.position = "fixed";
        body.style.top = `-${scrollY}px`;
        body.style.width = "100%";
        body.style.overflow = "hidden";
        root.style.overflow = "hidden";

        return () => {
            body.style.position = previousBodyStyles.position;
            body.style.top = previousBodyStyles.top;
            body.style.width = previousBodyStyles.width;
            body.style.overflow = previousBodyStyles.overflow;
            root.style.overflow = previousRootOverflow;
            window.scrollTo(0, scrollY);
        };
    }, [isOpen]);

    const portalRoot = mounted ? document.getElementById("modals-wrapper") : null;
    if (!portalRoot) return null;
    return ReactDOM.createPortal(
        <DrawerContext.Provider value={{ isOpen, open, close, toggle }}>
            <DrawerWrapper className={className}>
                <DrawerMain>{children}</DrawerMain>
            </DrawerWrapper>
        </DrawerContext.Provider>,
        portalRoot
    );
};

type DrawerMainProps = { children: React.ReactNode };

export const DrawerMain = (props: DrawerMainProps) => {
    const { children } = props;
    const { isOpen } = useDrawerProps();
    const drawerRef = useRef<HTMLDivElement | null>(null);

    return (
        <div ref={drawerRef} className={clsx("rounded-1 w-20 flex z-50 flex-col gap-0.25 h-[calc(100%-1rem)] transition-all duration-300 absolute top-0.5 right-0.5 overflow-hidden dark:border-l-gray-700", isOpen ? "translate-x-0" : "translate-x-full")}>
            {children}
        </div>
    );
};

type DrawerHeadProps = {
    height?: string;
    className?: string;
    children: React.ReactNode;
};

export const DrawerHead = (props: DrawerHeadProps) => {
    const { height = "h-nav-height-large", className, children } = props;

    return <div className={clsx("shrink-0 w-full rounded-b-0.5 bg-white/80 dark:bg-gray-800/90 backdrop-blur-md flex items-center shadow-left transition-all", height, className)}>{children}</div>;
};

type DrawerDefaultHeadProps = { height?: string; defaultPadding?: boolean };

export const DrawerDefaultHead = (props: DrawerDefaultHeadProps) => {
    const { height = "h-nav-height-large", defaultPadding = true } = props;
    const { close } = useDrawerProps();

    return (
        <DrawerHead height={height} className={clsx("justify-between", defaultPadding ? "px-[7vw]" : "")}>
            <RizwanLogo />
            <CloseButton onClick={close} />
        </DrawerHead>
    );
};

type DrawerBodyProps = React.ComponentPropsWithRef<"div"> & {
    defaultPadding?: boolean;
};

export const DrawerBody = (props: DrawerBodyProps) => {
    const { className, children, defaultPadding = false } = props;

    return <div className={clsx("grow overflow-y-auto", defaultPadding ? "px-2 py-1" : "", className)}>{children}</div>;
};

type DrawerFootProps = { children: React.ReactNode; defaultPadding?: boolean };

export const DrawerFoot = (props: DrawerFootProps) => {
    const { children, defaultPadding = true } = props;

    return <div className={clsx("shrink-0 w-full border-t border-t-gray-100 h-navHeight flex items-center", defaultPadding ? "px-2" : "")}>{children}</div>;
};

export default Drawer;
