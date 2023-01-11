import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='bg-[#0a192f] w-full h-full flex justify-center items-center py-4 pt-[12rem] pb-[12rem]'>
       
       <form method='POST' action="https://getform.io/f/98190f52-7113-4561-9b2d-f6340e4d8107" className='flex flex-col max-w-[600px] w-full '> 
       <div className='pb-8 '>
        <p className='text-4xl text-gray-300 font-bold inline border-b-4 border-pink-800 '>Contact</p>
         <p className='text-gray-300 py-4'>Submit the form below or shoot me an email- mayankpradhan115@gmail.com</p>
       </div>
       <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
       <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='name' />
        <textarea className='bg-[#ccd6f6] p-2' placeholder='Message' name="message" rows="10"></textarea>
       <button className='text-white border-2 hover:bg-pink-800 hover:border-pink-600 px-4 py-3 m-auto my-8 flex items-center rounded-lg'>Let's Collaborate</button>
       </form>
       
    </div>
  )
}

export default Contact