import React, {Component} from "react"

// function App(props) {
//     return (
//         <div>Who dis?</div>
//     )
// }

class App extends Component {
    constructor() {
        super()
        this.state = {
            question: "who disss?"
        }
    }
    render() {
        return (
            <div style={{padding: 40}}>
                {this.state.question}
            </div>
        )
    }
}

export default App