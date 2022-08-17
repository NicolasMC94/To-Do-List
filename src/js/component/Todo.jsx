import React, { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import ToDoForm from "./ToDoForm.jsx";

const Todo= ({ items, completeItem, removeItem, updateItem }) => {
    const [edit, setEdit] = useState({
        id: null,
        value: ""
    });
  
    const submitUpdate = value => {
        updateTodo(edit.id, value);
        setEdit({
          id: null,
          value: ""
        });
    };

    if (edit.id) {
        return <ToDoForm edit={edit} onSubmit={submitUpdate} />;
    }

    return items.map((item,index)=>(
    <div className={item.isComplete ? "item-row complete" : "item-row"} key={index}>

        <div key={item.id} onClick={() => completeItem(item.id)}>
            {item.text}
        </div>

        <div className="icons">
            <RiCloseCircleLine onClick={() => removeTodo(item.id)} className="delete-icon"/>
            <TiEdit onClick={() => setEdit({ id: item.id, value: item.text })} className='edit-icon'/>
        </div>

    </div>
  ))
}

export default Todo
