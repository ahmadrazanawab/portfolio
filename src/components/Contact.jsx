import React, { useContext, useEffect, useState }  from 'react'
import Context from '../ContextApi/Context'

const Contact = () => {

    const { addMsg ,setMsg,msgs} = useContext(Context);

    useEffect(() => {
        setMsg();
    },[])
    
    // const [note, setNote] = useState({ name: "", email: "", msg: "" });
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [msg, setMsgs] = useState('');
    
    
    
    
    const handleSubmitbtn = (e) => {
        e.preventDefault();
        addMsg(name, email, msg);
        setName("");
        setEmail("");
        setMsgs("");
    }
   
  return (
    <div id="Contact" className='bg-slate-700 py-20 w-full border-t-2 border-solid border-black'>
          <div className='flex flex-col md:ml-52 ml-10'>
              <div className='flex flex-col'>
                  <h4 className='md:text-3xl text-xl text-white my-5 ml-5'><span className='font-bold   border-b-4 border-solid border-slate-200'>Contact</span></h4>
                  <p className='text-sm ml-5 text-slate-50 my-5 '>Submit the form below to get in touch with me.</p>
              </div>
              <div className='w-5/6 bg-slate-700 pb-10'>
                  <form  action="" method="post" className='flex flex-col w-full p-4'>
                      <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)}  id=""  className='bg-slate-700 text-white font-medium md:p-2 p-1 my-3 outline-none rounded-sm border-2  border-solid border-white' placeholder='Enter Your Name' />
                      <input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}  id=""  className='bg-slate-700 md:p-2 p-1 text-white font-medium outline-none rounded-sm my-3 border-2 border-solid boder-white' placeholder='Enter Your Email' />
                      <textarea cols="10" rows="5" name="msg" value={msg} onChange={(e)=>setMsgs(e.target.value)}  className='bg-slate-700 my-3 md:p-2 p-1 text-white font-medium outline-none rounded-sm border-2 border-solid border-white' placeholder='Enter Your Message'></textarea>
                      <div className='py-3'><button onClick={handleSubmitbtn} className='bg-gradient-to-b from-cyan-500 to-blue-500 px-8 py-2 rounded-md shadow-md text-white cursor-pointer hover:scale-105'>Let's talk</button></div>
                  </form>
              </div>
          </div>
    </div>
  )
}

export default Contact
