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
import { SiGmail } from 'react-icons/si'
import { BsInstagram, BsMessenger } from 'react-icons/bs'

const ContactMe = () => {
    const inputClasses =
        'w-full rounded-md focus:shadow-primary-glow shadow-primary-glow-initial hover:shadow-primary-glow border dark:border-gray-800 border-gray-200 bg-transparent py-2 px-4 focus:outline-none focus:border-primary dark:focus:border-primary transition dark:focus:bg-gray-800 focus:bg-white'

    const { pending } = experimental_useFormStatus()

    return (
        <Section containerClassName="flex flex-col md:flex-row gap-8 items-stretch justify-between ">
            <div className="relative grow md:max-w-md">
                <SectionTitle>
                    Let&apos;s chat. <br /> Tell me about your project
                </SectionTitle>
                <SectionSubtitle className="mb-4">
                    Let&apos;s create something together.
                </SectionSubtitle>
                <div className="flex flex-col gap-4 sm:inline-flex">
                    <a href="mailto:rizwanahamadcodes@gmail.com" className="">
                        <div className="inline-flex w-full items-center gap-4 rounded-full bg-gray-50 p-2 pr-6 transition-all hover:bg-white hover:shadow active:scale-[0.98] dark:bg-gray-850 dark:hover:bg-gray-800">
                            <div className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-primary">
                                <SiGmail
                                    size={26}
                                    className={'text-gray-100'}
                                />
                            </div>
                            <p>
                                <p className="text-sm leading-tight">
                                    Mail me at:
                                </p>
                                <p className="text-sm leading-tight">
                                    rizwanahamadcodes@gmail.com
                                </p>
                            </p>
                        </div>
                    </a>

                    <a href="https://m.me/100047043491338" className="">
                        <div className="inline-flex w-full items-center gap-4 rounded-full bg-gray-50 p-2 pr-6 transition-all hover:bg-white hover:shadow active:scale-[0.98] dark:bg-gray-850 dark:hover:bg-gray-800">
                            <div className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-primary">
                                <BsMessenger
                                    size={26}
                                    className={'text-gray-100'}
                                />
                            </div>
                            <p>
                                <p className="text-sm leading-tight">
                                    Text me:
                                </p>
                                <p className="text-sm leading-tight">
                                    facebook.com/100047043491338
                                </p>
                            </p>
                        </div>
                    </a>

                    <a
                        href="https://www.instagram.com/rizwan29972/"
                        className=""
                    >
                        <div className="inline-flex w-full items-center gap-4 rounded-full bg-gray-50 p-2 pr-6 transition-all hover:bg-white hover:shadow active:scale-[0.98] dark:bg-gray-850 dark:hover:bg-gray-800">
                            <div className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-primary">
                                <BsInstagram
                                    size={26}
                                    className={'text-gray-100'}
                                />
                            </div>
                            <p>
                                <p className="text-sm leading-tight">
                                    Text me:
                                </p>
                                <p className="text-sm leading-tight">
                                    instagram.com/rizwan29972
                                </p>
                            </p>
                        </div>
                    </a>
                </div>
            </div>

            <OrDivider />

            <div className="grow rounded-xl bg-gray-50 p-4 shadow-center dark:border dark:border-gray-800 dark:bg-gray-850 md:max-w-md">
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
                        placeholder="Message..."
                    ></textarea>
                    <SubmitButton />
                    {/* Maybe you could use react hot toast for success */}
                </form>
            </div>
        </Section>
    )
}

export default ContactMe
