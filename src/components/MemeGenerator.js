import React, {Component} from "react"

class MemeGenerator extends Component {
    constructor() {
        super()
        this.state = {
            isLoading: false,
            topText: "They shall",
            bottomText: "not pass",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.generateMeme = this.generateMeme.bind(this)
    }

    componentDidMount() {
        this.setState({isLoading: true}) // Set loading state
        fetch("https://api.imgflip.com/get_memes") // Get memes
            .then(response => response.json()) // Transform to json
            .then(response => { // Work with json
                const {memes} = response.data // Add memes to an array
                this.setState({ // Update states
                    isLoading: false, 
                    allMemeImgs: memes
                })
            })
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({[name]: value})
    }

    generateMeme(event){
        event.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randMemeImg = this.state.allMemeImgs[randNum].url
        this.setState({randomImg: randMemeImg})
    }

    render() {
        return (
            this.state.isLoading 
                ? <p>🤔 Loading...</p> 
                :
                <div className="wrapper">
                    <form className={"meme-form"}>
                        <input 
                            type="text" 
                            name="topText" 
                            placeholder="Top text" 
                            value={this.state.topText}
                            onChange={this.handleChange}
                        /><br />
                        <input 
                            type="text" 
                            name="bottomText" 
                            placeholder="Bottom text" 
                            value={this.state.bottomText}
                            onChange={this.handleChange}
                        /><br />
                        <button onClick={this.generateMeme}>Get random img</button>
                    </form>
                    <div className="meme">
                        <img src={this.state.randomImg} alt="" />
                        <h2 className="top">{this.state.topText}</h2>
                        <h2 className="bottom">{this.state.bottomText}</h2>
                    </div>
                </div>
        )
    }
}

export default MemeGenerator