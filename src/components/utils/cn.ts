import { twMerge } from 'tailwind-merge'
import { clsx, ClassValue } from 'clsx'

const can = (...inputs: ClassValue[]) => {
    return twMerge(clsx(inputs))
}
