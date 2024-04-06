import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export const SignUp = () => {
  const [formData, setformData] = useState({})
  const [error, seterror] = useState(false);
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    /* console.log(e.target.id); */
    setformData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true)
      seterror(false)
      const res = await fetch('/api/v1/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await res.json()
     /*  console.log(data); */
      setLoading(false)
      if (data.success === false) {
        seterror(true);
        return
      }
     
    } catch (error) {
      setLoading(false)
      seterror(true)
    }
  }

  /*  console.log(formData); */
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form onSubmit={handleSubmit} className='lg:p-6 lg:border rounded md:border-0 md:p-0 flex flex-col gap-4' >
        <input type="text" name="username" id="username" placeholder='Username' className='outline-none bg-slate-100 p-3 rounded-lg' onChange={handleChange} />
        <input type="email" name="email" id="email" placeholder='Email' className='outline-none bg-slate-100 p-3 rounded-lg' onChange={handleChange} />
        <input type="password" name="password" id="password" placeholder='*******' className='outline-none bg-slate-100 p-3 rounded-lg' onChange={handleChange} />
        <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>{loading ? 'Loading...' : 'Sign Up'}</button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an account</p>
        <Link to='/sign-in'>
          <span className='text-blue-500'>Sign In</span>
        </Link>
      </div>
      <p className='text-red-700 mt-5'>{error && 'Something want wrong!'}</p>
    </div>
  )
}
