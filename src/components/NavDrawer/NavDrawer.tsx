"use client";

import Drawer, {
    DrawerBody,
    DrawerDefaultHead,
    DrawerProps,
} from "@/components/Drawer/Drawer";
import ThemeToggler from "@/components/ThemeToggler";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import NavMenu from "../Navbar/NavMenu/NavMenu";
import { navLinks } from "../Navbar/Navbar";

type NavDrawerProps = DrawerProps & {
    viewportTouchingStatus?: {
        topTouchedTop: boolean;
        bottomTouchedTop: boolean;
    };
};

const NavDrawer = (props: NavDrawerProps) => {
    const { viewportTouchingStatus, open, isOpen, close } = props;
    const pathname = usePathname();

    useEffect(() => {
        close();
    }, [pathname]);

    return (
        <span className="lg:hidden">
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
