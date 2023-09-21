import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Headers from './Component/Headers'
import { Route, Routes } from 'react-router'
import Home from "./Component/Home"
import About from "./Component/About"
import Event from "./Component/Event"
import Gallary from "./Component/Gallary"
import Contact from "./Component/Contact"
import Login from './Component/Login'
import Error from "./Component/Error"
import Signup from "./Component/Signup"

function App() {
  return (
    <>
      <Headers/>

    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/event' element={<Event/>}></Route>
      <Route path='/gallary' element={<Gallary/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/*' element={<Error/>}/> 
    </Routes>
    </>
  )
}

export default App
