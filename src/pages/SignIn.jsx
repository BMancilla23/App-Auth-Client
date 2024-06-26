import { OAuth } from '@/components'
import { signInFailure, signInStart, signInSuccess } from '@/redux/user/userSlice'
import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

export const SignIn = () => {
  const [formData, setformData] = useState({})
  const {loading, error} = useSelector((state) => state.user)
/*   const [error, seterror] = useState(false);
  const [loading, setLoading] = useState(false) */
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const handleChange = (e) => {
    /* console.log(e.target.id); */
    setformData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      /* setLoading(true) */
      dispatch(signInStart());
      /* seterror(false) */
      const res = await fetch('/api/v1/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await res.json()
      console.log(data);
      /* setLoading(false) */
      
      if (data.success === false) {
        /* seterror(true); */
        dispatch(signInFailure(data))
        return
      }
      dispatch(signInSuccess(data))
      navigate('/')
     
    } catch (error) {
      /* setLoading(false)
      seterror(true) */
      dispatch(signInFailure(error))
    }
  }

  /*  console.log(formData); */
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>
      <form onSubmit={handleSubmit} className='lg:p-6 lg:border rounded md:border-0 md:p-0 flex flex-col gap-4' >
        <input type="email" name="email" id="email" placeholder='Email' className='outline-none bg-slate-100 p-3 rounded-lg' onChange={handleChange} />
        <input type="password" name="password" id="password" placeholder='*******' className='outline-none bg-slate-100 p-3 rounded-lg' onChange={handleChange} />
        <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>{loading ? 'Loading...' : 'Sign In'}</button>
        <OAuth/>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Dont have an account</p>
        <Link to='/sign-up'>
          <span className='text-rose-500 font-semibold'>Sign Up</span>
        </Link>
      </div>
      <p className='text-red-700 mt-5'>{error ? error.message || 'Something want wrong!' : ''}</p>
    </div>
  )
}
