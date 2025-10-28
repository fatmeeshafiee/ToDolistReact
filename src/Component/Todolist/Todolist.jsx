import Todoitems from "../Todoitems/Todoitems";

export default function Todolist({todoslist,status,deleteTodo}){
    return(
        <>
       <ul className="list-reset " >       
        {
            todoslist.map(
                (value,index)=><Todoitems todoitem={value} key={index} status={status} deleteTodo={deleteTodo}></Todoitems>
                    )
        }
        </ul>
        </>
    )
}