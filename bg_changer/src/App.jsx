import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("grey")

  return (
    
    <div className='fixed inset-0 w-screen h-screen' style={{backgroundColor:color}}>
      <h1 className='text-black font-bold outline-1 justify-center flex flex-wrap inset-1'>Background Color Changer</h1>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center bg-blue-700 rounded-4xl p-3.5 gap-3 shadow-xl'>
          <button onClick={()=>{setColor("violet")}} className='outline-1 rounded-4xl px-4 py-1 text-black shadow-2xl'style={{backgroundColor:"violet"}}>Violet</button>
          <button onClick={()=>{setColor("indigo")}}className='outline-1 rounded-4xl px-4 py-1 text-black shadow-2xl'style={{backgroundColor:"indigo"}}>Indigo</button>
          <button onClick={()=>{setColor("blue")}}className='outline-1 rounded-4xl px-4 py-1 text-black shadow-2xl'style={{backgroundColor:"blue"}}>Blue</button>
          <button onClick={()=>{setColor("green")}}className='outline-1 rounded-4xl px-4 py-1 text-black shadow-2xl'style={{backgroundColor:"green"}}>Green</button>
          <button onClick={()=>{setColor("yellow")}}className='outline-1 rounded-4xl px-4 py-1 text-black shadow-2xl'style={{backgroundColor:"yellow"}}>Yellow</button>
          <button onClick={()=>{setColor("orange")}}className='outline-1 rounded-4xl px-4 py-1 text-black shadow-2xl'style={{backgroundColor:"orange"}}>Orange</button>
          <button onClick={()=>{setColor("red")}}className='outline-1 rounded-4xl px-4 py-1 text-black shadow-2xl'style={{backgroundColor:"red"}}>red</button>
        </div>
      </div>
    </div>

  
  )
}


export default App
