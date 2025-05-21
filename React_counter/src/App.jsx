import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0) 
  
// ✅ Example:

// const [count, setCount] = useState(0);
// This gives you:

// count: the current value (starts at 0)

// setCount: a function to update the value

// So if you call setCount(5), the count becomes 5, and your component updates to reflect the new value.
//let Count = 0;
const Addvalue=()=>{
  if(counter<20){
  setCounter(counter+1)}
}
const removeValue=()=>{
  if(counter>0){
  setCounter(counter-1)}
  
}
const reset=()=>{
  setCounter(counter=0)

}
const twice =()=>{
  setCounter(counter*2)
}
const divide =()=>{
  setCounter(counter/2)
}

  return (
    <>
    <h1>Hello world !! </h1>
    <h3>Count     {counter}</h3>
    <button onClick={Addvalue}>+</button>                                  
    <button onClick={removeValue}>-</button>
    <button onClick={reset}>Reset to Zero</button>
    <button onClick={twice}>x2</button>
    <button onClick={divide}>/2</button>
    
    
    
    
    </>
  )
}

export default App
