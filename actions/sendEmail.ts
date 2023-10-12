'use server'

import { error } from 'console'
import { Resend } from 'resend'
import ContactFormEmail from '../email/ContactFormEmail'
import React from 'react'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (formData: FormData) => {
    const senderName = formData.get('name')
    const senderEmail = formData.get('email')
    const subject = formData.get('subject')
    const message = formData.get('message')

    // simple server side validation

    const validateString = (value: unknown) => {
        if (!value || typeof value == 'string') {
            return false
        }

        return true
    }

    if (validateString(senderEmail)) {
        return {
            error: 'Invalid sender email',
        }
    }

    if (validateString(senderName)) {
        return {
            error: 'Invalid sender name',
        }
    }

    if (validateString(message)) {
        return {
            error: 'Invalid sender message',
        }
    }

    try {
        await resend.emails.send({
            from: 'Portfolio Contact Form <onboarding@resend.dev>',
            to: 'rizwanahamadcodes@gmail.com',
            subject: subject,
            reply_to: senderEmail,
            react: React.createElement(ContactFormEmail, {
                message: message as string,
                senderEmail: senderEmail as string,
            }),
        } as any)
    } catch (er: unknown) {
        let message = ''

        if (er instanceof Error) {
            message = er.message
        } else if (er && typeof er === 'object' && 'message' in er) {
            message = String(er.message)
        } else if (typeof er == 'string') {
            message = er
        } else {
            message = 'something went wrong'
        }

        return message
    }
}
