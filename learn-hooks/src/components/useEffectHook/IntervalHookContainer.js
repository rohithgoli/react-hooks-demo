import React, {useState, useEffect} from 'react';

function IntervalHookContainer() {
    
    const [count, setCount] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(tick, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    const tick = () => {
        setCount((prevCount) => prevCount + 1)
    }
    
    return (
        <h2>{count}</h2>
    )
}

export default IntervalHookContainer