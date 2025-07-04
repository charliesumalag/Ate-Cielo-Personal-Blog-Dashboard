import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './Nav'

const Layout = () => {
  return (
    <div className='flex gap-12'>
      <div>
        <Nav />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
