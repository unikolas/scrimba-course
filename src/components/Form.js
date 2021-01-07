import React, {Component} from "react"

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

    // handleClick() {
    //     this.setState(state => ({
    //       words: [...state.words, 'marklar'],
    //     }));
    //   };

    handleSubmit(event) {
        alert('Form:');
        event.preventDefault();
      }

    render() {
        return (
            <main style={{padding: 40}}>
                <form>
                    <h3>Personal details</h3>
                    <input type="text" name="firstName" placeholder="First Name" onChange={this.handleChange} /><br />
                    <input type="text" name="lastName" placeholder="Last Name" onChange={this.handleChange} /><br />
                    <input type="number" name="age" placeholder="Age" onChange={this.handleChange} /><br />
                    <div>
                        <h3>Your gender:</h3>
                        <label><input type="radio" value="male" name="gender" checked={this.state.gender === "male"} onChange={this.handleChange}/> Male</label> <br />
                        <label><input type="radio" value="female" name="gender" checked={this.state.gender === "female"} onChange={this.handleChange}/> Female</label> <br />
                    </div>
                    <h3>Destination:</h3>
                    <select value={this.state.destination} name="destination" onChange={this.handleChange}>
                        <option value="not selected">Please select...</option>
                        <option value="united kingdom">United Kingdom</option>
                        <option value="russia">Russia</option>
                        <option value="indonesia">Indonesia</option>
                    </select>
                    <br />
                    
                    <div>
                        <h3>Dietary restrictions:</h3>
                        <label>
                            <input
                                type="checkbox"
                                name="vegetarian" 
                                checked={this.state.vegetarian}
                                onChange={this.handleChange} /> Vegetarian
                        </label><br />
                        <label>
                            <input
                                type="checkbox"
                                name="kosheer" 
                                checked={this.state.kosheer}
                                onChange={this.handleChange} /> Kosheer
                        </label><br />
                        <label>
                            <input
                                type="checkbox"
                                name="lactoseFree" 
                                checked={this.state.lactoseFree}
                                onChange={this.handleChange} /> Lactose free
                        </label><br />
                    </div>
                    <br />
                    
                    <button onClick={this.handleSubmit}>Submit</button>
                </form>
                <br />
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.destination}</p>
                
                <h3>Your dietary restrictions:</h3>
                <p>Vegetarian: {this.state.vegetarian ? "yes" : "no"}</p>
                <p>Kosheer: {this.state.kosheer ? "yes" : "no"}</p>
                <p>Lactose Free: {this.state.lactoseFree ? "yes" : "no"}</p>
            </main>
        )
    }
}

export default Form
