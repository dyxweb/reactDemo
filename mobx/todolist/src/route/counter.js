import React, { Component} from 'react'
import { observer } from 'mobx-react'
import counter from '../mobx/count.js'

class App extends Component {
    render() {
        return (
            <div>
                <div>{counter.state.count}</div>
                <div onClick={() => counter.add()}>+</div>
                <div onClick={() => counter.min()}>-</div>
                <div onClick={() => counter.reset()}>reset</div>
            </div>
        )
    }
}

export default observer(App)
