import { useState } from 'react'

interface ContainerProps extends React.HTMLProps<HTMLDivElement> {
    children: React.ReactNode
}

const Container = (props: ContainerProps) => {
    const { children, className, ...rest } = props
    const [test, setTest] = useState(false)

    const containerClasses = `m-auto w-[86%] max-w-7xl ${className}`

    return (
        <div {...rest} className={containerClasses}>
            {children}
        </div>
    )
}

export default Container
