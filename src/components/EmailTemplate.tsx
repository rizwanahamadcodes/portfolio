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
            <h1>Welcome, {fullName}!</h1>
        </div>
    )
}

export default EmailTemplate
