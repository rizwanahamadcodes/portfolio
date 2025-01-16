import * as React from 'react'

interface EmailTemplateProps {
    fullName: string
    email: string
    subject: string
    message?: string
}

const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    fullName,
}) => (
    <div>
        <h1>Welcome, {fullName}!</h1>
    </div>
)

export default EmailTemplate
