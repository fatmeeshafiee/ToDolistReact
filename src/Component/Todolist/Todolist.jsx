import Todoitems from "../Todoitems/Todoitems";

export default function Todolist({todoslist}){
    return(
        <>
       <ul className="list-reset " >       
        {
            todoslist.map(
                (value,index)=><Todoitems todoitem={value} key={index}></Todoitems>
                    )
        }
        </ul>
        </>
    )
}