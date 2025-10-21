"use client";
import { PathConstant } from "@/route/pathConstants";
import clsx from "clsx";
import { motion } from "framer-motion";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction, useState } from "react";
import { IconType } from "react-icons";

export type NavMenuProps = {
    navLinks: PathConstant[];
    className?: string;
    direction?: "horizontal" | "vertical";
};

const NavMenu = (props: NavMenuProps) => {
    const { navLinks, direction = "horizontal", className } = props;

    const stylesAsPerDirection = {
        horizontal: "flex-row",
        vertical: "flex-col",
    };
    const [hoveredItem, setHoveredItem] = useState<PathConstant["path"] | null>(null);
    const pathname = usePathname();

    const activeIndex = navLinks.findIndex((nav) => nav.path === pathname);

    return (
        <ul className={clsx("flex", stylesAsPerDirection[direction], className)} onMouseLeave={() => setHoveredItem(null)}>
            {navLinks.map((navLink, index) => {
                const isActive = index === activeIndex;
                const isPrevActive = index === activeIndex - 1;
                const isNextActive = index === activeIndex + 1;

                // compute conditional margin only where needed
                let marginClass = "";
                if (direction === "horizontal") {
                    if (isActive) {
                        // add gap to left if not first, right if not last
                        if (index > 0 && index < navLinks.length - 1) marginClass = "mx-0.25";
                        else if (index === 0) marginClass = "mr-0.25";
                        else if (index === navLinks.length - 1) marginClass = "ml-0.25";
                    } else if (isPrevActive) {
                        marginClass = "mr-0.25";
                    } else if (isNextActive) {
                        marginClass = "ml-0.25";
                    }
                } else {
                    // vertical version
                    if (isActive) {
                        if (index > 0 && index < navLinks.length - 1) marginClass = "my-0.25";
                        else if (index === 0) marginClass = "mb-0.25";
                        else if (index === navLinks.length - 1) marginClass = "mt-0.25";
                    } else if (isPrevActive) {
                        marginClass = "mb-0.25";
                    } else if (isNextActive) {
                        marginClass = "mt-0.25";
                    }
                }

                return (
                    <li key={navLink.path} className={clsx(marginClass, "transition-all")}>
                        <NavItem direction={direction} hoveredItem={hoveredItem} setHoveredItem={setHoveredItem} navLink={navLink} />
                    </li>
                );
            })}
        </ul>
    );
};

type NavItemProps = {
    navLink: PathConstant;
    className?: string;
    direction?: NavMenuProps["direction"];
    hoveredItem: string | null;
    setHoveredItem: Dispatch<SetStateAction<string | null>>;
};

export const NavItem = (props: NavItemProps) => {
    const { navLink, hoveredItem, setHoveredItem, direction, className, ...otherProps } = props;
    const { path, label, icon, activeIcon } = navLink;

    const pathname = usePathname();
    const isActive = path === pathname;
    return (
        <Link
            href={path}
            className={clsx("flex gap-0.5 h-2.75 px-1.375 items-center text-0.875 font-medium capitalize transition-all duration-300 relative", isActive ? "text-primary-600 dark:text-primary-200" : "text-gray-700 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200")}
            onMouseEnter={() => {
                if (!isActive) {
                    setHoveredItem(path);
                }
            }}
            onMouseLeave={() => {
                if (!isActive) {
                    setHoveredItem(null);
                }
            }}>
            {hoveredItem === path && !isActive && (
                <motion.div
                    layoutId={`nav-hover-background-${direction}`} // Must be unique if reused elsewhere
                    className="absolute h-full w-full bg-black/5 dark:bg-white/5 top-0 left-0 rounded-full pointer-events-none z-1"
                    transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                    }}
                />
            )}
            {isActive && (
                <motion.div
                    layoutId={`nav-active-background-${direction}`} // Must be unique if reused elsewhere
                    className="absolute h-full w-full bg-primary-100 dark:bg-primary-800 top-0 left-0 rounded-full pointer-events-none z-1"
                    transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                    }}
                />
            )}

            <NavIcon isActive={isActive} icon={icon} activeIcon={activeIcon} className="relative z-2" />
            <span className="relative z-2">{label}</span>
        </Link>
    );
};

export default NavMenu;

interface NavIconProps {
    isActive: boolean;
    icon?: IconType;
    className?: string;
    activeIcon?: IconType;
}

export const NavIcon: React.FC<NavIconProps> = ({ className, isActive, icon: Icon, activeIcon: ActiveIcon }) => {
    if (isActive && ActiveIcon) {
        return <ActiveIcon className={clsx("text-1.25", className)} />;
    }

    if (!isActive && Icon) {
        return <Icon className={clsx("text-1.25", className)} />;
    }

    return null;
};
