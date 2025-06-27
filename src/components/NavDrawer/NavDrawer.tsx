"use client";

import Hamburger from "@/components/Hamburger/Hamburger";
import { useToggle } from "@/hooks/useToggle";
import Drawer, {
    DrawerBody,
    DrawerDefaultHead,
} from "@/components/Drawer/Drawer";
import NavMenuWithTabIndicator from "@/components/Navbar/NavMenuWithTabIndicator";
import ThemeToggler from "@/components/ThemeToggler";
import NavMenu from "../Navbar/NavMenu/NavMenu";
import { navLinks } from "../Navbar/Navbar";

type NavDrawerProps = {
    viewportTouchingStatus?: {
        topTouchedTop: boolean;
        bottomTouchedTop: boolean;
    };
};

const NavDrawer = (props: NavDrawerProps) => {
    const { viewportTouchingStatus } = props;

    const { isOpen, open, close } = useToggle(false);

    return (
        <span className="lg:hidden">
            <Hamburger className="lg:hidden" onClick={open} />
            <Drawer isOpen={isOpen} close={close} open={open}>
                <DrawerDefaultHead
                    height={
                        viewportTouchingStatus?.topTouchedTop
                            ? "h-navHeight-large"
                            : "h-navHeight-small"
                    }
                />
                <DrawerBody className="p-1 flex flex-col gap-2">
                    <NavMenu direction="vertical" navLinks={navLinks} />
                    <ThemeToggler />
                </DrawerBody>
            </Drawer>
        </span>
    );
};

export default NavDrawer;
