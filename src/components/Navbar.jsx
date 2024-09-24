import React, { useState } from "react";
// import Button from "./Button";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/" },
    { name: "Skill", link: "/" },
    { name: "Project", link: "/" },
    { name: "Contact", link: "/" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md fixed w-full bg-white left-0 top-0  border-b-2 border-solid border-gray-900">
      <div className="md:flex justify-between md:mx-4 ">
        <div className="md:flex items-center py-4 font-[Poppins] text-2xl">
          <span className="cursor-pointer mx-4 hover:text-gray-400 duration-500">
            Ahmad Raza
          </span>
        </div>
              <div onClick={()=>setOpen(!open)} className="text-3xl absolute right-8 top-4 md:hidden">
                   {
                     !open  ? <IoMenu />: <IoClose/>
                   }

              </div>
        <ul className={`md:flex  md:static   md:items-center   pb-4 py-4 w-full md:w-auto   font-[Poppins] absolute   md:z-auto z-[-1] bg-white  md:text-1xl items-center cursor-pointer transition-all duration-500 ease-in ${open ? 'top-18 opacity-100':'top-[-490px]'} md:opacity-100 opacity-0`}>
          {Links.map((link) => (
            <li key={link.name} className="flex  justify-center  md:mx-3 md:my-0 my-7 mx-0 text-xl md:text-1xl text-gray-900 hover:text-gray-400 duration-500">
              {link.name}
            </li>
          ))}
          {/* <Button className='flex justify-center'>Get Started</Button> */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
