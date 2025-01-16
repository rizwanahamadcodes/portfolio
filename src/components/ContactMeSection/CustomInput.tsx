import { visitorSchema } from "@/schemas/visitorSchema";
import clsx from "clsx";
import { UseFormGetFieldState, UseFormRegister } from "react-hook-form";

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

const CustomInput = (
    props: CustomFieldProps<React.ComponentPropsWithoutRef<"input">>
) => {
    const { name, register, getFieldState, isSubmitted, ...otherProps } = props;
    const { error, isDirty } = getFieldState(name);

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
            {error ? (
                <p className="mt-0.5 text-secondary dark:text-secondary">
                    {error?.message}
                </p>
            ) : (
                ""
            )}
        </div>
    );
};

export default CustomInput;
