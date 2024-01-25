import clsx from "clsx";
import {
    CustomFieldProps,
    getInputClasses,
} from "@/components/ContactMeSection/CustomInput";

const CustomTextarea = (
    props: CustomFieldProps<React.ComponentPropsWithoutRef<"textarea">>
) => {
    const { name, register, getFieldState, isSubmitted, ...otherProps } = props;
    const { error } = getFieldState(name);

    const { baseInputClasses, validInputClasses, inValidInputClasses } =
        getInputClasses();

    return (
        <div>
            <textarea
                {...register(name)}
                className={clsx(
                    baseInputClasses,
                    error ? inValidInputClasses : "",
                    !error && isSubmitted ? validInputClasses : "",
                    "h-9 resize-none !rounded-1"
                )}
                {...otherProps}
            />
            {error ? (
                <p className="mt-0.5 text-secondary dark:text-secondary">
                    {error?.message}
                </p>
            ) : (
                <></>
            )}
        </div>
    );
};

export default CustomTextarea;
