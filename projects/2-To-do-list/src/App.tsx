import './App.css'
import './index.css'
import List, { type ListProps } from './components/List'
import {useState } from 'react'
function App() {
  const [lists,setLists] = useState<ListProps[]>([]);
  
  const createList = ()=>{
    setLists(prevState => [...prevState,{listName:"NEW LIST [EDIT HERE]",tasks:[]}])
  }
  return (
    <div className='flex flex-col justify-center items-center bg-white h-screen'>
      <div id='lists' className='p-2 bg-white h-[80vh] w-[97vw] rounded-md overflow-y-auto'>
        {lists.map((list,index)=>
            <List listName={list.listName} tasks={list.tasks} key={index}/>
        )}
      </div>
      
      <div onClick={createList} className='select-none hover:cursor-pointer hover:bg-gray-300 text-center bg-amber-400 text-amber-900 text-[4vh] rounded-full w-[4vh] h-[4vh] leading-[3vh]'>+</div>
      
    </div>
  )
}

export default App
