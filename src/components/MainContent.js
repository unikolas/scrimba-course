import React from "react"
import TodoItem from "./TodoItem"

function MainContent() {
  return (
    <div className="todo-list">
      <TodoItem value="Hello"/>
      <TodoItem value="Hello"/>
      <TodoItem value="Hello"/>
    </div>
  )
}

export default MainContent