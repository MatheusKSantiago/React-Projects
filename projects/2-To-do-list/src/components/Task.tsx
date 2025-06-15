import { useState, type FunctionComponent } from "react"

export type task = {
    name: string
    isDone: boolean
    doneDateTime?: Date
}

const Task : FunctionComponent<task> = ({name, isDone, doneDateTime})=>{
    const [_doneDateTime,setDoneDate] = useState<Date | undefined>(doneDateTime)
    const isDoneDate = (e: React.ChangeEvent<HTMLInputElement>) =>{
        if(e.target.checked){
            setDoneDate(new Date())
        }else{
            setDoneDate(undefined)
        }
    }
    return (
        <div className='flex text-black bg-blue-50 w-full min-h-[5vh] items-center justify-between my-1 '>
            <input onChange={isDoneDate} className='ml-2 mr-2 scale-135' type='checkbox' defaultChecked={isDone}/>
            <div contentEditable spellCheck={false} className='w-[60%] break-words'>{name}</div>
            <p className="text-center mr-2 text-amber-900">{_doneDateTime?`${(_doneDateTime.getDay()+1).toString().padStart(2,'0')}/${(_doneDateTime.getMonth()+1).toString().padStart(2,'0')}/${_doneDateTime.getFullYear()} ${(_doneDateTime.getHours()).toString().padStart(2,'0')}:${(_doneDateTime.getMinutes()).toString().padStart(2,'0')}`:``}</p>
        </div>
    );
}

export default Task;