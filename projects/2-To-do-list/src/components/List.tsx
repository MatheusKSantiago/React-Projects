import { useState, type FunctionComponent } from "react";
import type { task } from "./Task";
import Task from "./Task";

export type ListProps = {
    listName: string
    tasks: task[]
}
const List : FunctionComponent<ListProps> =  ({listName,tasks}) => {
    const [_tasks,setTasks] = useState<task[]>(tasks)

    const createTask = ()=>{
        setTasks(prevState => [...prevState,{name: "new task [edit]",isDone:false}])    
    }
    return (
        <div className="flex bg-blue-50 text-black flex-col items-end mb-8 ">
            <div contentEditable spellCheck={false} className=" w-[100%] text-center border-b-1 mb-2 border-b-gray-900">{listName}</div>
            {_tasks.map((task,index)=>{
                return (
                    <Task key={index} name={task.name} isDone={task.isDone} doneDateTime={task.doneDateTime}/>    
                );
            })}
            <div onClick={createTask} className='select-none hover:cursor-pointer  hover:bg-amber-500 text-center bg-amber-400 text-amber-900 text-[4vh] rounded-full w-[4vh] h-[4vh] leading-[3vh]'>+</div>
        </div>
    );
}
export default List;