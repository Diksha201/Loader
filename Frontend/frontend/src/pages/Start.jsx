import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div>
      <div className='bg-cover bg-center bg-[url(https://images.pexels.com/photos/2994335/pexels-photo-2994335.jpeg?cs=srgb&dl=pexels-athena-2994335.jpg&fm=jpg)] h-screen pt-8 flex justify-between flex-col w-full'>
        <h1 className='w-16 ml-8 font-bold text-4xl font-serif text-black' >Loader</h1>
        <div className='bg-white pb-8 py-4 px-4'>
          <h2 className='text-[30px] font-semibold'>Get Started with Loader</h2>
          <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5'>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Start