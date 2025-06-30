import Container from "@/components/Container/Container";
import NavDrawer from "@/components/NavDrawer/NavDrawer";
import RizwanLogo from "@/components/RizwanLogo";
import ThemeToggler from "@/components/ThemeToggler";
import pathConstants, { PathConstant } from "@/route/pathConstants";
import clsx from "clsx";
import { AiFillPhone, AiOutlinePhone } from "react-icons/ai";
import { GoHome, GoHomeFill } from "react-icons/go";
import {
    PiProjectorScreenChart,
    PiProjectorScreenChartFill,
} from "react-icons/pi";
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

    return (
        <div>
            <nav
                className={clsx(
                    "border-2 border-white/70 fixed dark:border-gray-900/70 top-0 z-50 w-full backdrop-blur-sm transition-all m-0.5 rounded-full",
                    viewportTouchingStatus?.topTouchedTop
                        ? "h-navHeight-large"
                        : "h-navHeight-small bg-white/50 dark:bg-gray-900/50"
                )}>
                <Container className="h-full flex items-center justify-between">
                    <div className="w-[129px]">
                        <RizwanLogo
                            height={
                                viewportTouchingStatus?.topTouchedTop ? 50 : 40
                            }
                        />
                    </div>

                    <NavMenu className="hidden lg:flex" navLinks={navLinks} />

                    <div className="min-w-[64px]">
                        <ThemeToggler className="hidden lg:block" />
                    </div>
                    <NavDrawer
                        viewportTouchingStatus={viewportTouchingStatus}
                    />
                </Container>
            </nav>
        </div>
    );
};

export default Navbar;
