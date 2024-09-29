import React from 'react'
import { motion } from "framer-motion"

const About = () => {
  return (
    <div id="About" className='bg-slate-700 pt-6 z-[-1]'>
          <div className='md:mx-40   md:py-10'>
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
                      className='md:text-4xl text-2xl text-white font-bold md:mb-10 my-4 border-b-4 border-solid border-white'>About</motion.h2>
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
                      className='tracking-tighter md:text-xl my-2  text-slate-300'>
                      Hi, I’m Md Ahmad Raza, a passionate Full-Stack Developer specializing in the MERN stack. I enjoy transforming complex problems into simple, elegant solutions.
                  </motion.p>
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
                      className='tracking-tighter md:text-xl  my-2  pb-4 text-slate-300'>
                        My journey started with a love for coding, and over the years, I’ve become proficient in building end-to-end web applications using the MERN stack. From my first "Hello World" to developing fully functional web platforms, I have always been driven by a passion for technology and problem-solving.
                  </motion.p>
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
                      className='tracking-tighter md:text-xl  my-2  pb-4 text-slate-300'>
                      As a MERN developer, I focus on clean, maintainable code and scalable solutions. My goal is to build responsive, user-friendly applications that meet business needs and exceed user expectations.
                  </motion.p>
              </div>
          </div>
    </div>
  )
}

export default About
