import React, {useEffect, useRef} from 'react'

function FocusInput() {

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
        // inputRef.current that is how react lets us access the DOM element
    }, [])

    return (
        <div>
            <input ref={inputRef} type="text" />
        </div>
    )
}

export default FocusInput