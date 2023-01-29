import React, {Component} from 'react'

class ClassCounter extends Component {
    constructor(props) {
        super(props) 

        this.state = {
            count: 0
        }
    }

    incrementCount = () => {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        })
    }

    render() {
        return (
            <div>
                <h2>Count: {this.state.count}</h2>
                <button onClick={this.incrementCount}>Increment Count</button>
            </div>
        )
    }
}

export default ClassCounter