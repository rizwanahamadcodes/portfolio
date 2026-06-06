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
        <>
            {" "}
            <motion.nav
                className={clsx("fixed z-50 w-full flex items-center h-nav-height-small")}
                layoutScroll>
                <div className="h-full w-full absolute py-0.5">
                    <Container className={clsx("h-full relative flex items-center justify-between transition-all", viewportTouchingStatus?.topTouchedTop ? "" : "pl-1.25 pr-1.5")}>
                        <div className="absolute w-full h-full p-0.5 left-0">
                            <div className="h-full w-full absolute top-1/2 left-1/2 -translate-1/2">
                                <div className={clsx("relative h-full w-full backdrop-blur-sm transition-all rounded-full", viewportTouchingStatus?.topTouchedTop ? "border border-transparent shadow-none" : "shadow-lg shadow-black/5 dark:shadow-black/20 bg-white/50 dark:bg-gray-900/50  border border-white/50 dark:border-black/20")}></div>
                            </div>
                        </div>

                        <div className="w-[130px] h-full flex items-center">
                            <RizwanLogo width={viewportTouchingStatus?.topTouchedTop ? 130 : 110} />
                        </div>
                        <NavMenu
                            id="desktop-nav-menu"
                            className="hidden lg:flex"
                            navLinks={navLinks}
                        />

                        <div className="min-w-[64px]">
                            <ThemeToggler className="hidden lg:block" />
                        </div>

                        <NavDrawer
                            open={open}
                            isOpen={isOpen}
                            close={close}
                            viewportTouchingStatus={viewportTouchingStatus}
                        />
                        <Hamburger
                            className="lg:hidden"
                            onClick={open}
                        />
                    </Container>
                </div>
            </motion.nav>
            <motion.nav
                className={clsx("fixed z-50 w-full flex items-center h-fit bottom-0 py-0.5")}
                layoutScroll>
                <Container className={clsx("h-full relative flex items-center justify-center transition-all")}>
                    <div className="w-fit h-full left-0">
                        <div className={clsx("p-1 relative h-full w-full backdrop-blur-sm transition-all rounded-full", "shadow-lg shadow-black/5 dark:shadow-black/20 bg-white/50 dark:bg-gray-900/50  border border-white/50 dark:border-black/20 flex items-center justify-center")}>
                            <NavMenu
                                showLabelOnlyOnActive={true}
                                id="mobile-nav-menu"
                                className="lg:hidden flex items-center justify-center"
                                navLinks={navLinks}
                            />
                        </div>
                    </div>
                </Container>
            </motion.nav>
        </>
    );
};

export default Navbar;
