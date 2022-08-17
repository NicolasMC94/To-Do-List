import React, { useState } from "react";

function ToDoForm(props) {
    const [inputValue, setInputValue] = useState("");

    const handleChange = e => {
        setInputValue(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: inputValue
        });

        setInputValue("");
    }
    
    return (
    <form className="todo-form" onSubmit={handleSubmit}>
       <input 
        type="text" 
        placeholder="Añade una tarea" 
        value={inputValue} 
        name="text" 
        className="todo-input"
        onChange={handleChange}
        />
        <button className="todo-button">Añadir</button>
    
    </form>
  )
}

export default ToDoForm;