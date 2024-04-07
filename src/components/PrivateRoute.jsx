import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

export const PrivateRoute = () => {
    const {currentUser} = useSelector(state => state.user)
  return (
    currentUser ? <Outlet/>: <Navigate to='/sign-in'/>
  )
}