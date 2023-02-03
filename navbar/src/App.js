import React from 'react'
import Navbar from './Navbar'
import logo from './logo.svg'
import {Route,Routes} from 'react-router-dom'
function App() {
  return (
    <>
    <Routes>

      <Route path='/' element={<Navbar/>}/>
   </Routes>
   
    </>
  )
}

export default App
