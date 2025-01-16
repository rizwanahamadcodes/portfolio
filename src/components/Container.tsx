import cn from './utils/cn'

const Container: React.FC<React.HTMLProps<HTMLDivElement>> = (props) => {
    const { children, className, ...rest } = props

    return (
        <div {...rest} className={cn('m-auto w-[86%] max-w-7xl', className)}>
            {children}
        </div>
    )
}

export default Container
