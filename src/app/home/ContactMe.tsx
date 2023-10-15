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
import Container from '@/components/Container'
import { IconType } from 'react-icons'

const getInTouchItems = [
    {
        label: 'Mail me at:',
        linkLabel: 'rizwanahamadcodes@gmail.com',
        url: 'mailto:rizwanahamadcodes@gmail.com',
        icon: SiGmail,
    },
    {
        label: 'Text me on Messenger:',
        linkLabel: 'facebook.com/100047043491338',
        url: 'https://m.me/100047043491338',
        icon: SiGmail,
    },
    {
        label: 'Mail me on Instagram:',
        linkLabel: 'instagram.com/rizwan29972',
        url: 'https://www.instagram.com/rizwan29972/',
        icon: SiGmail,
    },
]

const ContactMe = () => {
    const inputClasses = ''

    const { pending } = experimental_useFormStatus()

    return (
        <Section>
            <Container className="flex flex-col items-stretch justify-between gap-8 md:flex-row">
                <div className="relative grow md:max-w-md">
                    <SectionTitle>
                        Let&apos;s chat. <br /> Tell me about your project
                    </SectionTitle>
                    <SectionSubtitle className="mb-4">
                        Let&apos;s create something together.
                    </SectionSubtitle>
                    <div className="flex flex-col gap-4 sm:inline-flex">
                        {getInTouchItems.map((getInTouchItem) => {
                            const { url, icon, label, linkLabel } =
                                getInTouchItem
                            return (
                                <GetInTouch key={url} url={url}>
                                    <GetInTouchIcon icon={icon} />
                                    <GetInTouchBody
                                        label={label}
                                        linkLabel={linkLabel}
                                    />
                                </GetInTouch>
                            )
                        })}
                    </div>
                </div>

                <OrDivider />
                <ContactForm />
            </Container>
        </Section>
    )
}

type GetInTouchProps = {
    children: React.ReactNode
    url: string
}

const GetInTouch: React.FC<GetInTouchProps> = (props) => {
    const { children, url } = props
    return (
        <a href={url}>
            <div className="inline-flex w-full items-center gap-4 rounded-full bg-gray-50 p-2 pr-6 transition-all hover:bg-white hover:shadow active:scale-[0.98] dark:bg-gray-850 dark:hover:bg-gray-800">
                {children}
            </div>
        </a>
    )
}

type GetInTouchIconProps = {
    icon: IconType
}

const GetInTouchIcon: React.FC<GetInTouchIconProps> = (props) => {
    const { icon: Icon } = props
    return (
        <div className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-primary">
            <Icon size={26} className={'text-gray-100'} />
        </div>
    )
}

type GetInTouchBodyProps = {
    label: string
    linkLabel: string
}

const GetInTouchBody: React.FC<GetInTouchBodyProps> = (props) => {
    const { label, linkLabel } = props
    return (
        <p>
            <p className="text-sm leading-tight">{label}</p>
            <p className="text-sm leading-tight">{linkLabel}</p>
        </p>
    )
}

const CustomInput: React.FC<React.HTMLProps<HTMLInputElement>> = (props) => {
    return (
        <input
            {...props}
            className="w-full rounded-md border border-gray-200 bg-transparent px-4 py-2 shadow-primary-glow-initial transition hover:shadow-primary-glow focus:border-primary focus:bg-white focus:shadow-primary-glow focus:outline-none dark:border-gray-800 dark:focus:border-primary dark:focus:bg-gray-800"
        />
    )
}

const CustomTextarea: React.FC<React.HTMLProps<HTMLTextAreaElement>> = (
    props
) => {
    return (
        <textarea
            {...props}
            className={cn(
                'w-full rounded-md border border-gray-200 bg-transparent px-4 py-2 shadow-primary-glow-initial transition hover:shadow-primary-glow focus:border-primary focus:bg-white focus:shadow-primary-glow focus:outline-none dark:border-gray-800 dark:focus:border-primary dark:focus:bg-gray-800',
                'h-36 resize-none'
            )}
        />
    )
}

export const ContactForm = () => {
    return (
        <div className="grow rounded-xl bg-gray-50 p-4 shadow-center dark:border dark:border-gray-800 dark:bg-gray-850 md:max-w-md">
            <SectionCategoryTitle>Send me a message</SectionCategoryTitle>
            <form
                className="flex flex-col gap-4 md:items-start"
                action={async (formData) => {
                    console.log('Running on client')
                    await sendEmail(formData)
                }}
            >
                <CustomInput
                    name="fullName"
                    required
                    type="text"
                    placeholder="Full name"
                ></CustomInput>
                <CustomInput
                    name="email"
                    type="email"
                    required
                    placeholder="Email address"
                />
                <CustomInput
                    name="subject"
                    required
                    type="text"
                    placeholder="Subject"
                />
                <CustomTextarea
                    name="message"
                    required
                    maxLength={500}
                    placeholder="Message..."
                ></CustomTextarea>
                <SubmitButton />
                {/* Maybe you could use react hot toast for success */}
            </form>
        </div>
    )
}
export default ContactMe
