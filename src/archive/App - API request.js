import React, {Component} from "react"

class App extends Component {
    constructor() {
        super()
        this.state = {
            isLoading: false,
            character: {}
        }
    }
  
componentDidMount() {
    console.log(this.state)
    this.setState({isLoading: true})
    fetch("https://swapi.dev/api/people/1")
        .then(response => response.json())
        .then(data => {
            this.setState({
                character: data,
                isLoading: false
            })
            console.log(this.state.character)
        })
}
  
render() {
    const text = this.state.isLoading ? "🤔 Loading..." : "🕺" + this.state.character.name
    return (
      <div style={{padding: 40}} >
        <p>{text}</p>
      </div>
    )}
}

export default App
