import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'

//first method

// const router = createBrowserRouter([
//   {
//     path : '/',
//     element : <App/>,
//     children : [
//       {
//         path : '',
//         element : <Home/>
//       },
//       {
//         path : 'about',
//         element : <About/>
//       }
//       //moore children can be added under this like contact-us etc
//     ]
//   }
// ])

//second method

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = "/" element = {<App/>} >
      //nesting
      <Route path='' element = {<Home/>}/>
      <Route path='about' element = {<About/>}/>

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
