import { useState } from "react";
import { Link } from "react-scroll";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { TbMenuDeep } from "react-icons/tb";

export default function Navbar(){
  const [click,setclick]=useState(false);
  const handleClick=()=> setclick(!click);
  const content=
    <>
      <div className="lg:hidden block absolute top-16 w-full bg-slate-900 left-0 right-0 transition">
        <ul className="text-center text-xl p-20">
          <Link spy={true} smooth={true} to="Home">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Home</li>
          </Link >
          <Link spy={true} smooth={true} to="Projects">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Projects</li>
          </Link>
          <Link spy={true} smooth={true} to="Contact">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Contact</li>
          </Link>
        </ul>
      </div>
    </> 
    return (
    <nav>
      <div className="h-10vh flex justify-between text-slate-100 lg:py-5 py-4 px-20 ">
        <div className="flex items-center flex-1">
          <span>Logo</span>
        </div>
        <div className="lg:flex md:flex lg: flex-1 items-center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16 text-[18px]">
            <Link spy={true} smooth={true} to="Home">
              <li className="hover:text-indigo-400 transition border-b-2 border-slate-900 cursor-pointer hover:border-indigo-400">Home</li>
            </Link >
            <Link spy={true} smooth={true} to="Projects">
              <li className="hover:text-indigo-400 transition border-b-2 border-slate-900 cursor-pointer hover:border-indigo-400">Projects</li>
            </Link>
            <Link spy={true} smooth={true} to="Contact">
              <li className="hover:text-indigo-400 transition border-b-2 border-slate-900 cursor-pointer hover:border-indigo-400">Contact</li>
            </Link>
            </ul>
          </div>
        </div>
        <div>
          {click&& content}
        </div>

        <button className="sm:hidden block transition " onClick={handleClick}>
          {click? <IoMdCloseCircleOutline size={25}/> : <TbMenuDeep size={25}/>}
        </button>

      </div>
    </nav>
    )
  }
  