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
import OrDivider from '@/components/OrDivider'
import { RxEnvelopeClosed } from 'react-icons/rx'

const ContactMe = () => {
    const inputClasses =
        'w-full rounded-md focus:shadow-primary-glow shadow-primary-glow-initial hover:shadow-primary-glow border dark:border-gray-800 border-gray-200 bg-transparent py-2 px-4 focus:outline-none focus:border-primary dark:focus:border-primary transition dark:focus:bg-gray-800 focus:bg-white'

    const { pending } = experimental_useFormStatus()

    return (
        <Section containerClassName="grid items-center md:grid-cols-[minmax(min-content,_500px)_auto_minmax(min-content,_500px)] gap-5 flex-col grid-cols-1">
            <div>
                <SectionTitle>
                    Let&apos;s chat. <br /> Tell me about your project
                </SectionTitle>
                <SectionSubtitle className="mb-4">
                    Let&apos;s create something together.
                </SectionSubtitle>
                <a href="mailto:rizwanahamadcodes@gmail.com" className="">
                    <div className="inline-flex items-center gap-4 rounded-full bg-gray-50 p-2 pr-6 transition-all hover:bg-white hover:shadow active:scale-[0.98] dark:bg-gray-850 dark:hover:bg-gray-800">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                            <RxEnvelopeClosed
                                size={'1.4rem'}
                                className={'text-gray-100'}
                            />
                        </div>

                        <p className="leading-tight">
                            <p className="leading-tight">Mail me at</p>
                            <p className="leading-tight">
                                rizwanahamadcodes@gmail.com
                            </p>
                        </p>
                    </div>
                </a>
            </div>
            <OrDivider />
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
