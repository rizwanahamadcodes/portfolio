"use client";

import Drawer, { DrawerBody, DrawerDefaultHead, DrawerProps } from "@/components/Drawer/Drawer";
import ThemeToggler from "@/components/ThemeToggler";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import NavMenu from "../Navbar/NavMenu/NavMenu";
import { navLinks } from "../Navbar/Navbar";
import { FiSettings } from "react-icons/fi";

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
                <DrawerDefaultHead height={viewportTouchingStatus?.topTouchedTop ? "h-navHeight-large" : "h-navHeight-small"} />
                <DrawerBody className="p-1 flex flex-col">
                    <NavMenu direction="vertical" navLinks={navLinks} />
                    <div className="px-0.75 mt-auto">
                        <p className="h-2.75 rounded-full items-center text-0.875 font-medium capitalize gap-0.5 transition-all duration-300 relative flex">
                            <FiSettings className="text-1.25 relative z-10" />
                            Settings
                        </p>
                        <div className="flex items-center gap-2">
                            <p className="text-0.875 font-medium capitalize">Dark Mode</p>
                            <ThemeToggler />
                        </div>
                    </div>
                </DrawerBody>
            </Drawer>
        </span>
    );
};

export default NavDrawer;
