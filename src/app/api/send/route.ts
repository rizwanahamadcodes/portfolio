import EmailTemplate from "@/components/EmailTemplate/EmailTemplate";
import { visitorSchema } from "@/schemas/visitorSchema";
import { NextResponse } from "next/server";
import React from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    const body = await req.json();
    const result = visitorSchema.safeParse(body);

    let zodErrors = {};

    if (!result.success) {
        result.error.issues.forEach((issue) => {
            zodErrors = { ...zodErrors, [issue.path[0]]: issue.message };
        });

        return NextResponse.json(
            Object.keys(zodErrors).length > 0
                ? { errors: zodErrors }
                : { success: true }
        );
    }

    const { fullName, email, subject, message } = body;

    try {
        const data = await resend.emails.send({
            from: "Portfolio <onboarding@resend.dev>",
            to: "rizwanahamadcodes@gmail.com",
            subject: subject,
            // reply_to: email,
            react: React.createElement(EmailTemplate, {
                fullName: fullName,
                email: email,
                subject: subject,
                message: message,
            }),
        });
        return NextResponse.json(
            { message: "Email delivered successfully" },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { error: "Mail client error" },
            { status: 500 }
        );
    }
}
