import React from 'react'

export default function Navbar() {
  return (
    <div className='flex h-[10vh] mx-15 px-10 rounded-2xl mt-5 justify-between items-center font-light bg-gray-300'>
      <div className='text-2xl text-violet-600 font-semibold'>
        NexGen
      </div>
      <div className='flex gap-7'>
        <p className='cursor-pointer'>Home</p>
        <p className='cursor-pointer'>Services</p>
        <p className='cursor-pointer'>Work</p>
        <p className='cursor-pointer'>Process</p>
        <p className='cursor-pointer'>About</p>
        <p className='cursor-pointer'>Careers</p>
      </div>
      <div>
        <button className='border px-4 py-3 bg-violet-600 text-white cursor-pointer'>Contact Us</button>
      </div>
    </div>
  )
}
