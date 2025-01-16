'use client'

import Button, { ButtonIcon } from '@/components/Button'
import Container from '@/components/Container'
import OrDivider from '@/components/OrDivider'
import Section, {
    SectionCategoryTitle,
    SectionSubtitle,
    SectionTitle,
} from '@/components/Section'
import cn from '@/components/utils/cn'
import React, { useEffect, useState } from 'react'
import { IconType } from 'react-icons'
import { BiLoaderAlt } from 'react-icons/bi'
import { BsInstagram, BsMessenger } from 'react-icons/bs'
import { SiGmail } from 'react-icons/si'

import { zodResolver } from '@hookform/resolvers/zod'
import {
    SubmitHandler,
    UseFormGetFieldState,
    UseFormRegister,
    useForm,
} from 'react-hook-form'
import { z } from 'zod'
import { visitorSchema } from '@/schemas/visitorSchema'

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
}

const getInputClasses = () => {
    const baseInputClasses =
        'w-full rounded-full bg-transparent bg-white px-4 py-2 shadow-soft transition focus:outline-none dark:bg-gray-800  dark:focus:bg-gray-800 shadow-soft hover:shadow-primary-glow focus:shadow-primary-glow'

    const inValidInputClasses =
        'shadow-alert-glow hover:shadow-alert-glow focus:shadow-alert-glow'

    const validInputClasses =
        'shadow-success-glow hover:shadow-success-glow focus:shadow-success-glow'

    return { baseInputClasses, validInputClasses, inValidInputClasses }
}

const CustomInput = (
    props: CustomFieldProps<React.ComponentPropsWithoutRef<'input'>>
) => {
    const { name, register, getFieldState, isSubmitted, ...otherProps } = props
    const { error, isDirty } = getFieldState(name)

    const { baseInputClasses, validInputClasses, inValidInputClasses } =
        getInputClasses()

    return (
        <div>
            <input
                {...register(name)}
                className={cn(
                    baseInputClasses,
                    error && inValidInputClasses,
                    !error && isSubmitted && validInputClasses
                )}
                {...otherProps}
            />
            {error ? (
                <p className="mt-2 text-secondary dark:text-secondary">
                    {error?.message}
                </p>
            ) : (
                ''
            )}
        </div>
    )
}

const CustomTextarea = (
    props: CustomFieldProps<React.ComponentPropsWithoutRef<'textarea'>>
) => {
    const { name, register, getFieldState, isSubmitted, ...otherProps } = props
    const { error } = getFieldState(name)

    const { baseInputClasses, validInputClasses, inValidInputClasses } =
        getInputClasses()

    return (
        <div>
            <textarea
                {...register(name)}
                className={cn(
                    baseInputClasses,
                    error && inValidInputClasses,
                    !error && isSubmitted && validInputClasses,
                    'h-36 resize-none rounded-2xl'
                )}
                {...otherProps}
            />
            {error ? (
                <p className="mt-2 text-secondary dark:text-secondary">
                    {error?.message}
                </p>
            ) : (
                <></>
            )}
        </div>
    )
}

/*

Things i want to achieve with this form,

1. by default, all inputs including the textarea should have a default primary styling, which includes the styles for hover and focus too

2. i should not care about the error styling of the input unless the form is submitted, we don't care if there is already an error if the user has not clicked the submit button

3. if there is a validation error i would the message to show up, then all fields should get either a valid styling or an invalid styling

4. everything should immediately reset after one of two things happens, there is a server side error, or the email was sent succesfully, which basically means everything should reset if everything was validated, so the server side makes no difference in the resetting of the form.

*/

export const ContactForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        getFieldState,
        formState: { errors, isSubmitted, isSubmitting, isSubmitSuccessful },
    } = useForm<visitorSchema>({ resolver: zodResolver(visitorSchema) })

    const [success, setSuccess] = useState(false)

    useEffect(() => {
        reset()
    }, [isSubmitSuccessful])

    const onSubmit: SubmitHandler<visitorSchema> = async (data) => {
        const response = await fetch('/api/send', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        })
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
                ></CustomInput>
                <CustomInput
                    name="email"
                    type="email"
                    placeholder="Email address"
                    register={register}
                    getFieldState={getFieldState}
                    isSubmitted={isSubmitted}
                />
                <CustomInput
                    name="subject"
                    type="text"
                    placeholder="Subject"
                    register={register}
                    getFieldState={getFieldState}
                    isSubmitted={isSubmitted}
                />
                <CustomTextarea
                    name="userMessage"
                    maxLength={500}
                    placeholder="Message..."
                    register={register}
                    getFieldState={getFieldState}
                    isSubmitted={isSubmitted}
                ></CustomTextarea>

                <Button
                    className={cn('w-full shadow-soft lg:w-auto')}
                    disabled={isSubmitting}
                    type="submit"
                    colorScheme={
                        isSubmitting
                            ? 'gray'
                            : { from: 'primary', to: 'primary-400' }
                    }
                >
                    {isSubmitting ? (
                        <>
                            <ButtonIcon
                                icon={BiLoaderAlt}
                                className="animate-spin"
                            />
                            Sending message...
                        </>
                    ) : (
                        'Send message'
                    )}
                </Button>
                {success && (
                    <p>Thank you for reaching out, we will get in touch soon</p>
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
