import React from 'react'
import HTML from "../assets/html.png"
import CSS from "../assets/css.png"
import JavaScript from "../assets/javascript.png"
import ReactImg from "../assets/react.png"
import Node from "../assets/node.png"
import Firebase from "../assets/firebase.png"
import AWS from "../assets/aws.png"
import Github from "../assets/github.png"
import Tailwind from "../assets/tailwind.png"
import Mongo from "../assets/mongo.png"

const Skills = () => {
  return (
    <div name="skills" className='w-full h-screen bg-[#0a192f]  text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl py-4 inline font-bold border-b-4 border-pink-800'>Skills</p>
                <p className='py-9'>These are the technologies i've grinded into</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto hover:animate-bounce' src={HTML} alt="" />
                    <p className='my-4 font-bold'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto hover:animate-bounce' src={CSS} alt="" />
                    <p className='my-4 font-bold'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto hover:animate-bounce' src={JavaScript} alt="" />
                    <p className='my-4 font-bold'>JAVASCRIPT</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto hover:animate-bounce' src={ReactImg} alt="" />
                    <p className='my-4 font-bold'>REACT JS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto hover:animate-bounce' src={Github} alt="" />
                    <p className='my-4 font-bold'>GITHUB</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto hover:animate-bounce' src={Node} alt="" />
                    <p className='my-4 font-bold'>NODE JS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto hover:animate-bounce' src={Mongo} alt="" />
                    <p className='my-4 font-bold'>MONGO DB</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto hover:animate-bounce' src={Tailwind} alt="" />
                    <p className='my-4 font-bold'>TAILWIND</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills