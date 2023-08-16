import React from 'react'

interface ContainerProps {
    children: React.ReactNode
    optionalStyles?: string
}

const Container: React.FC<ContainerProps> = ({ children, optionalStyles }) => {
    const defaultContainerClasses = 'm-auto w-[86%] max-w-7xl'
    const containerClasses = `${defaultContainerClasses} ${
        optionalStyles || ''
    }`

    return <div className={containerClasses}>{children}</div>
}

export default Container
