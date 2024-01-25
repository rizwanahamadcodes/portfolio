"use client";

import clsx from "clsx";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { NavMenuProps } from "./NavMenu";
import { TabIndicatorBoundsType } from "../TabIndicator";
import {
    Dispatch,
    SetStateAction,
    useCallback,
    useEffect,
    useRef,
} from "react";

type NavItemProps = LinkProps & {
    viewportTouchingStatus?: {
        topTouchedTop: boolean;
        bottomTouchedTop: boolean;
    };
    children: React.ReactNode;
    onNavItemClick?: Function;
    direction?: NavMenuProps["direction"];
    setTabIndicatorBounds?: Dispatch<SetStateAction<TabIndicatorBoundsType>>;
};

const NavItem = (props: NavItemProps) => {
    const {
        viewportTouchingStatus,
        children,
        setTabIndicatorBounds,
        direction = "horizontal",
        onNavItemClick,
        href,
        ...otherProps
    } = props;
    const isLinkActive = usePathname() === href;
    const navItemRef = useRef<HTMLAnchorElement | null>(null);
    console.log(viewportTouchingStatus);

    const setTabIndicatorBoundsFromElement = useCallback(
        (el: HTMLElement) => {
            setTabIndicatorBounds &&
                setTabIndicatorBounds({
                    height: el.clientHeight,
                    width: el.clientWidth,
                    left: el.offsetLeft,
                    top: el.offsetTop,
                });
        },
        [setTabIndicatorBounds]
    );

    useEffect(() => {
        const navItem = navItemRef.current;
        if (!navItem) {
            return;
        }

        if (navItemRef.current)
            if (isLinkActive) {
                setTabIndicatorBoundsFromElement(navItem);
            }
    }, [isLinkActive, direction, navItemRef, setTabIndicatorBoundsFromElement]);

    const stylesAsPerDirection = {
        horizontal: clsx(
            "px-1.75  hover:bg-gray-50 hover:dark:bg-gray-850/30",
            viewportTouchingStatus?.topTouchedTop
                ? "h-navHeight-large"
                : "h-navHeight-small",
            viewportTouchingStatus?.bottomTouchedTop && isLinkActive
                ? "bg-gray-500/20 dark:bg-gray-500/20"
                : ""
        ),
        vertical: clsx(
            "h-4 pl-[7vw] border-b border-b-gray-100 dark:border-b-gray-700 dark:hover:bg-gray-750",
            isLinkActive ? "bg-gray-50 dark:bg-gray-750" : ""
        ),
    };

    const handleNavItemClick = (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
        const clickedNavLink = e.target as HTMLAnchorElement;
        setTabIndicatorBoundsFromElement(clickedNavLink);
    };

    return (
        <Link
            ref={navItemRef}
            onClick={(e) => {
                handleNavItemClick(e);
                onNavItemClick && onNavItemClick();
            }}
            href={href}
            {...otherProps}
            className={clsx(
                "flex items-center text-0.875 font-semibold uppercase tracking-widest transition-all/5",
                stylesAsPerDirection[direction],
                isLinkActive
                    ? "dark:text-primary-200 text-primary-600 hover:dark:text-primary-100 hover:text-primary-800"
                    : "dark:text-gray-300 text-gray-600 hover:text-gray-800 hover:dark:text-gray-100"
            )}>
            {children}
        </Link>
    );
};

export default NavItem;
