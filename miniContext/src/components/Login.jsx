import React from 'react'
import { useState, useContext } from 'react'
import UserContext from '../context/UserContext'
import UserContextProvider from '../context/UserContextProvider'


function Login() {
  //const [count, setCount] = useState(0)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const {setUser} = useContext(UserContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({username, password})
  }
  return (
    <div>
      {/* Like wise we can get the acces of user context here */}
      <h2>Login</h2>
      <input
      value={username} 
      onChange={(e) => setUsername(e.target.value)}
      type="text" 
      placeholder='username' />
      <input 
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      type="text" 
      placeholder='password' />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login