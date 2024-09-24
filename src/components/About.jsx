import React from 'react'
import { motion } from "framer-motion"

const About = () => {
  return (
    <div className='bg-slate-600'>
          <div className='md:mx-40   md:py-10 shadow-md'>
              <motion.div className='flex justify-center mx-4 '>
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
                      className='md:text-4xl text-2xl text-white font-bold md:mb-10 my-4 border-b-4 border-solid border-black'>About Me</motion.h2>
              </motion.div>
              <div className='flex justify-center flex-col mx-4'>
                  <motion.p
                      initial={{
                        opacity: 0,
                      }}
                      whileInView={{
                        opacity: 1,
                      }}
                      transition={{
                        delay: 0.3,
                        duration: 1,
                      }}
                      className='tracking-tighter md:text-xl my-2  text-white'>Hello there! I’m a Front-end Developer from India. Since my youngest age I have been passionate about design and art. I grew up with the Internet, and naturally took a path according to this passion. Web Development is a way for me to keep track of all my passions. See ya!</motion.p>
                  <motion.p
                      initial={{
                        opacity: 0,
                      }}
                      whileInView={{
                        opacity: 1,
                      }}
                      transition={{
                        delay: 0.3,
                        duration: 1,
                      }}
                      className='tracking-tighter md:text-xl  my-2  pb-4 text-white'>With a strong emphasis on "Progressive Enhancement", I look for creative ways to push the boundaries of website front-end code without compromising on browser support and performance.</motion.p>
              </div>
          </div>
    </div>
  )
}

export default About
