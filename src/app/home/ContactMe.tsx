'use client'

import Button, { ButtonIcon } from '@/components/Button'
import Section, {
    SectionCategoryTitle,
    SectionSubtitle,
    SectionTitle,
} from '@/components/Section'
import cn from '@/components/utils/cn'
import React, { ComponentPropsWithoutRef, useEffect, useState } from 'react'
import OrDivider from '@/components/OrDivider'
import { SiGmail } from 'react-icons/si'
import { BsInstagram, BsMessenger } from 'react-icons/bs'
import Container from '@/components/Container'
import { IconType } from 'react-icons'
import { BiLoaderAlt } from 'react-icons/bi'

import { z } from 'zod'
import {
    FieldError,
    FieldErrors,
    FieldValues,
    SubmitHandler,
    UseFormGetFieldState,
    UseFormRegister,
    useForm,
} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { POST } from '../api/send/route'
import { IconBaseProps } from 'react-icons/lib'

const visitorSchema = z.object({
    fullName: z
        .string({
            required_error: 'Please enter your full name',
            invalid_type_error: 'Name must be text',
        })
        .max(100, { message: 'Name is too long' })
        .min(1, { message: 'Please enter your full name' }),
    subject: z
        .string({
            required_error: 'Please enter the subject',
            invalid_type_error: 'Subject must be text',
        })
        .max(100, { message: 'Subject is too long' })
        .min(1, { message: 'Please enter a subject' }),
    email: z
        .string({
            required_error: 'Please enter your email',
            invalid_type_error: 'Email address me=ust be a string',
        })
        .max(300, { message: 'Email address is too long.' })
        .email({ message: 'Please enter a valid email' })
        .min(1, { message: 'Please enter your email' }),
    message: z
        .string({ invalid_type_error: 'Message must be text' })
        .max(500, {
            message:
                'Message is too long, keep the message below 500 characters or below 150 words',
        })
        .optional(),
})

type visitorSchema = z.infer<typeof visitorSchema>

const getInTouchItems = [
    {
        label: 'Mail me at:',
        linkLabel: 'rizwanahamadcodes@gmail',
        url: 'mailto:rizwanahamadcodes@gmail.com',
        icon: SiGmail,
    },
    {
        label: 'Text me on Messenger:',
        linkLabel: 'messenger.com/100...',
        url: 'https://m.me/100047043491338',
        icon: BsMessenger,
    },
    {
        label: 'Mail me on Instagram:',
        linkLabel: 'instagram.com/rizwan29972',
        url: 'https://www.instagram.com/rizwan29972/',
        icon: BsInstagram,
    },
]

const ContactMe = () => {
    return (
        <Section>
            <Container className="flex flex-col items-stretch justify-between gap-8 md:flex-row">
                <div className="relative grow md:max-w-md">
                    <SectionTitle defaultBottomMargin>
                        Let&apos;s chat. <br /> Tell me about your project
                    </SectionTitle>
                    <SectionSubtitle defaultBottomMargin>
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

type CustomFieldProps<Field> = Field & {
    name: keyof visitorSchema
    register: UseFormRegister<visitorSchema>
    getFieldState: UseFormGetFieldState<visitorSchema>
    isSubmitted: boolean
    success: boolean
}

const CustomInput = (
    props: CustomFieldProps<React.ComponentPropsWithoutRef<'input'>>
) => {
    const {
        name,
        register,
        getFieldState,
        isSubmitted,
        success,
        ...otherProps
    } = props

    const { invalid, error } = getFieldState(name)

    const baseInputClasses = 'shadow-soft hover:shadow-primary-glow'

    return (
        <div>
            <input
                {...register(name)}
                className={cn(
                    'w-full rounded-full bg-transparent bg-white px-4 py-2 shadow-soft transition focus:outline-none dark:bg-gray-800  dark:focus:bg-gray-800',
                    baseInputClasses,
                    isSubmitted
                        ? invalid
                            ? 'shadow-alert-glow-initial hover:shadow-alert-glow focus:shadow-alert-glow'
                            : !success
                            ? 'shadow-success-glow-initial hover:shadow-success-glow focus:shadow-success-glow'
                            : baseInputClasses
                        : ''
                )}
                {...otherProps}
            />
            {error ? (
                <p className="mt-2 text-secondary">{error?.message}</p>
            ) : (
                ''
            )}
        </div>
    )
}

const CustomTextarea = (
    props: CustomFieldProps<React.ComponentPropsWithoutRef<'textarea'>>
) => {
    const { name, register, ...otherProps } = props

    return (
        <textarea
            {...register(name)}
            className={cn(
                'w-full rounded-2xl  px-4 py-2 shadow-soft transition hover:shadow-primary-glow focus:shadow-primary-glow focus:outline-none dark:focus:bg-gray-800',
                'h-36 resize-none bg-white dark:bg-gray-800'
            )}
            {...otherProps}
        />
    )
}

export const ContactForm = () => {
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        const setSuccessToFalse = setTimeout(() => {
            setSuccess(false)
        }, 5000)
        return () => clearTimeout(setSuccessToFalse)
    }, [success])

    const {
        register,
        handleSubmit,
        reset,
        getFieldState,
        formState: { isSubmitted },
    } = useForm<visitorSchema>({ resolver: zodResolver(visitorSchema) })

    const onSubmit: SubmitHandler<visitorSchema> = async (data) => {
        try {
            setLoading(true)

            const response = await fetch('/api/send', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                },
            })

            if (response.ok) {
                setSuccess(true)
                setLoading(false)
            } else {
                setError('An error occurred while sending the email.')
                setLoading(false)
            }
        } catch (error) {
            setError('An error occurred while sending the email.')
            setLoading(false)
        }

        reset()
        // Please fix reset and input styling before deployment
    }

    return (
        <div className="grow rounded-2xl  bg-gray-50 p-4 shadow-soft dark:bg-gray-850 md:max-w-md">
            <SectionCategoryTitle defaultBottomMargin>
                Send me a message
            </SectionCategoryTitle>
            <form
                className="flex flex-col gap-4"
                onSubmit={handleSubmit(onSubmit)}
            >
                <CustomInput
                    name="fullName"
                    type="text"
                    placeholder="Full name"
                    register={register}
                    getFieldState={getFieldState}
                    isSubmitted={isSubmitted}
                    success={success}
                ></CustomInput>
                <CustomInput
                    name="email"
                    type="email"
                    placeholder="Email address"
                    register={register}
                    getFieldState={getFieldState}
                    isSubmitted={isSubmitted}
                    success={success}
                />
                <CustomInput
                    name="subject"
                    type="text"
                    placeholder="Subject"
                    register={register}
                    getFieldState={getFieldState}
                    isSubmitted={isSubmitted}
                    success={success}
                />
                <CustomTextarea
                    name="message"
                    maxLength={500}
                    placeholder="Message..."
                    register={register}
                    getFieldState={getFieldState}
                    isSubmitted={isSubmitted}
                    success={success}
                ></CustomTextarea>

                <Button
                    className={cn('w-full shadow-soft lg:w-auto')}
                    type="submit"
                    disabled={loading}
                    colorScheme={
                        loading
                            ? 'gray'
                            : { from: 'primary', to: 'primary-400' }
                    }
                >
                    {loading ? (
                        <>
                            <ButtonIcon
                                icon={BiLoaderAlt}
                                className="animate-spin"
                            />
                            Sending... Message
                        </>
                    ) : (
                        'Send Message'
                    )}
                </Button>
                {success ? (
                    <p>Thank you for reaching out, we will get in touch soon</p>
                ) : error ? (
                    <p>
                        Apologies there was an internal error in sending the
                        message, please try again once
                    </p>
                ) : (
                    ''
                )}
            </form>
        </div>
    )
}
export default ContactMe
type GetInTouchProps = {
    children: React.ReactNode
    url: string
}

const GetInTouch = (props: GetInTouchProps) => {
    const { children, url } = props
    return (
        <a href={url}>
            <div className="inline-flex  w-full items-center gap-4 rounded-full bg-gray-50 p-2 pr-6 shadow-soft transition-all active:scale-[0.98] dark:bg-gray-850">
                {children}
            </div>
        </a>
    )
}

type GetInTouchIconProps = {
    icon: IconType
}

const GetInTouchIcon = (props: GetInTouchIconProps) => {
    const { icon: Icon } = props
    return (
        <div className="flex min-h-[46px] min-w-[46px] items-center justify-center rounded-full bg-primary bg-gradient-to-t from-primary to-primary-400">
            <Icon size={26} className={'text-gray-100'} />
        </div>
    )
}

type GetInTouchBodyProps = {
    label: string
    linkLabel: string
}

const GetInTouchBody = (props: GetInTouchBodyProps) => {
    const { label, linkLabel } = props
    return (
        <p>
            <p className="leading-tight text-gray-900 dark:text-gray-100">
                {label}
            </p>
            <p className="leading-tight">{linkLabel}</p>
        </p>
    )
}
