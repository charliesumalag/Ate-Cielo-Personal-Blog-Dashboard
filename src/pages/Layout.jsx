import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav'

const Layout = () => {
  return (
    <div className='flex gap-10 h-screen'>
      <div>
        <Nav />
      </div>
      <div className='py-6 w-full'>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
