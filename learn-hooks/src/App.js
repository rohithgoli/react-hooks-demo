import React, {Component} from 'react'
import './App.css'
import ClickCounter from './components/ClickCounter'
import HoverCounter from './components/HoverCounter'
import ClickCounterTwo from './components/ClickCounterTwo'
import HoverCounterTwo from './components/HoverCounterTwo'
import User from './components/User'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ClickCounterTwo />
        <HoverCounterTwo />
        <User render={(isLoggedIn) => isLoggedIn ? "EverEvolving Dev" : "Guest"}/>
      </div>
    )
  }
}

export default App