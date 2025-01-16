'use server'

type EmailTemplateProps = {
    firstName: string
}

const EmailTemplate = (props: Readonly<EmailTemplateProps>) => {
    const { firstName } = props

    return (
        <div>
            <h1>Welcome, {firstName}!</h1>
        </div>
    )
}

export default EmailTemplate
