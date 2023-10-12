'use client'

import Button from '@/components/Button'
import Section, {
    SectionCategoryTitle,
    SectionSubtitle,
    SectionTitle,
} from '@/components/Section'
import cn from '@/components/utils/cn'
import React from 'react'
import { sendEmail } from '../../../actions/sendEmail'
import { experimental_useFormStatus } from 'react-dom'
import SubmitButton from '@/components/SubmitButton'

const ContactMe = () => {
    const inputClasses =
        'w-full rounded-md focus:shadow-primary-glow shadow-primary-glow-initial hover:shadow-primary-glow border dark:border-gray-800 border-gray-200 bg-transparent py-2 px-4 focus:outline-none focus:border-primary dark:focus:border-primary transition'

    const { pending } = experimental_useFormStatus()

    return (
        <Section containerClassName="grid items-center md:grid-cols-2 gap-5 flex-col grid-cols-1">
            <div>
                <SectionTitle>
                    Let&apos;s chat. <br /> Tell me about your project
                </SectionTitle>
                <SectionSubtitle>
                    Let&apos;s create something together.
                </SectionSubtitle>
            </div>
            <div className="rounded-xl bg-gray-50 p-4 shadow-center dark:border dark:border-gray-800 dark:bg-gray-850">
                <SectionCategoryTitle>Send me a message</SectionCategoryTitle>
                <form
                    className="flex flex-col gap-4 md:items-start"
                    action={async (formData) => {
                        console.log('Running on client')
                        await sendEmail(formData)
                    }}
                >
                    <input
                        name="fullName"
                        required
                        type="text"
                        className={inputClasses}
                        placeholder="Full name"
                    />
                    <input
                        name="email"
                        type="email"
                        required
                        className={inputClasses}
                        placeholder="Email address"
                    />
                    <input
                        name="subject"
                        required
                        type="text"
                        className={inputClasses}
                        placeholder="Subject"
                    />
                    <textarea
                        name="message"
                        required
                        maxLength={500}
                        className={cn(inputClasses, 'h-36 resize-none')}
                    ></textarea>
                    <SubmitButton />
                    {/* Maybe you could use react hot toast for success */}
                </form>
            </div>
        </Section>
    )
}

export default ContactMe
