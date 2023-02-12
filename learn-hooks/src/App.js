import React from 'react'
import './App.css'
import CounterOne from './components/CounterOne'
import CounterTwo from './components/CounterTwo'
import DocTitleOne from './components/DocTitleOne'
import DocTitleTwo from './components/DocTitleTwo'

function App() {
  return (
    <div>
      <CounterOne />
      <CounterTwo />
      {/* <DocTitleOne />
      <DocTitleTwo /> */}
    </div>
  )
}

export default App