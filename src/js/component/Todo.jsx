import React, { useState } from "react";
import TodoForm from "./ToDoForm.jsx";
import TodoItem from "./ToDoItem.jsx";

function Todo() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    let id = 1;
    if(todos.length > 0) {
      id = todos[0].id + 1
    }
    const todo = {id: id, text: text, completed: false, important: false}
    const newTodos = [todo, ...todos]
    setTodos(newTodos)
  };

  const removeTodo = (id) => {
    const updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const completeTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(updatedTodos)
  }
  
  const sortedTodos = todos.sort((a, b) => b.important - a.important)
  return (
    <div className="todo-app mt-5">
      <h1 className="fs-2 m-4">Lista de tareas</h1>
      <TodoForm addTodo={addTodo} />
      {sortedTodos.map((todo) => {
        return (
          <TodoItem removeTodo={removeTodo} completeTodo={completeTodo} todo={todo} key={todo.id}/>
        )
      })}
    </div>
  );
}

export default Todo;