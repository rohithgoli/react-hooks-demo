import React, {Component} from 'react'
import './App.css'
import ClickCounter from './components/ClickCounter'
import HoverCounter from './components/HoverCounter'
import ClickCounterTwo from './components/ClickCounterTwo'
import HoverCounterTwo from './components/HoverCounterTwo'
import User from './components/User'
import Counter from './components/Counter'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter 
          render={(count, incrementCount) => (
            <ClickCounterTwo count={count} incrementCount={incrementCount}/>
          )}
        />
        <Counter 
          render={(count, incrementCount) => (
            <HoverCounterTwo  count={count} incrementCount={incrementCount}/>
          )}
        />
        {/* <ClickCounterTwo />
        <HoverCounterTwo />
        <User render={(isLoggedIn) => isLoggedIn ? "EverEvolving Dev" : "Guest"}/> */}
      </div>
    )
  }
}

export default App