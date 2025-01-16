'use client'

import Button, { ButtonIcon } from '@/components/Button'
import Section, {
    SectionCategoryTitle,
    SectionSubtitle,
    SectionTitle,
} from '@/components/Section'
import cn from '@/components/utils/cn'
import React, { ComponentPropsWithoutRef, useState } from 'react'
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
        linkLabel: 'rizwanahamadcodes@gmail.com',
        url: 'mailto:rizwanahamadcodes@gmail.com',
        icon: SiGmail,
    },
    {
        label: 'Text me on Messenger:',
        linkLabel: 'facebook.com/100047043491338',
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

    const baseInputClasses =
        'border-gray-200 shadow-primary-glow-initial hover:shadow-primary-glow focus:border-primary dark:border-gray-800 dark:focus:border-primary'

    return (
        <div>
            <input
                {...register(name)}
                className={cn(
                    'mb-2 w-full rounded-md border bg-transparent px-4 py-2 transition focus:bg-white focus:outline-none dark:focus:bg-gray-800 ',
                    isSubmitted
                        ? invalid
                            ? 'border-red-500 shadow-alert-glow-initial hover:shadow-alert-glow focus:shadow-alert-glow'
                            : !success
                            ? 'border-green-500 shadow-success-glow-initial hover:shadow-success-glow focus:shadow-success-glow'
                            : baseInputClasses
                        : baseInputClasses
                )}
                {...otherProps}
            />
            {error ? <p className="text-secondary">{error?.message}</p> : ''}
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
                'w-full rounded-md border border-gray-200 bg-transparent px-4 py-2 shadow-primary-glow-initial transition hover:shadow-primary-glow focus:border-primary focus:bg-white focus:shadow-primary-glow focus:outline-none dark:border-gray-800 dark:focus:border-primary dark:focus:bg-gray-800',
                'h-36 resize-none'
            )}
            {...otherProps}
        />
    )
}

export const ContactForm = () => {
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState('')

    const {
        register,
        handleSubmit,
        reset,
        getFieldState,
        formState: {
            errors,
            touchedFields,
            isLoading,
            isSubmitted,
            isValid,
            isDirty,
        },
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
                reset()
            } else {
                setError('An error occurred while sending the email.')
                setLoading(false)
                reset()
            }
        } catch (error) {
            setError('An error occurred while sending the email.')
            setLoading(false)
            reset()
        }
    }

    return (
        <div className="grow rounded-2xl bg-gray-50 p-4 shadow-center dark:border dark:border-gray-800 dark:bg-gray-850 md:max-w-md">
            <SectionCategoryTitle>Send me a message</SectionCategoryTitle>
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
                    className={cn('w-full lg:w-auto')}
                    type="submit"
                    disabled={loading}
                    colorScheme={loading ? 'gray' : 'primary'}
                >
                    {loading ? (
                        <ButtonIcon
                            icon={BiLoaderAlt}
                            className="animate-spin"
                        />
                    ) : (
                        ''
                    )}
                    Send Message
                </Button>
                {success ? (
                    <p>Thank you for reaching out, we will get in touch soon</p>
                ) : (
                    ''
                )}
                {error ? (
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
            <div className="inline-flex w-full items-center gap-4 rounded-full bg-gray-50 p-2 pr-6 transition-all hover:bg-white hover:shadow active:scale-[0.98] dark:bg-gray-850 dark:hover:bg-gray-800">
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
        <div className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-primary">
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
            <p className="text-sm leading-tight">{label}</p>
            <p className="text-sm leading-tight">{linkLabel}</p>
        </p>
    )
}
