import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import Card from './components/card'

function App() {
  

  return (
    <>
    <h1 className='bg-green-500 justify-center rounded-xl p-4 mb-4'>Tailwindcss Test</h1>
    <Card username="Rishabh Singh" btntext="Click me"/>               {/*this is passing props to the card component*/}
    <Card username="Shivam Sahu" btntext="me too"/>
    <Card username="shivi" btntext="cowww "/>
    </>
  )
}

export default App
