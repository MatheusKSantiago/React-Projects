import { useState } from 'react'

import './App.css'
import './index.css'
function App() {
  const [counter, setCounter] = useState<number>(0)

  const incrementCounter = ()=>{
    setCounter(prevState => prevState + 1);
  }
  return (
    <>
      <div className='flex flex-col justify-center text-center bg-purple-300 h-screen'>
        <p className=' flex justify-center items-center bg-white w-64 h-64  mx-auto text-6xl rounded-full'>{counter}</p>
        <div onClick={incrementCounter} className='bg-blue-50 w-64 mx-auto mt-3.5 rounded-2xl py-4 hover:bg-blue-100 hover:cursor-pointer transition duration-150 select-none'>click</div>        
      </div>
    </>
  )
}

export default App
