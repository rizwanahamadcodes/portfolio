import cn from './utils/cn'

const CloseButton = () => {
    const barClasses =
        'absolute top-[50%] h-[3px] w-full translate-y-[-50%] rotate-[45deg] rounded-full bg-primary dark:bg-gray-100'
    return (
        <div className="relative flex h-7 w-7 flex-col justify-between">
            <span className={barClasses}></span>
            <span className={cn(barClasses, 'rotate-[-45deg]')}></span>
        </div>
    )
}

export default CloseButton
