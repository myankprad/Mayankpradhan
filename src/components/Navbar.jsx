import React from 'react'

import Logo from "../assets/logo1.png"
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook, FaHashtag,} from "react-icons/fa"
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill} from "react-icons/bs"
import { useState } from 'react'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        
        <div>
            <img className='hover:animate-spin' src={Logo} alt="" style={{width:"180px"}} />
        </div>
        <div>
            <ul className='hidden md:flex text-2xl'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Contact</li>


            </ul>
        </div>

      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ?<FaBars /> : <FaTimes />}
      </div>

     { /* mobile menu  */}
      <ul className={!nav ?"hidden" :"absolute top-10 left-0 w-full justify-center text-center  h-screen bg-[#0a192f] text-gray-300"}>
                <li className='py-6 text-4xl'>Home</li>
                <li className='py-6 text-4xl'>About</li>
                <li className='py-6 text-4xl'>Skills</li>
                <li className='py-6 text-4xl'>Work</li>
                <li className='py-6 text-4xl'>Contact</li>


            </ul>
      <div className='hidden lg:flex flex-col fixed top-[35%] left-0'>
          <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
                 <a className='flex justify-between items-center w-full text-gray-300'
                href="">
                    LinkedIn <FaLinkedin size={30} />
                </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                 <a className='flex justify-between items-center w-full text-gray-300'
                href="">
                    Github <FaGithub size={30} />
                </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                 <a className='flex justify-between items-center w-full text-gray-300'
                href="">
                    Email <HiOutlineMail size={30} />
                </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                 <a className='flex justify-between items-center w-full text-gray-300'
                href="">
                    Resume <BsFillPersonLinesFill size={30} />
                </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                 <a className='flex justify-between items-center w-full text-gray-300'
                href="">
                    Hashnode <FaHashtag size={30} />
                </a>
            </li>
            
          </ul>    
      </div>
    </div>
  )
}

export default Navbar