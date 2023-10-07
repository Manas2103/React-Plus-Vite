import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  //let counter = 0 // it will not work as react uses hooks to update its ui

  /*Use State: useState()
  it is a method which takes initial value like 
  0 or true or false or empty string etc
  it returns an array of size two the 0th index
  of array is the actual variable
  and setCounter() "name can be anything" is a 
  method which takes the updated value 
  of the variable and thus is injected into the ui by react*/

  let [counter, setCounter] = useState(0)

  const addValue = function(){
    setCounter(counter+1)
  }

  const removeValue = () => {
    setCounter(counter-1)
  }

  //React's work here is to update the ui in the website,
  //with the help of hooks like useState it can update multiple variables used in the ui

  return (
    <>
      <h2>Counter : {counter}</h2>
      <button onClick={addValue}>Click To Add: {counter}</button>
      <br />
      <button onClick={removeValue}>Click to Remove: {counter}</button>
    </>
  )
}

export default App