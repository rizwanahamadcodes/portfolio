"use client";

import Hamburger from "@/components/Hamburger/Hamburger";
import { useToggle } from "@/hooks/useToggle";
import Drawer, {
    DrawerBody,
    DrawerDefaultHead,
} from "@/components/Drawer/Drawer";
import NavMenuWithTabIndicator from "@/components/Navbar/NavMenuWithTabIndicator";
import ThemeToggler from "@/components/ThemeToggler";

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
                <DrawerBody>
                    <NavMenuWithTabIndicator
                        onNavItemClick={close}
                        direction="vertical"
                    />

                    <div className="flex h-navHeight-small items-center justify-between px-[7vw]">
                        <ThemeToggler />
                    </div>
                </DrawerBody>
            </Drawer>
        </span>
    );
};

export default NavDrawer;
