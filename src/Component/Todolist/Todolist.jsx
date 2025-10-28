import Todoitems from "../Todoitems/Todoitems";

export default function Todolist({todoslist,status}){
    return(
        <>
       <ul className="list-reset " >       
        {
            todoslist.map(
                (value,index)=><Todoitems todoitem={value} key={index} status={status}></Todoitems>
                    )
        }
        </ul>
        </>
    )
}