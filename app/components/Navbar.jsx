'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

const Navbar = () => {

  const router=useRouter()
  return (
    <div className='h-15 flex justify-between px-7 sticky'>
        <div className='h-15 items-center flex text-white cursor-pointer' onClick={()=>router.push('/')}>
            Logo
        </div>
        <div className="btn py-2 flex gap-4">
            <button className='text-white'>Login</button>
            <button className='bg-blue-500 text-white h-9 w-16 rounded-md text-sm font-medium'>Register</button>
        </div>
    </div>
  )
}

export default Navbar