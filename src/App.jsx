import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skill from './components/Skill'

function App() {
  return (
     <div>
          <Navbar /> 
          <Home />
          <About/>
          <Skill/>
    </div>
  )
}

export default App