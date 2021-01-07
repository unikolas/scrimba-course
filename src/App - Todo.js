import React from "react"
import TodoItem from "./components/TodoItem"
import todosData from "./storage/todosData"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todosData // Todos are stored here
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(id) { // This is a change handler for a todoItem
        this.setState(prevState => {
          const updatedTodos = prevState.todos.map( todo => {
              if (todo.id === id) {
                return {
                  ...todo,
                  completed: !todo.completed
                }
              }
              return todo
            })
          // console.log(prevState.todos)
          // console.log(updatedTodos)
          return {
            todos: updatedTodos
          }
        })
    }
    
    render() {
        const todoItems = this.state.todos.map( // This renders all items
          item => <TodoItem // This renders one item
            key={item.id}
            item={item}
            handleChange={this.handleChange}
          />
        )
        return ( // Here we insert all our items
            <div className="todo-list">
                {todoItems} 
            </div>
        )    
    }
}

export default App