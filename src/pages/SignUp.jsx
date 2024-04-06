import React from 'react'
import { Link } from 'react-router-dom'

export const SignUp = () => {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form className='lg:p-6 lg:border rounded md:border-0 md:p-0 flex flex-col gap-4' >
        <input type="text" name="username" id="username" placeholder='Username' className='outline-none bg-slate-100 p-3 rounded-lg' />
        <input type="email" name="email" id="email" placeholder='Email' className='outline-none bg-slate-100 p-3 rounded-lg' />
        <input type="password" name="password" id="password" placeholder='*******' className='outline-none bg-slate-100 p-3 rounded-lg' />
        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>Sign Up</button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an account</p>
        <Link to='/sign-in'>
          <span className='text-blue-500'>Sign In</span>
        </Link>
      </div>
    </div>
  )
}
