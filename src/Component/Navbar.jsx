import React from 'react'
import { IoLogoOctocat } from "react-icons/io";

function Navbar() {
  return (
    <nav className='bg-green-600 py-4'>
      <div className='max-w-6xl m-auto px-5 md:px-10 lg:px-20'>
        <div className='flex jutsify-between'>
        <h1 className='flex bg-green-900   font-medium py-2 px-4 text-xl text-white items-center rounded uppercase cursor-pointer'><IoLogoOctocat className='mr-3 text-2xl'/>kuhealth</h1>
        </div>
      </div>
    </nav>
  )
}



export default Navbar