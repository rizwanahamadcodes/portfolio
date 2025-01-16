import { visitorSchema } from "@/schemas/visitorSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { SectionCategoryTitle } from "../Section/Section";
import CustomInput from "./CustomInput";
import CustomTextarea from "./CustomTextArea";
import Button, { ButtonIcon } from "../Button/Button";
import clsx from "clsx";
import { BiLoaderAlt } from "react-icons/bi";

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        getFieldState,
        formState: { errors, isSubmitted, isSubmitting, isSubmitSuccessful },
    } = useForm<visitorSchema>({ resolver: zodResolver(visitorSchema) });

    const [success, setSuccess] = useState(false);
    const [feedback, setFeedback] = useState("");

    useEffect(() => {
        reset();
    }, [isSubmitSuccessful]);

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
                setFeedback(
                    "Message was sent successfully, we will get in touch soon"
                );
            } else {
                setFeedback(
                    "Apologies there was an internal error, please try again"
                );
                console.log(response);
            }
        } catch (error) {
            setFeedback(
                "Apologies there was an internal error, please try again"
            );
            console.log(error);
        }
    };

    return (
        <div className="grow rounded-1 bg-white p-1 shadow-soft dark:bg-gray-800 md:max-w-md">
            <SectionCategoryTitle defaultBottomMargin>
                Send me a message
            </SectionCategoryTitle>
            <form
                className="flex flex-col gap-1"
                onSubmit={handleSubmit(onSubmit)}>
                <CustomInput
                    name="fullName"
                    type="text"
                    placeholder="Full name"
                    register={register}
                    getFieldState={getFieldState}
                    isSubmitted={isSubmitted}></CustomInput>
                <CustomInput
                    name="email"
                    type="email"
                    placeholder="Email address"
                    register={register}
                    getFieldState={getFieldState}
                    isSubmitted={isSubmitted}
                />
                <CustomInput
                    name="subject"
                    type="text"
                    placeholder="Subject"
                    register={register}
                    getFieldState={getFieldState}
                    isSubmitted={isSubmitted}
                />
                <CustomTextarea
                    name="userMessage"
                    maxLength={500}
                    placeholder="Message..."
                    register={register}
                    getFieldState={getFieldState}
                    isSubmitted={isSubmitted}></CustomTextarea>

                <Button
                    className={clsx("w-full shadow lg:w-auto text-white")}
                    disabled={isSubmitting}
                    type="submit"
                    colorScheme={isSubmitting ? "themed-gray" : "primary"}>
                    {isSubmitting ? (
                        <>
                            <ButtonIcon
                                icon={BiLoaderAlt}
                                className="animate-spin"
                            />
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
