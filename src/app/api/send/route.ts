'use server'

import React from 'react'
import EmailTemplate from '@/components/EmailTemplate'
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
    const formData = await request.json()

    try {
        const data = await resend.emails.send({
            from: 'Portfolio <onboarding@resend.dev>',
            to: 'rizwanahamadcodes@gmail.com',
            subject: 'Hello world',
            react: React.createElement(EmailTemplate, {
                fullName: formData.fullName,
            }),
        })
        return NextResponse.json({ status: 'ok' })
    } catch (error) {}
}
