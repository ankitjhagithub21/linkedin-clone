import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import NavLogo from '../components/NavLogo'

const Register = () => {
    const initialData = {
        fullName: "",
        username: "",
        email: "",
        password: "",
    }
    const [formData, setFormData] = useState(initialData)
    const [hidePass, setHidePass] = useState(true)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/auth/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: 'include',
                body: JSON.stringify(formData)
            })
            const data = await res.json()
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <section className='min-h-screen w-full flex flex-col  items-center p-5 justify-center bg-[#F3F2F0]'>
           <NavLogo/>
            <h1 className="text-3xl text-center mb-5  text-gray-900">
                Make the most of your professional life
            </h1>

            <div className='lg:w-1/3 w-full bg-white rounded-lg p-5'>


                <form className="flex flex-col  gap-3" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className="  border border-gray-300 px-3 py-2 rounded-lg text-md"
                        required
                        name='fullName'
                        autoComplete="off"
                        placeholder="Full name"
                        value={formData.fullName}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        className="  border border-gray-300 px-3 py-2 rounded-lg text-md"
                        required
                        name='username'
                        autoComplete="off"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleChange}

                    />
                    <input
                        type="email"
                        className="  border border-gray-300 px-3 py-2 rounded-lg text-md"
                        required
                        name='email'
                        autoComplete="off"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}

                    />
                    <div className='w-full relative'>
                        <input
                            type={`${hidePass ? 'password' : 'text'}`}
                            className="  border border-gray-300 px-3 py-2 w-full rounded-lg text-md"
                            name='password'
                            autoComplete="off"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                        <button type='button' className='absolute top-2 right-3 text-indigo-600 font-semibold' onClick={() => setHidePass(!hidePass)}>{hidePass ? 'Show' : 'Hide'}</button>
                    </div>
                    <p className='text-xs text-center text-gray-700'>By clicking Agree & Join or Continue, you agree to the LinkedIn User Agreement, Privacy Policy, and Cookie Policy.</p>
                    <button className="  border bg-[#0A66C2] hover:bg-blue-800 text-white border-gray-300 px-3 py-2 rounded-full text-md font-bold">
                        Agree & Join
                    </button>
                    <p className='text-center'>Already on LinkedIn? <Link to={"/login"} className='text-purple-700 hover:underline'>Sign in</Link> </p>
                </form>

            </div>


        </section>
    )
}

export default Register
