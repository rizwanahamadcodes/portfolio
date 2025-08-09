import clsx from "clsx";
import OrbitingSystem from "../OrbitingSystem";
import Orbit, { OrbitingObject } from "@/components/Orbit";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGlobe } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiSass } from "react-icons/si";
import { TbFileCode } from "react-icons/tb";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { div } from "motion/react-client";

type HeroAnimationSectionProps = React.ComponentPropsWithoutRef<"div"> & {
    setMainCircleSize: Dispatch<SetStateAction<number>>;
};

// 🧿 Orbit 0 - Core Technologies
const coreTech: OrbitingObject[] = [
    { label: "HTML", icon: FaHtml5 },
    { label: "CSS", icon: FaCss3Alt },
    { label: "JavaScript", icon: FaJs },
];

// 🌀 Orbit 1 - Abstractions on Core
const abstractions: OrbitingObject[] = [
    { label: "TypeScript", icon: SiTypescript },
    { label: "SCSS/PostCSS", icon: SiSass },
    { label: "JSX/TSX", icon: TbFileCode },
];

// 🌐 Orbit 2 - Frameworks/Libraries
const frameworks: OrbitingObject[] = [
    { label: "React", icon: FaReact },
    { label: "Tailwind CSS", icon: SiTailwindcss },
    { label: "Next.js", icon: SiNextdotjs },
];

const HeroAnimationSection = (props: HeroAnimationSectionProps) => {
    const { children, className, setMainCircleSize, ...otherProps } = props;
    const divRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!divRef || !divRef.current) return;

        setMainCircleSize(divRef.current.getBoundingClientRect().height);
    }, [divRef, setMainCircleSize]);

    return (
        <div ref={divRef} className={clsx("w-full relative", className)} {...otherProps}>
            <OrbitingSystem>
                <Orbit orbitIndex={0} orbitingObjects={frameworks} />
                <Orbit orbitIndex={1} orbitingObjects={abstractions} />
                <Orbit orbitIndex={2} orbitingObjects={coreTech}>
                    <div className="absolute h-[calc(100%-6rem)] w-[calc(100%-6rem)] bg-primary dark:bg-primary-600 top-1/2 left-1/2 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-inner shadow-blackz flex items-center justify-center ">
                        <FaGlobe className="text-white text-3" />
                    </div>
                </Orbit>
            </OrbitingSystem>
        </div>
    );
};

export default HeroAnimationSection;
