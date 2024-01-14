import cn from './utils/cn'

const Hamburger = (props: React.ComponentPropsWithoutRef<'div'>) => {
    const { className, ...otherProps } = props

    return (
        <div
            className={cn(
                'flex h-[20px] w-7 cursor-pointer flex-col',
                className
            )}
            {...otherProps}
        >
            {Array(3)
                .fill(null)
                .map((_, index) => (
                    <div
                        key={index}
                        className="h-[2px] w-full m-[7px] rounded-full bg-primary dark:bg-gray-100"
                    ></div>
                ))}
        </div>
    )
}

export default Hamburger
