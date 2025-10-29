import EditTodo from "../EditTodo/EditTodo";
import DeleteTodo from "../DeleteTodo/DeleteTodo";
import { useState } from "react";
export default function Todoitems({todoitem,status,deleteTodo}){
    function closeInput(event){
        if(event.key=="Enter"){
            seteditmode(false)
        }
    }
    let [editmode,seteditmode]=useState(false)
    return(
         <li className="relative flex items-center justify-between px-2 py-6 border-b">

            {
                editmode
                 ? <input onKeyDown={()=>closeInput(event)} defaultValue={todoitem.name} type="text"  className="w-full px-2 py-3 border rounded outline-none border-grey-600 bg-gray-600"  />
                 :(
            <div>
                <div className="*:text-black">
                <input type="checkbox"  className="" checked={todoitem.status} onChange={()=> {status(todoitem.id)}} />
                <p  className={`inline-block mt-1 ml-2  text-gray-600 ${todoitem.status?"line-through" : ""}  `}>{todoitem.name}</p>
                </div>
                <button type="button" className="absolute right-0 flex items-center  space-x-1">
                <EditTodo seteditmode={seteditmode} ></EditTodo>
                <DeleteTodo deleteTodo={()=>deleteTodo(todoitem.id)}></DeleteTodo>
                </button> 
            </div>
                 )
            }
            </li>
    )
}