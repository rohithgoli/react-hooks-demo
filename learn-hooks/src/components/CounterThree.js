import React, {useReducer} from 'react';

const initialState = 0
const reducer = (state, action) => {
    switch(action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}

function CounterThree() {

    const [count, dispatch] = useReducer(reducer, initialState)
    const [countTwo, dispatchTwo] = useReducer(reducer, initialState)

    return (
        <div>
            <div>Count - {count}</div>
            <button onClick={() => dispatch('increment')}>Increment Counter 1</button>
            <button onClick={() => dispatch('decrement')}>Decrement Counter 1</button>
            <button onClick={() => dispatch('reset')}>Reset Counter 1</button>
        
            <div>
                <div>Count Two - {countTwo}</div>
                <button onClick={() => dispatchTwo('increment')}>Increment Counter 2</button>
                <button onClick={() => dispatchTwo('decrement')}>Decrement Counter 2</button>
                <button onClick={() => dispatchTwo('reset')}>Reset Counter 2</button>
            </div>
        </div>
    )
}

export default CounterThree