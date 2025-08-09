import clsx from "clsx";
import { CSSProperties } from "react";

type RipplesProps = React.ComponentPropsWithoutRef<"div"> & {
    mainCircleSize?: number;
    mainCircleOpacity?: number;
    numCircles?: number;
};

const Ripples = (props: RipplesProps) => {
    const { children, className, ...otherProps } = props;
    const { mainCircleSize = 210, mainCircleOpacity = 0.24, numCircles = 8 } = props;
    //  [mask-image:linear-gradient(to_bottom,white,transparent)]
    return (
        <div className={clsx("pointer-events-none absolute inset-0 select-none ", className)} {...otherProps}>
            {Array.from({ length: numCircles }, (_, i) => {
                const size = mainCircleSize + i * 70;
                const opacity = mainCircleOpacity - i * 0.03;
                const animationDelay = `${i * 0.06}s`;
                const borderStyle = "solid";
                return (
                    <div
                        key={i}
                        className={`absolute animate-ripple rounded-full border bg-black/25 dark:bg-white/25 shadow-xl `}
                        style={
                            {
                                "--i": i,
                                width: `${size}px`,
                                height: `${size}px`,
                                opacity,
                                animationDelay,
                                borderStyle,
                                borderWidth: "1px",
                                // borderColor: `var(--foreground)`,
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%) scale(1)",
                            } as CSSProperties
                        }
                    />
                );
            })}
        </div>
    );
};

export default Ripples;
