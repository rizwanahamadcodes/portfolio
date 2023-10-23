"use client"

import { useEffect, useState } from 'react'
import Container from './Container'

const FooterCopyright = () => {
    const [friendsString, setFriendsString] = useState('')

    useEffect(() => {
        const friendsName = ['Aditi', 'Roshni']
        const sortedFriendsName = friendsName.sort(() => Math.random() - 0.5)

        setFriendsString(sortedFriendsName.join(' and '))
    })

    return (
        <p className="bg-gray-100 py-4 text-center dark:bg-gray-800 ">
            <Container>
                {`Made with love and feedback from my friends ${friendsString}`}
            </Container>
        </p>
    )
}

export default FooterCopyright
