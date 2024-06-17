import React from 'react'
import { Link } from "react-router-dom"
const Home = () => {
  return (
    <>
      <nav className='container flex justify-between items-center p-5 mx-auto'>
        <div className='flex items-center gap-1'>
          <span className='text-2xl font-bold text-[#0274B3]'>Linked</span>
          <img src="./linkedin.png" alt="logo" width={25} />


        </div>
        <div className='flex items-center gap-5'>
          <Link to={"/register"} className='px-4 py-2 hover:bg-gray-100 rounded-full'>Join now</Link>
          <Link to={"/login"} className='px-4 py-2 border border-[#0274B3] rounded-full text-[#0274B3] hover:bg-indigo-50'>Sign in</Link>
        </div>
      </nav>
      <div className='flex flex-wrap container my-10 mx-auto p-5'>
        <div className='lg:w-1/2  w-full flex flex-col items-start  gap-5'>
          <h1 className='text-6xl font-extralight text-red-800'>Welcome to your</h1>
          <h1 className='text-5xl font-extralight text-red-800 '>professional community</h1>
          <Link className='py-2 border border-black hover:bg-gray-100 md:w-2/3 w-full text-center rounded-full mt-5' to={"/login"}>Sign in with email</Link>
          <p className='text-xs text-gray-800 text-center md:w-2/3 w-full'>By clicking Continue to join or sign in, you agree to LinkedIn’s User Agreement, Privacy Policy, and Cookie Policy.</p>
          <p className='md:w-2/3 w-full text-center mb-5'>New to LinkedIn? <Link to={"/register"} className='text-[#0274B3] hover:underline'>Join now</Link></p>
        </div>
        <div className='lg:w-1/2 w-full'>
          <img src="./cover.png" alt="cover" loading='lazy' className='w-full' />
        </div>
      </div>
    </>
  )
}

export default Home
