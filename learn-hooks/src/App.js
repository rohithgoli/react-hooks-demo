import React, {Component} from 'react'
import './App.css'
import PostList from './components/PostList'
import PostForm from './components/PostForm'

class App extends Component {

  render() {
    const {posts} = this.state
    return (
      <div className="App">
        {/* <PostList /> */}
        <PostForm />
      </div>
    )
  }
}

export default App