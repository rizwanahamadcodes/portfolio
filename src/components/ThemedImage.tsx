'use client'
import { useTheme } from 'next-themes'
import Image, { ImageProps } from 'next/image'
import React from 'react'

interface ThemedImageProps extends Omit<ImageProps, 'src'> {
    lightImageSrc: string
    darkImageSrc: string
    alt: string
}

const ThemedImage: React.FC<ThemedImageProps> = (props) => {
    const { lightImageSrc, darkImageSrc, alt, ...otherProps } = props
    const { theme } = useTheme()
    const imageSrc = theme == 'light' ? lightImageSrc : darkImageSrc

    return <Image src={imageSrc} alt={alt} {...otherProps} />
}

export default ThemedImage
