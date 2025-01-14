import Container from "@/components/Container/Container";
import NavDrawer from "@/components/NavDrawer/NavDrawer";
import NavMenuWithTabIndicator from "@/components/Navbar/NavMenuWithTabIndicator";
import RizwanLogo from "@/components/RizwanLogo";
import ThemeToggler from "@/components/ThemeToggler";
import clsx from "clsx";

type NavbarProps = {
    viewportTouchingStatus?: {
        topTouchedTop: boolean;
        bottomTouchedTop: boolean;
    };
};

const Navbar = (props: NavbarProps) => {
    const { viewportTouchingStatus } = props;

    return (
        <div>
            <nav
                className={clsx(
                    "fixed top-0 z-50 w-full bg-white/50 backdrop-blur-sm transition-all dark:bg-gray-900/50",
                    viewportTouchingStatus?.topTouchedTop
                        ? "h-navHeight-large"
                        : "h-navHeight-small shadow"
                )}>
                <Container className="h-full flex items-center justify-between">
                    <div className="w-[129px]">
                        <RizwanLogo
                            height={
                                viewportTouchingStatus?.topTouchedTop ? 50 : 40
                            }
                        />
                    </div>

                    <NavMenuWithTabIndicator
                        className="hidden lg:block"
                        viewportTouchingStatus={viewportTouchingStatus}
                    />
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
