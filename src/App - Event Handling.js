import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleContextMenu = this.handleContextMenu.bind(this)
    }
    
    handleClick(){
      this.setState(prevState => {
          return {
            count: prevState.count + 1 }
        }
      )
    }

    handleContextMenu(){
      this.setState(prevState => {
        return {
          count: prevState.count + 5
        }
      }
      )
    }

    render() {
        function increase(x) {
          return x = x + 1
        }
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick} onContextMenu={this.handleContextMenu}>Change!</button>
            </div>
        )
    }
}

export default App