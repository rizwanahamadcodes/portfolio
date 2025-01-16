'use client'

import { useTheme } from 'next-themes'
import Image, { ImageProps } from 'next/image'
import React from 'react'

interface ThemedImageProps extends Omit<ImageProps, 'src'> {
    lightImageSrc: string
    darkImageSrc: string
}

const ThemedImage: React.FC<ThemedImageProps> = (props) => {
    const { lightImageSrc, darkImageSrc, alt, className, ...otherProps } = props
    const { theme } = useTheme()
    const imageSrc = theme == 'light' ? lightImageSrc : darkImageSrc

    return (
        <Image className={className} src={imageSrc} alt={alt} {...otherProps} />
    )
}

export default ThemedImage
