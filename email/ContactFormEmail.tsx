import {
    Html,
    Head,
    Body,
    Heading,
    Hr,
    Container,
    Preview,
    Section,
    Text,
} from '@react-email/components'

import { Tailwind } from '@react-email/tailwind'

import React from 'react'

type ContactFormEmailProps = {
    message: string
    senderEmail: string
}

const ContactFormEmail: React.FC<ContactFormEmailProps> = (props) => {
    const { message, senderEmail } = props

    return (
        <Html>
            <Head />
            <Preview>New Message from portfolio site</Preview>
            <Body>
                <Container>
                    <Section className="rounded-xl bg-gray-900">
                        <Heading>
                            You recieved the following message from the
                            portfolio contact form
                        </Heading>
                        <Text>{message}</Text>
                        <Hr />
                        <Text>Sender Email is {senderEmail}</Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    )
}

export default ContactFormEmail
