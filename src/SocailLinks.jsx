import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RxResume } from "react-icons/rx";

const SocailLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
         <h4> LinkedIn</h4>
          <BsLinkedin size={25} />
        </>
      ),
      href:"https://www.linkedin.com/in/ahmad-raza-4626a5232/",
    },
    {
      id: 2,
      child: (
        <>
          <h>GitHub</h>
          <FaGithub size={25} />
        </>
      ),
      href:"https://github.com/ahmadrazanawab",
    },
    {
      id: 3,
      child: (
        <>
          <h4>Email Id</h4>
          <MdEmail size={25} />
        </>
      ),
      href:"mailto:ahmadrazanawab@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
           <h4>Resume</h4>
          <RxResume size={25} />
        </>
      ),
      href:"https://github.com/ahmadrazanawab",
    },
  ];
  return (
    <div className="flex flex-col absolute top-[35%] left-0 fixed">
      <div className="flex flex-col">
        {links.map((link) => {
          return (
              <div key={link.id} className="flex  items-center">
                  <a  href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex my-1 py-4 px-4 bg-slate-400 w-32 h-12 items-center font-bold  ml-[-80px] hover:ml-[-5px] duration-500 justify-between  shadow-md rounded cursor-pointer">
                      {link.child}
                  </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SocailLinks;
