import React from 'react'
import { RiCloseCircleLine } from "react-icons/ri"
import { BiCheckCircle } from "react-icons/bi"

function TodoItem(props) {
    const { todo, removeTodo, completeTodo } = props
    return (
        <div className={todo.completed ? "item complete" : "item" }>
            {todo.text}
            <div className="iconsContainer me-2 d-flex align-items-center fs-4">
                <RiCloseCircleLine onClick={() => removeTodo(todo.id)}/>
                <BiCheckCircle onClick={() => completeTodo(todo.id)}/>
            </div>
        </div>
    )
}

export default TodoItem;