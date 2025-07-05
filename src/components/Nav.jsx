import React from 'react'
import { NavLink } from 'react-router-dom'
import profilePic from "../assets/img/profile.jpg";

const Nav = () => {
  return (
    <nav className='bg-[#F8F8FA] flex flex-col justify-between text-black py-6 w-[260px] px-6 h-full'>
        <div className='w-full'>
            <div className='flex justify-between pr-2 pl-3 items-center mb-8'>
                <div className='flex gap-3 '>
                    <span><i className="fa-solid fa-blog text-[#013220]"></i></span>
                    <h2 className='font-roboto  text-xl font-bold text-[#678579] tracking-[0.9px] '>Cielo</h2>
                </div>
                <span className='cursor-pointer'><i className="fa-solid fa-compress font-bold text-sm" ></i></span>
            </div>
            <ul className='flex flex-col gap-3 w-full font-roboto'>
                <li className='flex gap-2 w-full text-gray-700 text-[14px]'>
                    <NavLink className={({isActive}) => isActive ? 'bg-[#E2F0ED] w-full px-4 py-1 text-[#013220] font-medium' : ' w-full px-4 py-1 ' } to='/'><span><i className="fa-solid fa-border-all mr-2 text-gray-500"></i></span>Dashboard</NavLink>
                </li>
                <li className='flex gap-2 w-full text-gray-700 text-[14px]'>
                    <NavLink to='/posts' className={({isActive}) => isActive ? 'bg-[#E2F0ED] w-full px-4 py-1 font-medium text-[#013220]' : 'w-full px-4 py-1 '}><span className='mr-2'><i className="fa-solid fa-list"></i></span>Posts</NavLink>
                </li>
                <li className='flex gap-2 w-full text-gray-700 text-[14px]'>
                    <NavLink to='/create' className={({isActive}) => isActive ? 'bg-[#E2F0ED] w-full px-4 py-1 font-medium text-[#013220]' : 'w-full px-4 py-1 '}><span className='mr-2'><i className="fa-solid fa-plus"></i></span>Create Post</NavLink>
                </li>
                  <li className='flex gap-2 w-full text-gray-700 text-[14px]'>
                    <NavLink to='/settings' className={({isActive}) => isActive ? 'bg-[#E2F0ED] w-full px-4 py-1 font-medium text-[#013220]' : 'w-full px-4 py-1 '}><span className='mr-2 text-gray-500'><i className="fa-solid fa-gear"></i></span>Settings</NavLink>
                </li>
            </ul>
        </div>
        <div className='flex flex-col gap-8'>
            <div className='flex items-center gap-2'>
                <img src={profilePic} alt="" className='w-[50px] rounded-full' />
                <div>
                    <p className='text-base font-roboto font-bold text-[#013220]'>Cielo Sumalag</p>
                    <p className='text-gray-400 text-sm font-roboto' >Administrator</p>
                </div>
            </div>
            <form action="" className='flex gap-2 items-center pl-6 text-gray-400 '>
                <i className="fa-solid fa-arrow-right-from-bracket text-sm"></i>
                <button className='font-roboto text-sm'>Logout</button>
            </form>
        </div>
    </nav>
  )
}

export default Nav
