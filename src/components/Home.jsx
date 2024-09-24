import React from 'react'
import { motion } from "framer-motion"
import Button from './Button'
import myImage from '../assets/ahmadraza.jpg'

const Home = () => {
  return (
      <div className='md:mt-20 mt-24 w-full #f8f9f9 h-full left-0 right-0 md:flex justify-center'>
          <motion.div
              initial={{
                x: -50,
              }}
              animate={{
                x: 0,
              }}
              transition={{
                delay: 0.2,
                type: "spring",
                stiffness: 100,
                damping: 50,
              }}
              className='md:flex'>
              <div className='md:flex md:flex-col md:ml-20 justify-center my-4 mx-4'> 
                  <motion.h2
                      initial={{
                        opacity: 0,
                      }}
                      whileInView={{
                        opacity: 1,
                      }}
                      transition={{
                        delay: 0.2,
                      }}
                      className='font-bold text-gray-900 md:text-5xl text-3xl tracking-tighter text-gray-700'>Hi,</motion.h2>
                  <motion.h4
                       initial={{
                        opacity: 0,
                      }}
                      whileInView={{
                        opacity: 1,
                      }}
                      transition={{
                        delay: 0.3,
                      }}
                      className='font-bold text-gray-900 md:text-4xl text-2xl  md:tracking-wide text-gray-900'>Md Ahmad Raza</motion.h4>
                  <motion.p
                       initial={{
                        opacity: 0,
                      }}
                      whileInView={{
                        opacity: 3,
                      }}
                      transition={{
                        delay: 0.4,
                        duration: 1,
                      }}
                      className='text-gray-700 tracking-tighter mt-4 mb-4'>Hello there! I’m a Front-end Developer from India. Since my youngest age I have been passionate about design and art. I grew up with the Internet, and naturally took a path according to this passion. Web Development is a way for me to keep track of all my passions. See ya!</motion.p>
                  <motion.p
                       initial={{
                        opacity: 0,
                      }}
                      whileInView={{
                        opacity: 2,
                      }}
                      transition={{
                        delay: 0.3,
                        duration: 1,
                      }}
                      className='text-gray-700 tracking-tighter'>With a strong emphasis on "Progressive Enhancement", I look for creative ways to push the boundaries of website front-end code without compromising on browser support and performance.</motion.p>
                   <div className='bg-sky-500 text-white rounded md:text-xl  md:w-28 w-20 text-base flex justify-center items-center md:mt-6 mt-4'>
                      <button className='p-2  items-center'>My Skills</button>
                  </div>
              </div>
              <motion.div
                  initial={{
                    x: 50,
                  }}
                  animate={{
                    x: 0,
                  }}
                  transition={{
                    delay: 0.1,
                    type: "spring",
                    stiffness: 100,
                    damping: 50,
                  }}
                  className='md:w-full mx-4 my-2 md:my-10'>
                  <img src={myImage} className='md:w-[300px] md:h-[400px] rounded-2xl' alt="My Pic" />
                  
              </motion.div>
          </motion.div>
         
    </div>
  )
}

export default Home
