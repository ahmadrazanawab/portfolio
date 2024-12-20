import React, { useState } from "react";
import { Link } from "react-scroll";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  let Links = [
    { id:1,name: "Home"},
    { id:2,name: "About"},
    { id:3,name: "Skill"},
    { id:4,name: "Project"},
    { id:5,name: "Contact"},
  ];
    const [open, setOpen] = useState(false);
    // const [nav, setNav] = useState(false); onClick={()=>setNav(nav)}

   const OnClose = (e) => {
        e.preventDefault();
        if (open === true) {
            setOpen(!open)
       }
       
    }
  return (
    <div className="shadow-md fixed w-full bg-slate-600 left-0 top-0  border-b-2 border-solid border-gray-900">
      <div className="md:flex justify-between md:mx-4 ">
        <div className="md:flex items-center py-4 font-[Poppins] text-2xl">
          <span className="cursor-pointer mx-4 text-white hover:text-pink-500 duration-500">
            Ahmad Raza
          </span>
        </div>
              <div onClick={()=>setOpen(!open)} className="text-3xl absolute right-8 top-4 md:hidden">
                   {
                     !open  ? <IoMenu />: <IoClose/>
                   }

              </div>
        <ul  onClick={OnClose} className={`md:flex  scroll-smooth md:static   md:items-center   pb-4 py-4 w-full md:w-auto   font-[Poppins] absolute   md:z-auto z-[10] bg-slate-600  md:text-1xl items-center cursor-pointer transition-all duration-500 ease-in ${open ? 'top-18 opacity-100':'top-[-490px]'} md:opacity-100 opacity-0`}>
          {Links.map(({id,name}) => (
            <li key={id}  className="flex  justify-center  md:mx-3 md:my-0 my-7 mx-0 text-xl md:text-1xl text-white hover:text-pink-500 scroll-smooth duration-500">
              <Link to={name} className=" scroll-smooth duration-500 "  onClick={()=>{setOpen(!open)}}>{name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
