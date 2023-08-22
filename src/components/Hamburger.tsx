interface HamburgerProps extends React.HTMLProps<HTMLDivElement> {}

const Hamburger: React.FC<HamburgerProps> = (props) => {
    const { className, ...rest } = props

    return (
        <div
            className={`${className} flex h-[19px] w-7 cursor-pointer flex-col justify-between`}
            {...rest}
        >
            {Array(3)
                .fill(null)
                .map((_, index) => (
                    <div
                        key={index}
                        className="h-[3px] w-full rounded-full bg-primary dark:bg-gray-100"
                    ></div>
                ))}
        </div>
    )
}

export default Hamburger
