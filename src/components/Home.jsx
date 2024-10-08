import React  from 'react'
import { motion } from "framer-motion"
import myImage from '../assets/ahmadraza.jpg'
import { Link } from 'react-scroll'

const Home = () => {
    
  return (
      <div id="Home" className='md:mt-10 pt-24 w-full bg-slate-700 h-full left-0 right-0 md:flex justify-center'>
          
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
              className='md:flex border-b-2 border-solid border-black'>
              <div  className='md:flex md:flex-col md:ml-36 justify-center my-4 mx-4'> 
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
                      className='font-bold text-white md:text-5xl text-3xl tracking-tighter'>Welcome!</motion.h2>
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
                      className='font-bold  md:text-4xl text-2xl  md:tracking-wide text-white'>Md Ahmad Raza</motion.h4>
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
                      className='text-slate-300  tracking-tighter mt-4 mb-4'>Hello there! I’m a MERN Developer from India. Since my youngest age I have been passionate about design and art. I grew up with the Internet, and naturally took a path according to this passion. Web Development is a way for me to keep track of all my passions. See ya!</motion.p>
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
                      className='text-slate-300 tracking-tighter'>With a strong emphasis on "Progressive Enhancement", I look for creative ways to push the boundaries of website front-end code without compromising on browser support and performance.</motion.p>
                  <Link to='Skill' smooth duration={700}  className='bg-indigo-600  text-white w-40 mt-4 md:mt-6  text-xl py-1 px-4 cursor-pointer text-center  rounded font-[Poppins] md:ml-4 hover:text-gray-400'>My Skills</Link>
              </div>
              <motion.div
                  initial={{
                    x: 100,
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
                  className='md:w-full mx-4 pt-2 md:my-10'>
                  <img src={myImage} className='md:w-[300px] md:h-[400px] rounded-2xl' alt="My Pic" />
                  
              </motion.div>
          </motion.div>
    </div>
  )
}

export default Home
