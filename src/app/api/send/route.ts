'use server'

import EmailTemplate from '@/components/EmailTemplate'
import { NextResponse } from 'next/server'

import { error } from 'console'
import { Resend } from 'resend'
import React from 'react'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST() {
    try {
        const data = await resend.emails.send({
            from: 'Portfolio <onboarding@resend.dev>',
            to: ['testingrizwan@gmail.com'],
            subject: 'Hello world',
            react: EmailTemplate({ firstName: 'Johnny Depp' }),
        })

        return NextResponse.json(data)
    } catch (error) {
        return NextResponse.json({ error })
    }
}
