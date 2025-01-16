'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (formData: FormData) => {
    console.log('Running on server')
    console.log()

    resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'rizwanahamadcodes@gmail.com',
        subject: formData.get('subject'),
        text: formData.get('message'),
    } as any)
}
