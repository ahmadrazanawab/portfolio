import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'

function App() {
  return (
     <div>
          <Navbar /> 
          <Home/>
          {/* <div className='w-full  bg-indigo-400 h-screen '> </div> */}
    </div>
  )
}

export default App