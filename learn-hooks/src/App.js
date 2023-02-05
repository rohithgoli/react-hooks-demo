import React, {useReducer} from 'react'
import './App.css';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';

import CounterTwo from './components/CounterTwo';
import CounterThree from './components/CounterThree';
import DataFetchingOne from './components/DataFetchingOne';
import DataFetchingTwo from './components/DataFetchingTwo';

export const CountContext = React.createContext()

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

function App() {

  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <>
    <DataFetchingOne />
    <DataFetchingTwo />
    <CountContext.Provider 
      value={{countState: count, countDispatch: dispatch}}
    >
      <div className="App">
        {/* <CounterOne /> */}
        {/* <CounterTwo /> */}
        {/* <CounterThree /> */}
        <div>Count - {count}</div>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </div>
    </CountContext.Provider>
    </>
  );
}

export default App;
