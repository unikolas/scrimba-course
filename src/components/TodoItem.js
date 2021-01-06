import React from "react"

function TodoItem(props) {
  return (
    <div className="todo-item">
      <input type="checkbox" value="Todo Item"/>
      <p>{props.value ? props.value : "Nnnnone"}</p>
    </div>
  )
}

export default TodoItem