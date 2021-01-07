import React, {Component} from "react"

class TodoItem extends Component {
  constructor() {
    super()
    this.state = {
      completed: false
      // completed: this.props.todo.completed
    }
  }
  render() {
    const completedStyle = {
      textDecoration: 'line-through',
      opacity: 0.4
    }
    return (
      <div className={"todo-item"}
        onClick={() => this.props.handleChange(this.props.item.id)}
      >
        <input type="checkbox" 
          checked={this.props.item.completed}
          // onChange={() => this.props.handleChange(this.props.item.id)}
          onChange={() => "It's allright..."}
          />
        <p style = {this.props.item.completed ? completedStyle : null}>{this.props.item.text ? this.props.item.text : "🤔 An empty one"}</p>
      </div>
    )
  }
}

export default TodoItem