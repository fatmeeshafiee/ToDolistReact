import Todolist from "../Todolist/Todolist";
import { useState } from "react";

export default function Todo(){
    let [todos,setTodos]=useState([
        {name:"Eating lunch",status:false},
        {name:"Reading Book",status:true},
        {name:"Studing",status:false},
    ])
    return(
    <>
        <div className="bg-zinc-800">
            <div className="flex items-center justify-center h-screen">
            <div className="w-full px-4 py-8 mx-auto shadow lg:w-2/4  bg-zinc-500">
            {/* header */}
                <div className="flex items-center mb-6">
                    <h1 className="mr-6  font-bold text-indigo-800"> To-Do Project |Fateme shafiee</h1>
                </div>
            {/* input */}
                <div className="relative">
                    <input type="text" id='input' placeholder="What needs to be done today?"
                    className="w-full px-2 py-3 border rounded outline-none border-grey-600 bg-gray-600" />
                </div>
            {/*list of todo  */}
              <Todolist todoslist={todos}></Todolist>
            </div>
            </div>
        </div>
    </>
        
    );
}