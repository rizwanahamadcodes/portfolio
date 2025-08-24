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
        <nav className={clsx("fixed z-50 w-full flex items-center", viewportTouchingStatus?.topTouchedTop ? "h-navHeight-large" : " h-navHeight-small")}>
            {/* blur backdrop */}
            <div className="h-full w-full absolute p-0.5">
                <div className={clsx("relative h-full w-full backdrop-blur-md transition-all rounded-full", viewportTouchingStatus?.topTouchedTop ? "" : "shadow-lg shadow-black/[0.05] dark:shadow-black/20 bg-white/10 dark:bg-black/10")}></div>
            </div>
            <div className="h-full w-full absolute py-0.5">
                <Container className="h-full relative flex items-center justify-between">
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
            </div>
        </nav>
    );
};

export default Navbar;
