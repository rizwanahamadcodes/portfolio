import clsx from "clsx";
import {
    FieldErrors,
    FieldValues,
    Path,
    UseFormRegister,
} from "react-hook-form";
import { getInputClasses } from "./Input";
import { ErrorMessage } from "@hookform/error-message";

type TextareaProps<TFormValues extends FieldValues> =
    React.ComponentPropsWithoutRef<"textarea"> & {
        register: UseFormRegister<TFormValues>;
        isSubmitted: boolean;
        name: Path<TFormValues>;
        errors: FieldErrors;
    };

const CustomTextarea = <TFormValues extends FieldValues>(
    props: TextareaProps<TFormValues>
) => {
    const { name, register, errors, isSubmitted, ...otherProps } = props;
    const error = errors[name];

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
            <ErrorMessage
                errors={errors}
                name={name}
                render={({ message }) => (
                    <p className="mt-0.5 text-secondary dark:text-secondary">
                        {message}
                    </p>
                )}
            />
        </div>
    );
};

export default CustomTextarea;
