'use client'

import Button from '@/components/Button'
import Container from '@/components/Container'
import SpanWrapperWithRef from '@/components/SpanWrapperWithRef'
import React, { useEffect, useRef } from 'react'

const Page = () => {
    const ref = useRef<HTMLSpanElement | null>(null)

    useEffect(() => {
        console.log(ref.current)
    }, [])

    return (
        <Container optionalStyles="flex justify-center">
            <SpanWrapperWithRef ref={ref}>
                <Button>I will hit the mid</Button>
            </SpanWrapperWithRef>
        </Container>
    )
}

export default Page
