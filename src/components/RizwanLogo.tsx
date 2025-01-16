import Link from "next/link";
import ThemedImage from "@/components/ThemedImage";
import rizwanLogoGray100 from "/public/img/rizwan_logo__gray-100.svg";
import rizwanLogoGray900 from "/public/img/rizwan_logo__gray-900.svg";
import rizwanLogoGradient from "/public/img/rizwan_logo__primary-to-primary-support-gradient.svg";

type RizwanLogoProps = {
    variant?: "gradient" | "blackandwhite";
    height?: number;
};

const RizwanLogo = (props: RizwanLogoProps) => {
    const { height = 40, variant = "gradient" } = props;

    return (
        <Link href="/">
            <ThemedImage
                className="transition-all duration-300"
                darkImageSrc={
                    variant === "blackandwhite"
                        ? rizwanLogoGray100
                        : rizwanLogoGradient
                }
                lightImageSrc={
                    variant === "blackandwhite"
                        ? rizwanLogoGray900
                        : rizwanLogoGradient
                }
                alt="Rizwan"
                height={height}
            />
        </Link>
    );
};

export default RizwanLogo;
