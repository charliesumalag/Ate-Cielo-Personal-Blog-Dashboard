import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='bg-amber-800 text-white p-6'>
        <ul className='flex flex-col gap-2 '>
            <li>
                <NavLink to='/'>Dashboard</NavLink>
            </li>
            <li>
                <NavLink to='/posts'>Posts</NavLink>
            </li>
            <li>
                <NavLink to='/create'>Create Post</NavLink>
            </li>
            <li>
                <NavLink to='/settings'>Settings</NavLink>
            </li>
        </ul>
        <form action="">
            <button>Logout</button>
        </form>
    </nav>
  )
}

export default Nav
