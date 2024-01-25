"use client";

import { useTheme } from "next-themes";
import Image, { ImageProps } from "next/image";

type ThemedImageProps = Omit<ImageProps, "src"> & {
    lightImageSrc: string;
    darkImageSrc: string;
};

const ThemedImage = (props: ThemedImageProps) => {
    const { lightImageSrc, darkImageSrc, alt, className, ...otherProps } =
        props;
    const { theme } = useTheme();
    const imageSrc = theme == "light" ? lightImageSrc : darkImageSrc;

    return (
        <Image className={className} src={imageSrc} alt={alt} {...otherProps} />
    );
};

export default ThemedImage;
