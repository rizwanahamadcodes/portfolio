import Container from "@/components/Container/Container";
import Hamburger from "@/components/Hamburger/Hamburger";
import NavDrawer from "@/components/NavDrawer/NavDrawer";
import RizwanLogo from "@/components/RizwanLogo";
import ThemeToggler from "@/components/ThemeToggler";
import { useToggle } from "@/hooks/useToggle";
import pathConstants, { PathConstant } from "@/route/pathConstants";
import clsx from "clsx";
import { AiFillPhone, AiOutlinePhone } from "react-icons/ai";
import { GoHome, GoHomeFill } from "react-icons/go";
import { PiProjectorScreenChart, PiProjectorScreenChartFill } from "react-icons/pi";
import NavMenu from "./NavMenu/NavMenu";
import { BsTerminal, BsTerminalFill } from "react-icons/bs";
import { HiOutlineTerminal, HiTerminal } from "react-icons/hi";

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
        label: "Technologies",
        path: pathConstants.technologies.path,
        icon: HiOutlineTerminal,
        activeIcon: HiTerminal,
    },
    {
        label: "Projects",
        path: pathConstants.projects.path,
        icon: PiProjectorScreenChart,
        activeIcon: PiProjectorScreenChartFill,
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
        <div className="fixed w-[calc(100%_-_1rem)] z-50">
            <nav className={clsx("w-full top-0 m-0.5 transition-all rounded-full", viewportTouchingStatus?.topTouchedTop ? "h-navHeight-large border-2 border-transparent dark:border-transparent" : " backdrop-blur-sm shadow-sm dark:shadow-black/20 h-navHeight-small bg-white/60 dark:bg-gray-950/50 border-2 border-white/60 dark:border-gray-950/40")}>
                <Container className="h-full flex items-center justify-between">
                    <div className="w-[129px]">
                        <RizwanLogo height={viewportTouchingStatus?.topTouchedTop ? 50 : 40} />
                    </div>

                    <NavMenu className="hidden lg:flex" navLinks={navLinks} />

                    <div className="min-w-[64px]">
                        <ThemeToggler className="hidden lg:block" />
                    </div>

                    <NavDrawer open={open} isOpen={isOpen} close={close} viewportTouchingStatus={viewportTouchingStatus} />
                    <Hamburger className="lg:hidden" onClick={open} />
                </Container>
            </nav>
        </div>
    );
};

export default Navbar;
