import Button, { ButtonIcon } from "@/components/Button/Button";
import CustomTextarea from "@/components/ContactMeSection/CustomTextArea";
import { SectionCategoryTitle } from "@/components/Section/Section";
import { visitorSchema } from "@/schemas/visitorSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { useCallback, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { BiLoaderAlt } from "react-icons/bi";
import Input from "@/components/ContactMeSection/Input";

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        getFieldState,
        formState: { errors, isSubmitted, isSubmitting, isSubmitSuccessful },
    } = useForm<visitorSchema>({ resolver: zodResolver(visitorSchema) });

    const [feedback, setFeedback] = useState("");

    const memoizedReset = useCallback(() => {
        reset();
    }, [reset]);

    useEffect(() => {
        memoizedReset();
    }, [isSubmitSuccessful, memoizedReset]);

    const onSubmit: SubmitHandler<visitorSchema> = async (data) => {
        try {
            const response = await fetch("/api/send", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.ok) {
                setFeedback("Message was sent successfully, we will get in touch soon");
            } else {
                setFeedback("Apologies there was an internal error, please try again");
            }
        } catch (error) {
            setFeedback("Apologies there was an internal error, please try again");
        }
    };

    return (
        <div className="grow rounded-1 bg-white p-1 shadow-sm dark:bg-gray-800 md:max-w-md">
            <SectionCategoryTitle defaultBottomMargin>Send me a message</SectionCategoryTitle>
            <form className="flex flex-col gap-1" onSubmit={handleSubmit(onSubmit)}>
                <Input name="fullName" type="text" placeholder="Full name" register={register} errors={errors} isSubmitted={isSubmitted}></Input>
                <Input name="email" type="email" placeholder="Email address" register={register} errors={errors} isSubmitted={isSubmitted} />
                <Input name="subject" type="text" placeholder="Subject" register={register} errors={errors} isSubmitted={isSubmitted} />
                <CustomTextarea name="userMessage" maxLength={500} errors={errors} placeholder="Message..." register={register} isSubmitted={isSubmitted}></CustomTextarea>

                <Button className={clsx("w-full lg:w-auto")} disabled={isSubmitting} type="submit" colorScheme={isSubmitting ? "themed-gray" : "primary"}>
                    {isSubmitting ? (
                        <>
                            <ButtonIcon icon={BiLoaderAlt} className="animate-spin" />
                            Sending message...
                        </>
                    ) : (
                        "Send message"
                    )}
                </Button>
                {feedback !== "" && <p>{feedback}</p>}
            </form>
        </div>
    );
};

export default ContactForm;
