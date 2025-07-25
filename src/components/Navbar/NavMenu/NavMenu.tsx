"use client";
import { PathConstant } from "@/route/pathConstants";
import clsx from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconType } from "react-icons";

export type NavMenuProps = {
    navLinks: PathConstant[];
    className?: string;
    direction?: "horizontal" | "vertical";
};

const NavMenu = (props: NavMenuProps) => {
    const { navLinks, direction = "horizontal", className } = props;
    const pathname = usePathname();

    const stylesAsPerDirection = {
        horizontal: "flex-row gap-x-0.5",
        vertical: "flex-col gap-y-0.5",
    };

    return (
        <ul className={clsx("flex", stylesAsPerDirection[direction], className)}>
            {navLinks.map(({ path, label, icon, activeIcon }) => {
                const isActive = path === pathname;
                return (
                    <li key={path}>
                        <Link href={path} className={clsx("flex h-2.75 px-1.375 rounded-full items-center text-0.875 font-medium capitalize gap-0.5 transition-all duration-300 relative", isActive ? "text-primary-600 dark:text-primary-200" : "text-gray-500 dark:text-gray-300 hover:text-gray-700 hover:bg-gray-100 dark:hover:text-gray-200 dark:hover:bg-gray-800")}>
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
                    </li>
                );
            })}
        </ul>
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
