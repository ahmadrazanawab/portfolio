import React, { useState } from 'react'
import Context from './Context';


const ContactState = (props) => {
   const host = "http://localhost:8000/api/v1/contact";
   
   
    
    const [msgs, setMsg] = useState([])
    
    const addMsg = async (name, email, msg) => {
        console.log("Enter the elemet ok");
        const response = await fetch(`${host}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, msg })
        });
        
        const massege = await response.json();
        // console.log(msgs.concat(massege));
        console.log(massege);
        
        
    }
  return (
    <Context.Provider value={{msgs,setMsg,addMsg}}>
      {props.children}
    </Context.Provider>
  )
}

export default ContactState
