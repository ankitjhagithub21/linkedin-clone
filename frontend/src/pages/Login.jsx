import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import NavLogo from '../components/NavLogo'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [hidePass, setHidePass] = useState(true)



  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: 'include',
        body: JSON.stringify({ email, password })
      })
      const data = await res.json()
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <section className='min-h-screen w-full flex flex-col gap-5  items-center p-5 justify-center bg-[#F3F2F0]'>
    <NavLogo/>

      <div className='lg:w-1/3 shadow-lg w-full bg-white rounded-lg p-5'>
      <h1 className='text-4xl mb-3'>Sign in</h1>
      <p className='mb-3'>Stay updated on your professional world</p>

        <form className="flex flex-col  gap-5" onSubmit={handleSubmit}>
        
         
          <input
            type="email"
            className="  border border-gray-300 px-3 py-2 rounded-lg text-md"
            required
           
            autoComplete="off"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}

          />
          <div className='w-full relative'>
            <input
              type={`${hidePass ? 'password' : 'text'}`}
              className="  border border-gray-300 px-3 py-2 w-full rounded-lg text-md"
              name='password'
              autoComplete="off"
              placeholder="Password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              required
            />
            <button type='button' className='absolute top-2 right-3 text-indigo-600 font-semibold' onClick={() => setHidePass(!hidePass)}>{hidePass ? 'Show' : 'Hide'}</button>
          </div>
          <p className='text-xs text-center text-gray-700'>By clicking Agree & Join or Continue, you agree to the LinkedIn User Agreement, Privacy Policy, and Cookie Policy.</p>
          <button className="  border bg-[#0A66C2] hover:bg-blue-800 text-white border-gray-300 px-3 py-2 rounded-full text-md font-bold">
            Agree & Join
          </button>
         
        </form>

      </div>

      <p className='text-center'>New to LinkedIn? <Link to={"/register"} className='text-purple-700 hover:underline'>Join now</Link> </p>
    </section>
  )
}

export default Login
