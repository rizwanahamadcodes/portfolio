import React from 'react'
import Button from './Button'
import { experimental_useFormStatus } from 'react-dom'

const SubmitButton = () => {
    const { pending } = experimental_useFormStatus()

    return (
        <>
            {pending ? (
                <div>Sending...</div>
            ) : (
                <Button className="w-auto" type="submit">
                    Send Message
                </Button>
            )}
        </>
    )
}

export default SubmitButton
