import React, {Component} from "react"
import Conditional from "./tasks/Conditional"

class App extends Component {
    constructor() {
        super()
        this.state = {
            isLoading: true
        }
    }
    
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 1500)
    }
    
    render() {
        return (
            <div style={{padding: 40}}>
                <Conditional isLoading={this.state.isLoading}/>
            </div>
        )
    }
}

export default App
