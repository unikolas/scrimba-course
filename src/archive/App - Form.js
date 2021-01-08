import React, {Component} from "react"

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "Nik",
            lastName: "💆‍♂️"
        }

        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
        console.log(this.state)
    }

    render() {
        return (
            <form style={{padding: 40}}>
                <input type="text" name="firstName" value={this.state.firstName} placeholder="First name" onChange={this.handleChange}/>
                <br/><br/>
                <input type="text" name="lastName" value={this.state.lastName} placeholder="Last name" onChange={this.handleChange}/>
                <p>{this.state.firstName}</p>
                <p>{this.state.lastName}</p>
            </form>
        )
    }
}

export default App
