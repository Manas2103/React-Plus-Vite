import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
    <div className='h-screen w-full duration-200' style={{backgroundColor : color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-3xl'>
          <button 
          className='outline-none shadow-lg px-4 py-1 rounded-full text-white' 
          style={{backgroundColor : "red"}}
          onClick={() => setColor("red")}>
            Red
          </button>
          <button 
          className='outline-none shadow-lg px-4 py-1 rounded-full text-white' 
          style={{backgroundColor : "green"}}
          onClick={() => setColor("green")}>
            Green
          </button>
          <button 
          className='outline-none shadow-lg px-4 py-1 rounded-full text-white' 
          style={{backgroundColor : "black"}}
          onClick={() => setColor("black")}>
            Black
          </button>
          <button 
          className='outline-none shadow-lg px-4 py-1 rounded-full text-white' 
          style={{backgroundColor : "blue"}}
          onClick={() => setColor("blue")}>
            Blue
          </button>
          <button 
          className='outline-none shadow-lg px-4 py-1 rounded-full text-black' 
          style={{backgroundColor : "white"}}
          onClick={() => setColor("white")}>
            White
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
