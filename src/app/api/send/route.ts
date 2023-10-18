'use server'

import React from 'react'
import EmailTemplate from '@/components/EmailTemplate'
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(data: FormData) {
    try {
        const data = await resend.emails.send({
            from: 'Portfolio <onboarding@resend.dev>',
            to: 'rizwanahamadcodes@gmail.com',
            subject: 'Hello world',
            react: React.createElement(EmailTemplate, {
                firstName: 'Johnny Depp' as string,
            }),
        })
        return {
            status: 'success',
            message: 'Email sent successfully.',
        }
    } catch (error) {
        return {
            status: 'error',
            message:
                'An error occured while sending the email, please try again.',
        }
    }
}
