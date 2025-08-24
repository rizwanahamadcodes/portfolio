import * as React from 'react'

interface EmailTemplateProps {
    fullName: string
    email: string
    subject: string
    message?: string
}

const EmailTemplate = (props: Readonly<EmailTemplateProps>) => {
    const { fullName, email, subject, message } = props
    return (
        <div>
            <h1>
                Rizwan, {fullName} has sent you a message from your portfolio
            </h1>
            <p>{message}</p>
            <hr />
            <p>sender&apos;s email: {email}</p>
        </div>
    )
}

export default EmailTemplate
