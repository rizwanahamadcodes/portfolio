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
        horizontal: "flex-row gap-x-0.5",
        vertical: "flex-col gap-y-0.5",
    };
    const [hoveredItem, setHoveredItem] = useState<PathConstant["path"] | null>(null);

    return (
        <ul
            className={clsx("flex", stylesAsPerDirection[direction], className)}
            onMouseLeave={() => {
                setHoveredItem(null);
            }}>
            {navLinks.map((navLink) => {
                const { path, label, icon, activeIcon } = navLink;
                return (
                    <li key={path}>
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
            className={clsx("flex h-2.75 px-1.375 rounded-full items-center text-0.875 font-medium capitalize gap-0.5 transition-all duration-300 relative", isActive ? "text-primary-600 dark:text-primary-200" : "text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200")}
            onMouseEnter={() => {
                setHoveredItem(path);
            }}>
            {hoveredItem === path && (
                <motion.div
                    layoutId={`nav-hover-background-${direction}`} // Must be unique if reused elsewhere
                    className="absolute h-full w-full bg-gray-50 dark:bg-gray-850 top-0 left-0 rounded-full pointer-events-none z-1"
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
