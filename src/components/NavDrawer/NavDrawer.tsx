"use client";

import Drawer, { DrawerBody, DrawerDefaultHead, DrawerProps } from "@/components/Drawer/Drawer";
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
            <Drawer
                isOpen={isOpen}
                close={close}
                open={open}>
                <DrawerDefaultHead height={viewportTouchingStatus?.topTouchedTop ? "h-nav-height-large" : "h-nav-height-small"} />
                <DrawerBody className="p-1 flex flex-col rounded-t-0.5 bg-white/80 dark:bg-gray-800/90 backdrop-blur-md shadow-left">
                    <NavMenu
                        direction="vertical"
                        navLinks={navLinks}
                    />
                    <div className="px-0.75 mt-auto">
                        <ThemeToggler label="Dark Mode" />
                    </div>
                </DrawerBody>
            </Drawer>
        </span>
    );
};

export default NavDrawer;
