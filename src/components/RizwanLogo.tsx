import ThemedImage from "@/components/ThemedImage";
import Link from "next/link";

type RizwanLogoProps = {
    variant?: "gradient" | "blackandwhite";
    width?: number;
};

const RizwanLogo = (props: RizwanLogoProps) => {
    const { width = 120, variant = "gradient" } = props;

    return (
        <Link href="/" className="relative inline-flex items-start justify-start">
            <ThemedImage height={0} width={width} className="transition-all duration-300 object-fill" darkImageSrc={variant === "blackandwhite" ? "img/rizwan_logo__gray-100.svg" : "img/rizwan_logo__primary-to-primary-support-gradient.svg"} lightImageSrc={variant === "blackandwhite" ? "img/rizwan_logo__gray-900.svg" : "img/rizwan_logo__primary-to-primary-support-gradient.svg"} alt="Rizwan" />
        </Link>
    );
};

export default RizwanLogo;
