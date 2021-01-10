import React, {Component} from "react"
import FormComponent from "./FormComponent"

class Form extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            destination: "",
            vegetarian: false,
            lactoseFree: false,
            kosheer: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleChange(event) {
        const {name, value, type, checked} = event.target
        type === "checkbox" ?
            this.setState({
                [name]: checked 
            })
        :
            this.setState({
                [name]: value
            })
    }

    handleSubmit(event) {
        alert('Form:');
        event.preventDefault();
      }

    render() {
        return (
            <FormComponent 
                handleChange = {this.handleChange}
                {...this.state}
            />
        )
        
    }
}

export default Form
