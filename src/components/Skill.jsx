import React from 'react'
import { motion } from "framer-motion"
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
import react from '../assets/react.png'
import tc from '../assets/tc.png'
import Framer from '../assets/Framer.png'
import ts from '../assets/ts.png'
import gh from '../assets/gh.png'

const Skill = () => {
    const teches = [
        {
            id: 1,
            src:html,
            title: "html",
            style:"shadow-orange-500"  
        },
        {
            id: 2,
            src:css,
            title: "css",
            style:"shadow-blue-500"  
        },
        {
            id: 3,
            src:js,
            title: "JavaScript",
            style:"shadow-yellow-500"  
        },
        {
            id: 4,
            src:react,
            title: "react.js",
            style:"shadow-blue-600 "  
        },
        {
            id: 5,
            src:tc,
            title: "tailwind",
            style:"shadow-sky-400"
        },
        
        {
            id: 6,
            src:gh,
            title: "Github",
            style:"shadow-gray-400 "  
        },
        {
            id: 7,
            src:ts,
            title: "typescript",
            style:"shadow-blue-600 "  
        },
        {
            id: 8,
            src:Framer,
            title: "Framer",
            style:"shadow-green-400"  
        },
        
    ]
  return (
    <div id="Skill" className='bg-slate-700 py-10 border-t-2 border-solid border-black'>
          <div className='md:mx-28  md:py-6'>
              <div className='flex  flex-col items-center'>
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
                      className='md:text-4xl text-white border-b-4 border-solid mb-2 border-white'>My Skills</motion.h4>
                  <motion.p
                       initial={{
                        opacity: 0,
                      }}
                      whileInView={{
                        opacity: 1,
                      }}
                      transition={{
                        delay: 0.2,
                      }}
                      className='text-sm text-slate-300 mx-1'>These are the technologies I've learned with.</motion.p>
              </div>

              <motion.div className='flex flex-wrap justify-center mx-1'>
                  {
                      teches.map(({id,src,title,style}) => {
                          return <div key={id} className={`bg-slate-600 mx-2 hover:scale-105 duration-500 shadow-md hover:drop-shadow-md ${style} rounded-lg w-52 my-4 h-28 flex justify-center items-center flex-col cursor-pointer`}>
                                 <img src={src} className='w-16 h-16 rounded-lg ' alt="html pic" />
                              <p className='text-white'>{title}</p>
                               </div>
                      })
                  }
              </motion.div>
          </div>
    </div>
  )
}

export default Skill
