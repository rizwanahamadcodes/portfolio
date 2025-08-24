import clsx from "clsx";

type SectionProps = {
    children?: React.ReactNode;
    className?: string;
};

const Section = (props: SectionProps) => {
    const { children, className } = props;

    return <section className={clsx("py-2", className)}>{children}</section>;
};

export default Section;

type SectionTitleProps = {
    className?: string;
    children?: React.ReactNode;
    defaultBottomMargin?: boolean;
};

export const SectionTitle = (props: SectionTitleProps) => {
    const { children, className, defaultBottomMargin = false } = props;

    return (
        <h2
            className={clsx(
                "text-1.5 leading-1 font-medium text-primary dark:text-primary sm:text-2.25",
                defaultBottomMargin && "mb-0.5",
                className
            )}>
            {children}
        </h2>
    );
};

type SectionSubtitleProps = {
    className?: string;
    children?: React.ReactNode;
    defaultBottomMargin?: boolean;
};

export const SectionSubtitle = (props: SectionSubtitleProps) => {
    const { children, className, defaultBottomMargin } = props;

    return (
        <p
            className={clsx(
                "font-medium text-1.125 sm:text-1.25 leading-1.25 text-gray-700 dark:text-gray-300",
                defaultBottomMargin && "mb-2",
                className
            )}>
            {children}
        </p>
    );
};

type SectionCategoryTitleProps = {
    className?: string;
    children?: React.ReactNode;
    defaultBottomMargin?: boolean;
};

export const SectionCategoryTitle = (props: SectionCategoryTitleProps) => {
    const { children, defaultBottomMargin, className } = props;

    return (
        <h3
            className={clsx(
                defaultBottomMargin && "mb-1",
                "text-1.25 leading-1.75 text-gray-900 dark:text-gray-100 font-medium",
                className
            )}>
            {children}
        </h3>
    );
};
