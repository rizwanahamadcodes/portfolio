import clsx from "clsx";
// import { useOrbitingSystemContext } from "@/components/OrbitingSystem";
import { IconType } from "react-icons";

export type OrbitingObject = {
    label?: string;
    icon?: IconType;
};

type OrbitProps = React.ComponentPropsWithoutRef<"div"> & {
    orbitingObjects?: OrbitingObject[];
    orbitIndex: number;
};
const Orbit = (props: OrbitProps) => {
    const { children, orbitIndex, orbitingObjects = [], className, ...otherProps } = props;

    return (
        <div
            style={{
                height: `calc(100% - ${orbitIndex * 8}rem)`,
                width: `calc(100% - ${orbitIndex * 8}rem)`,
            }}
            className={clsx("absolute w-full h-full rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-radial-gradient from-transparent to-gray-200 dark:to-black from-40%", className)}
            {...otherProps}>
            {children}

            {orbitingObjects.map((orbitingObject, i) => {
                return (
                    <div
                        key={orbitingObject.label}
                        className={clsx("absolute h-full w-full top-0 left-0", orbitIndex % 2 == 0 ? "animate-spin-anticlockwise" : "animate-spin-clockwise")}
                        style={{
                            animationDuration: `${15 - orbitIndex * 1.5}s`, // Or tweak this formula to your liking
                        }}>
                        <OrbitingObject orbitIndex={orbitIndex} key={orbitingObject.label} orbitingObject={orbitingObject} noOfOrbitingObjects={orbitingObjects.length} objectsIndex={i} />
                    </div>
                );
            })}
        </div>
    );
};

type OrbitingObjectProps = React.ComponentPropsWithoutRef<"div"> & {
    orbitingObject: OrbitingObject;
    noOfOrbitingObjects: number;
    objectsIndex: number;
    orbitIndex: number;
};

export const OrbitingObject = (props: OrbitingObjectProps) => {
    const { orbitingObject, orbitIndex, noOfOrbitingObjects, objectsIndex, children, className, ...otherProps } = props;
    const { icon: Icon } = orbitingObject;
    const rotationValue = (objectsIndex + 1) * (360 / noOfOrbitingObjects);

    return (
        <div
            style={{
                transform: `rotate(${rotationValue}deg)`,
            }}
            key={orbitingObject.label}
            className={clsx("h-full w-full absolute top-0 left-0 roudned-full")}>
            <div className={clsx("size-3 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2")}>
                <div
                    className="absolute size-full"
                    style={{
                        transform: `rotate(-${rotationValue}deg)`,
                    }}>
                    <div
                        className={clsx("flex items-center justify-center size-full absolute rounded-full bg-gradient-to-b from-primary-700 to-primary shadow-lg shadow-primary/50  dark:shadow-primary-700/50", orbitIndex % 2 == 0 ? "animate-spin-clockwise" : "animate-spin-anticlockwise")}
                        style={{
                            animationDuration: `${15 - orbitIndex * 1.5}s`, // Or tweak this formula to your liking
                        }}>
                        <Icon className="text-1.25 text-white" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Orbit;
