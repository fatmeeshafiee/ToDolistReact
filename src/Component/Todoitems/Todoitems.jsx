import EditTodo from "../EditTodo/EditTodo";
import DeleteTodo from "../DeleteTodo/DeleteTodo";
export default function Todoitems({todoitem,status,deleteTodo}){
    return(
         <li className="relative flex items-center justify-between px-2 py-6 border-b">
            <div className="*:text-black">
                <input type="checkbox"  className="" checked={todoitem.status} onChange={()=>{status(todoitem.id)}} />
                <p  className={`inline-block mt-1 ml-2 text-gray-600 ${todoitem.status? "line-through" : ""}  `}>{todoitem.name}</p>
            </div>
            <button type="button" className="absolute right-0 flex items-center  space-x-1">
            <EditTodo></EditTodo>
            <DeleteTodo deleteTodo={()=>deleteTodo(todoitem.id)}></DeleteTodo>
            </button>
            </li>
    )
}