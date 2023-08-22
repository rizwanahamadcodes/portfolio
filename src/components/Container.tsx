interface ContainerProps extends React.HTMLProps<HTMLDivElement> {
    children: React.ReactNode
}

const Container: React.FC<ContainerProps> = (props) => {
    const { children, className, ...rest } = props

    const containerClasses = `m-auto w-[86%] max-w-7xl ${className}`
    console.log(containerClasses)

    return (
        <div {...rest} className={containerClasses}>
            {children}
        </div>
    )
}

export default Container
