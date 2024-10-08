import React from 'react'

const Button = ({children}) => {
  return (
      <button  className=' bg-indigo-600 text-white w-40 mt-4 md:mt-6  text-xl py-1 px-4 cursor-pointer  rounded font-[Poppins] md:ml-4 hover:text-gray-400 duration-500'>{ children}</button>
  )
}

export default Button
