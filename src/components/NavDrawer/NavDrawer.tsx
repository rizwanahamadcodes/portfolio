"use client";

import Drawer, {
    DrawerBody,
    DrawerDefaultHead,
} from "@/components/Drawer/Drawer";
import Hamburger from "@/components/Hamburger/Hamburger";
import ThemeToggler from "@/components/ThemeToggler";
import { useToggle } from "@/hooks/useToggle";
import NavMenu from "../Navbar/NavMenu/NavMenu";
import { navLinks } from "../Navbar/Navbar";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

type NavDrawerProps = {
    viewportTouchingStatus?: {
        topTouchedTop: boolean;
        bottomTouchedTop: boolean;
    };
};

const NavDrawer = (props: NavDrawerProps) => {
    const { viewportTouchingStatus } = props;
    const pathname = usePathname();

    const { isOpen, open, close } = useToggle(false);
    useEffect(() => {
        close();
    }, [pathname]);

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
