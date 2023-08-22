import React, { forwardRef } from 'react'

interface SpanWrapperWithRefProps extends React.HTMLProps<HTMLSpanElement> {
    children: React.ReactNode
}

const SpanWrapperWithRef = forwardRef<HTMLSpanElement, SpanWrapperWithRefProps>(
    (props, ref) => {
        const { children, ...rest } = props

        return (
            <span ref={ref} {...rest}>
                {children}
            </span>
        )
    }
)

SpanWrapperWithRef.displayName = 'SpanWrapperWithRef'

export default SpanWrapperWithRef
