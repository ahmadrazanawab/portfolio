import React from 'react'
import { motion } from "framer-motion"
import inotebook from '../assets/inotebook.png';
import textutils from '../assets/textutils.png';
import tictactoe from '../assets/tictactoeImage.png';

const Project = () => {
  
    // this is a my project section 
    
    const project = [
        {
            id: 1,
            img: inotebook,
            link:"https://inotebookweb.netlify.app/",
            title: "iNotebook",
            desc:"html css javascript react.js express node.js and mongoDB",
        },
        {
            id: 2,
            img: textutils,
            link:"https://text-tutiles.netlify.app/",
            title: "Textutils",
            desc:"html css javascript react.js express node.js",
        },
        {
            id: 3,
            img: tictactoe,
            link:"https://tictactoeapp-ahmad.netlify.app/",
            title: "Tic Tac Toe",
            desc:"html css javascript react.js express node.js",
        },
    ]
    
    return (

    <div id="Project" className='bg-slate-700 py-5 border-t-2 border-solid border-black'>
          <div className='flex  items-center flex-col py-10'>
              <div className='text-3xl text-white border-b-4 border-solid border-slate-200 pt-4 my-4'>
                    <motion.h4
                         initial={{
                            opacity: 0,
                          }}
                          whileInView={{
                            opacity: 1,
                          }}
                          transition={{
                            delay: 0.2,
                          }}
                        className='font-bold'>Project</motion.h4>
              </div>
                <div className='flex flex-wrap justify-center my-5 '>

                    {
                        project.map(({id,img,link,title,desc}) => {
                           return <div key={id} className={`bg-no-repeat bg-cover bg-opacity-30 z-1   flex flex-col items-center my-2 mx-2 px-2 pb-6 pt-2 md:w-72  w-48  rounded-lg cursor-pointer shadow-lg hover:scale-105 duration-2s00 shadow-pink-700 `} style={{backgroundImage:`url(${img})`}}>
                               <h4 className='my-1  md:text-2xl text-gray-950 font-bold '>{title}</h4>
                               <p className=' mb-6 text-black font-semibold text-opacity-[60]'>{desc}</p>
                                <button className='tracking-tighter   shadow-md hover:scale-125 bg-blue-700 w-14 h-8 duration-500 rounded-lg '><a  href={link} target="_blank" rel="noreferrer"><small className='text-slate-50 font-semibold'>view now</small></a></button>
                        </div>
                        })
                    }
              </div>
          </div>
    </div>
  )
}

export default Project
