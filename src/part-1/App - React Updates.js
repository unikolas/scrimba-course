import React, {Component} from "react"
import Header from "../components/Header"
import MemeGenerator from "../components/MemeGenerator"

// function App(props) {
//     return (
//         <div>Who dis?</div>
//     )
// }

class App extends Component {
    
    state = {question: "who disss?"}
    
    handleChange = () => {
        
    }

    render() {
        return (
            <div style={{padding: 40}}>
                <Header />
                <MemeGenerator />
            </div>
        )
    }
}

export default App