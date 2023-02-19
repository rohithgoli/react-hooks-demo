import React, {Component} from 'react'
import withCounter from './withCounter'
class ClickCounter extends Component {

    render() {
        const {count, incrementCount, name} = this.props
        console.log(name)
        return (
            <div>
                <button onClick={incrementCount}>Clicked {count} times</button>
            </div>
        )
    }
}

export default withCounter(ClickCounter, 5)