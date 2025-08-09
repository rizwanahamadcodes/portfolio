import clsx from "clsx";

type OrbitingSystemProps = React.ComponentPropsWithoutRef<"div">;

const OrbitingSystem = (props: OrbitingSystemProps) => {
    const { children, className, ...otherProps } = props;

    return (
        <div className={clsx("aspect-square", className)} {...otherProps}>
            {children}
        </div>
    );
};

export default OrbitingSystem;
