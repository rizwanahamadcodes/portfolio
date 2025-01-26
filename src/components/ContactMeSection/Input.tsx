import { visitorSchema } from "@/schemas/visitorSchema";
import { ErrorMessage } from "@hookform/error-message";
import clsx from "clsx";
import {
    DeepMap,
    FieldError,
    FieldErrors,
    FieldValues,
    Path,
    UseFormGetFieldState,
    UseFormRegister,
} from "react-hook-form";

export const getInputClasses = () => {
    const baseInputClasses =
        "w-full rounded-full bg-gray-50 px-1 py-0.5 shadow-inner transition focus:outline-none dark:bg-gray-900 ring-offset-2 ring-offset-white dark:ring-offset-gray-800 placeholder:text-gray-600 hover:ring-primary/70 focus:ring-primary/70 hover:ring focus:ring";

    const inValidInputClasses =
        "ring !ring-[red]/70 !hover:ring-[red]/70 !focus:ring-[red]/70";

    const validInputClasses =
        "ring !ring-[green]/70 !hover:ring-[green]/70 !focus:ring-[green]/70";

    return { baseInputClasses, validInputClasses, inValidInputClasses };
};

export type CustomFieldProps<Field> = Field & {
    name: keyof visitorSchema;
    register: UseFormRegister<visitorSchema>;
    getFieldState: UseFormGetFieldState<visitorSchema>;
    isSubmitted: boolean;
};

type InputProps<TFormValues extends FieldValues> =
    React.ComponentPropsWithoutRef<"input"> & {
        register: UseFormRegister<TFormValues>;
        isSubmitted: boolean;
        name: Path<TFormValues>;
        errors: FieldErrors;
    };

const Input = <TFormValues extends FieldValues>(
    props: InputProps<TFormValues>
) => {
    const { name, register, errors, isSubmitted, ...otherProps } = props;
    const error = errors[name];
    const { baseInputClasses, validInputClasses, inValidInputClasses } =
        getInputClasses();

    return (
        <div>
            <input
                {...register(name)}
                className={clsx(
                    baseInputClasses,
                    error && inValidInputClasses,
                    !error && isSubmitted && validInputClasses
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

export default Input;
