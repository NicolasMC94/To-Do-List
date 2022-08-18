import React, { useState } from "react";

function TodoForm(props) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    props.addTodo(input)
    setInput("")
  }

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="todo-input fs-5 border-bottom "
        placeholder="Añade una tarea"
      />
      <button type="submit" className="btn btn-secondary btn-lg todo-button fs-5">Añadir</button>
    </form>
  );
}

export default TodoForm