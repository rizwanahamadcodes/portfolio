import { Dispatch, SetStateAction } from "react";
import { TabIndicatorBoundsType } from "@/components/Navbar/TabIndicator";
import NavItem from "@/components/Navbar/NavMenu/NavItem";
import clsx from "clsx";

export type NavMenuProps = {
    viewportTouchingStatus?: {
        topTouchedTop: boolean;
        bottomTouchedTop: boolean;
    };
    onNavItemClick?: Function;
    direction?: "horizontal" | "vertical";
    setTabIndicatorBounds?: Dispatch<SetStateAction<TabIndicatorBoundsType>>;
};

const navLinks = [
    { label: "Home", path: "/" },
    // { label: "About Me", path: "/about-me" },
    { label: "Projects", path: "/projects" },
    { label: "Contact Me", path: "/contact-me" },
];

const NavMenu = (props: NavMenuProps) => {
    const {
        viewportTouchingStatus,
        direction = "horizontal",
        setTabIndicatorBounds,
        onNavItemClick,
    } = props;
    const stylesAsPerDirection = {
        horizontal: "flex-row",
        vertical: "flex-col",
    };

    return (
        <ul className={clsx("flex", stylesAsPerDirection[direction])}>
            {navLinks.map((navLink) => {
                return (
                    <li key={navLink.path}>
                        <NavItem
                            onNavItemClick={onNavItemClick}
                            viewportTouchingStatus={viewportTouchingStatus}
                            setTabIndicatorBounds={setTabIndicatorBounds}
                            direction={direction}
                            href={navLink.path}>
                            {navLink.label}
                        </NavItem>
                    </li>
                );
            })}
        </ul>
    );
};

export default NavMenu;
