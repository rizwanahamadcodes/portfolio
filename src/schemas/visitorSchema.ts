import { z } from "zod";

export const visitorSchema = z.object({
    fullName: z
        .string({
            required_error: "Please enter your full name",
            invalid_type_error: "Name must be text",
        })
        .max(100, { message: "Name is too long" })
        .min(1, { message: "Please enter your full name" })
        .default(""),
    subject: z
        .string({
            required_error: "Please enter the subject",
            invalid_type_error: "Subject must be text",
        })
        .max(100, { message: "Subject is too long" })
        .min(1, { message: "Please enter a subject" })
        .default(""),
    email: z
        .string({
            required_error: "Please enter your email",
            invalid_type_error: "Email address must be a string",
        })
        .max(300, { message: "Email address is too long." })
        .email({ message: "Please enter a valid email" })
        .min(1, { message: "Please enter your email" })
        .default(""),
    userMessage: z
        .string({
            required_error: "Please enter a message",
            invalid_type_error: "Message must be text",
        })
        .max(500, {
            message:
                "Message is too long, keep the message below 500 characters or below 150 words",
        })
        .min(1, { message: "Please enter a message" })
        .default(""),
});

export type visitorSchema = z.infer<typeof visitorSchema>;
