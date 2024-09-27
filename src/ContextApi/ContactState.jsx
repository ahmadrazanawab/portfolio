import React, { useState } from 'react'
import Context from './Context';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";



const ContactState = (props) => {
   const host = "http://localhost:8000/api/v1/contact";
   
   
    
    const [msgs, setMsg] = useState([])
    
    const addMsg = async (name, email, msg) => {
        
            const response = await fetch(`${host}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, msg })
            });
            
            const massege = await response.json();
            console.log(massege);

            if (response.ok) {
                toast.success("Form Submitted Successfully", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                })
            }
            else {
                toast.error("Failed to submit form. Please try again.");
            }
        
    }
    

    
  return (
    <Context.Provider value={{msgs,setMsg,addMsg}}>
      {props.children}
    </Context.Provider>
  )
}

export default ContactState
