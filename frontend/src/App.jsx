// import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
function App() {

  return (

    <>
    <Router>
    <div className='container'>
      <Routes>
         <Route path='/' element={<Dashboard/>} />
         <Route path='/register' element={<Login/>} />
         <Route path='/login' element={<Register/>} />
      </Routes>
    </div>
    </Router>
     </>
  )
}

export default App
