import React from 'react'

import Logo from "../assets/logo.png"
import {FaBars, FaTimes} from "react-icons/fa"
import { useState } from 'react'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        
        <div>
            <img src={Logo} alt="" style={{width:"50px"}} />
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
      <div className='hidden'>

      </div>
    </div>
  )
}

export default Navbar