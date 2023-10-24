import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'

//using this fr setting layouts
//header and footers are constant just other components get injected at the place of outlet
//its the feature of react router dom

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </> 
  ) 
}

export default App