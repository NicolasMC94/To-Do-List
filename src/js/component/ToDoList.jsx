import React, { useState } from "react";
import ToDoForm from "./ToDoForm.jsx";
import swal from 'sweetalert';
import Todo from "./Todo.jsx";

function ToDoList() {
    const [items, setItems]  = useState([]);
  
    const añadir = item =>{
        // if(!item.text || /^\s*$/.test(item.text)){
        //     return
        // }
        
        if(!newItems){
            
            swal({
                title: "¡Cuidado!",
                text: "Añade una tarea!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
                })
            .then((willDelete) => {
                if (willDelete) {
                swal("¡Adelante! Ya sabes cómo hacerlo", {
                icon: "success",
                });
                } else {
                swal("Como quieras...");
                }
                });

            }

    const newItems = [item, ...items]
    
    setItems(newItems);
    };

    const completeItems = id => {
        let updateItems = items.map(item => {
        if (Todo.id === id) {
            item.isComplete = !item.isComplete
        }
          return items; 
        })
        setItems(updateItems);
    }
    return (
    <div>
        <h1>Lista de la compra</h1>
        <ToDoForm onSubmit={añadir}/>
        <Todo items={items} completeItems={completeItems} />
    </div>
  )
}

export default ToDoList




// const ToDoList = () =>{
//     // const [inputValue, setInputValue] = useState("");
//     const [items, setItems]  = useState([]);

//     function addItem(){
//         if(!inputValue){
            
//             swal({
//                 title: "¡Cuidado!",
//                 text: "Añade una tarea!",
//                 icon: "warning",
//                 buttons: true,
//                 dangerMode: true,
//               })
//               .then((willDelete) => {
//                 if (willDelete) {
//                   swal("¡Adelante! Ya sabes cómo hacerlo", {
//                     icon: "success",
//                   });
//                 } else {
//                   swal("Como quieras...");
//                 }
//               });
              
//         }
//         setItems((prevList) =>[prevList,inputValue]);
//         console.log(items);
//         setInputValue("");
//     }
//     return(
//         <div className="list">
//             <h1>To-Do List</h1>
//             <input type="text" placeholder="Añade una tarea" value={inputValue} onChange={e=> setInputValue(e.target.value)}/>
//             <button onClick={()=>addItem()}>Añadir</button>
//             <ul>
//                 {items.length==0?
//                     <li>La lista de tareas está vacía, añade una tarea</li> : 
//                     items.map((item,i)=>{
//                         return(
//                             <li key={i}>{item}</li>
//                         )
//                     })
//                 }
//             </ul>
//         </div>
//     )
// }

// export default ToDoList;