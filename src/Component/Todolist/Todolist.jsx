import Todoitems from "../Todoitems/Todoitems";

export default function Todolist({todos}){
    return(
        <>
       <ul className="list-reset " >       
        {
            todos.map(
                (todo,index)=><Todoitems todo={todo} key={index}></Todoitems>
                    )
        }
        </ul>
        </>
    )
}