import React from 'react'


export const Checkbox = React.forwardRef(({ indeterminate, ...rest }: any, ref) => {
    const defaultRef = React.useRef()
    const resolvedRef= ref || defaultRef

    React.useEffect(() => {
        (resolvedRef as any).current.indeterminate = indeterminate
    }, [resolvedRef, indeterminate])

    return (
        <>
            <input type='checkbox' ref={resolvedRef} {...rest} />
    </>
)
})

