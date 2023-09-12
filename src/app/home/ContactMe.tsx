import Button from '@/components/Button'
import Section, {
    SectionCategoryTitle,
    SectionSubtitle,
    SectionTitle,
} from '@/components/Section'
import cn from '@/components/utils/cn'
import React from 'react'

const ContactMe = () => {
    const inputClasses =
        'w-full rounded-md focus:shadow-primary-glow border dark:border-gray-800 border-gray-200 bg-transparent py-2 px-4 focus:outline-none focus:border-primary dark:focus:border-primary'

    return (
        <Section containerClassName="grid items-center md:grid-cols-2 gap-5 flex-col grid-cols-1">
            <div>
                <SectionTitle>
                    Let's chat. <br /> Tell me about your project
                </SectionTitle>
                <SectionSubtitle>
                    Let's create something together.
                </SectionSubtitle>
            </div>
            <div className="rounded-xl bg-gray-50 p-4 shadow-center dark:border dark:border-gray-800 dark:bg-gray-850">
                <SectionCategoryTitle>Send me a message</SectionCategoryTitle>
                <form className="flex flex-col gap-4 md:items-start">
                    <input
                        type="text"
                        className={inputClasses}
                        placeholder="Full name"
                    />
                    <input
                        type="email"
                        className={inputClasses}
                        placeholder="Email address"
                    />
                    <input
                        type="email"
                        className={inputClasses}
                        placeholder="Subject"
                    />
                    <textarea
                        className={cn(inputClasses, 'h-36 resize-none')}
                    ></textarea>
                    <Button className="w-auto" type="submit">
                        Send Message
                    </Button>
                </form>
            </div>
        </Section>
    )
}

export default ContactMe
