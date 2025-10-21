import Container from "@/components/Container/Container";
import Hamburger from "@/components/Hamburger/Hamburger";
import NavDrawer from "@/components/NavDrawer/NavDrawer";
import RizwanLogo from "@/components/RizwanLogo";
import ThemeToggler from "@/components/ThemeToggler";
import { useToggle } from "@/hooks/useToggle";
import pathConstants, { PathConstant } from "@/route/pathConstants";
import clsx from "clsx";
import { motion } from "motion/react";
import { AiFillPhone, AiOutlinePhone } from "react-icons/ai";
import { BsFillFolderFill, BsFolder } from "react-icons/bs";
import { GoHome, GoHomeFill } from "react-icons/go";
import NavMenu from "./NavMenu/NavMenu";

type NavbarProps = {
    viewportTouchingStatus?: {
        topTouchedTop: boolean;
        bottomTouchedTop: boolean;
    };
};

export const navLinks: PathConstant[] = [
    {
        label: "Home",
        path: pathConstants.home.path,
        icon: GoHome,
        activeIcon: GoHomeFill,
    },
    {
        label: "Projects",
        path: pathConstants.projects.path,
        icon: BsFolder,
        activeIcon: BsFillFolderFill,
    },
    {
        label: "Contact Me",
        path: pathConstants.contact.path,
        icon: AiOutlinePhone,
        activeIcon: AiFillPhone,
    },
];

const Navbar = (props: NavbarProps) => {
    const { viewportTouchingStatus } = props;
    const { isOpen, open, close } = useToggle(false);

    return (
        <motion.nav className={clsx("fixed z-50 w-full flex items-center h-nav-height-small")} layoutScroll>
            {/* blur backdrop */}

            <div className="h-full w-full absolute py-0.5">
                <Container className="h-full relative flex items-center justify-between">
                    <div className="w-[130px] h-full flex items-center">
                        <RizwanLogo width={viewportTouchingStatus?.topTouchedTop ? 130 : 120} />
                    </div>
                    <div className="relative p-0.5 ">
                        <div className="h-full w-full absolute top-1/2 left-1/2 -translate-1/2">
                            <div className={clsx("relative h-full w-full backdrop-blur-sm transition-all rounded-full", viewportTouchingStatus?.topTouchedTop ? "border border-transparent shadow-none" : "shadow-lg shadow-black/5 dark:shadow-black/20 bg-white/50 dark:bg-gray-900/50  border border-white/50 dark:border-black/20")}></div>
                        </div>
                        <NavMenu className="hidden lg:flex" navLinks={navLinks} />
                    </div>

                    <div className="min-w-[64px]">
                        <ThemeToggler className="hidden lg:block" />
                    </div>

                    <NavDrawer open={open} isOpen={isOpen} close={close} viewportTouchingStatus={viewportTouchingStatus} />
                    <Hamburger className="lg:hidden" onClick={open} />
                </Container>
            </div>
        </motion.nav>
    );
};

export default Navbar;
