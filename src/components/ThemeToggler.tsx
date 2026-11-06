"use client";

import clsx from "clsx";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { IconBaseProps, IconType } from "react-icons";
import { IoIosMoon, IoIosSunny } from "react-icons/io";

type ThemeTogglerProps = React.ComponentPropsWithoutRef<"label"> & {
    label?: string;
};

const ThemeToggler = (props: ThemeTogglerProps) => {
    const { className, label, ...otherProps } = props;

    const [mounted, setMounted] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();
    const [checked, setChecked] = useState(resolvedTheme === "dark");

    const handleCheckboxChange = () => {
        setTheme(resolvedTheme == "dark" ? "light" : "dark");
    };

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        setChecked(resolvedTheme === "dark");
    }, [resolvedTheme]);

    if (!mounted) {
        return null;
    }

    return (
        <label
            className={clsx(
                label
                    ? "flex w-full cursor-pointer select-none items-center justify-between gap-2"
                    : "relative block w-4 cursor-pointer select-none rounded-full shadow-sm",
                className
            )}
            {...otherProps}>
            {label && <span className="text-0.875 font-medium capitalize text-gray-700 dark:text-gray-300">{label}</span>}
            <span className="relative block h-2 w-4 shrink-0 rounded-full shadow-sm">
                <input
                    type="checkbox"
                    className="peer/themeToggler absolute h-0 w-0 opacity-0"
                    checked={checked}
                    onChange={handleCheckboxChange}
                />

                <span className="flex h-2 w-4 items-center justify-between rounded-full bg-primary p-0.5 transition-all peer-checked/themeToggler:bg-gray-100">
                    <SunMoonIcons icon={IoIosSunny} />
                    <SunMoonIcons icon={IoIosMoon} />
                </span>
                <span className="absolute right-0.25 top-0.25 h-1.5 w-1.5 rounded-full bg-white transition-all peer-checked/themeToggler:right-2.25 peer-checked/themeToggler:bg-gray-900"></span>
            </span>
        </label>
    );
};

type SunMoonIconsProps = IconBaseProps & {
    icon: IconType;
};

const SunMoonIcons = (props: SunMoonIconsProps) => {
    const { icon: Icon, className, ...otherProps } = props;

    return (
        <Icon
            className={clsx(
                "text-1.25 text-white peer-checked/themeToggler:text-gray-900 dark:text-gray-900",
                className
            )}
            {...otherProps}></Icon>
    );
};

export default ThemeToggler;
