import { VariantProps, cva } from "class-variance-authority";
import clsx from "clsx";
import { IconType } from "react-icons";

export const button = cva(["font-medium rounded-full flex justify-center items-center gap-0.75 h-3 px-1 focus:outline-hidden active:scale-95 transition-all"], {
    variants: {
        variant: {
            solid: "",
            outline: "shadow-md dark:shadow-black/20 shadow-black/10 border-2 hover:shadow-lg",
            ghost: "",
        },
        colorScheme: {
            primary: "",
            "themed-gray": "",
            "themed-gray-light": "",
        },
    },

    compoundVariants: [
        {
            variant: "solid",
            colorScheme: "primary",
            className: "bg-linear-to-br from-primary to-primary-400  hover:from-primary-600 hover:to-primary text-white shadow-lg shadow-primary/30  dark:shadow-primary-700/30",
        },
        {
            variant: "solid",
            colorScheme: "themed-gray",
            className: "bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-900",
        },
        {
            variant: "solid",
            colorScheme: "themed-gray-light",
            className: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-200",
        },
        {
            variant: "outline",
            colorScheme: "primary",
            className: "text-primary border-primary",
        },
        {
            variant: "outline",
            colorScheme: "themed-gray",
            className: "border-gray-900 dark:border-gray-100 text-gray-900 dark:text-gray-100",
        },
    ],

    defaultVariants: {
        variant: "solid",
        colorScheme: "primary",
    },
});

type ButtonProps = React.ComponentPropsWithoutRef<"button"> &
    VariantProps<typeof button> & {
        children?: React.ReactNode;
        className?: string;
    };

export const Button = (props: ButtonProps) => {
    const { children, variant, className, colorScheme, ...otherProps } = props;

    return (
        <button className={clsx(button({ variant, colorScheme }), className)} {...otherProps}>
            {children}
        </button>
    );
};

type ButtonIconProps = React.ComponentPropsWithoutRef<IconType> & {
    icon: IconType;
    className?: string;
};

export const ButtonIcon = (props: ButtonIconProps) => {
    const { icon: Icon, className, ...otherProps } = props;

    return <Icon className={clsx("text-1.25", className)} {...otherProps} />;
};

export default Button;
