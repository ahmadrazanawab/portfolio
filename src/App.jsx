import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skill from './components/Skill'
import Project from './components/Project'

function App() {
  return (
     <div>
          <Navbar /> 
          <Home />
          <About/>
          <Skill />
          <Project/>
    </div>
  )
}

export default App