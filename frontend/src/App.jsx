// import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Header  from './components/Header'
import Login from './pages/Login'
function App() {

  return (

    <>
    <Router>
    <div className='container'>
      <Header/>
      <Routes>
         <Route path='/' element={<Dashboard/>} />
         <Route path='/register' element={<Register/>} />
         <Route path='/login' element={<Login/>} />
      </Routes>
    </div>
    </Router>
     </>
  )
}

export default App
