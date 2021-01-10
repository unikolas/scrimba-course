import React from "react"
import TodoItem from "./TodoItem"
import todosData from "../storage/todosData.js"

const todos = todosData.map(
  function (todo) {
    return <TodoItem key={todo.id} todo={todo} />
  }
)

function MainContent() {
  return (
    <div className="todo-list">
      {todos}
    </div>
  )
}

export default MainContent