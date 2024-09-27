import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Contact from "./components/Contact";
import ContactState from "./ContextApi/ContactState";

function App() {
  return (
    <>
      <ContactState>
        <Navbar />
        <Home />
        <About />
        <Skill />
        <Project />
        <Contact />
     </ContactState>
    </>
  );
}

export default App;
