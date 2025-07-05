import React, { useState } from 'react'

const AuthLogin = () => {
    const [isHover, setIsHover] = useState(false);
    console.log(isHover);

  return (
    <div className='flex flex-col justify-center items-center h-screen font-roboto '>
        <div className='w-[380px]'>
            <div className='mb-10 flex flex-col gap-2'>
                <h2 className='text-4xl font-bold tracking-wide text-[#013220]'>Login</h2>
                <p>Hi, Welcome back admin 👏</p>
            </div>
            <form action="" className='flex flex-col gap-4'>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="">Username</label>
                    <input type="text" placeholder='Enter your username' className='p-2 border border-gray-300 font-roboto rounded-md outline-0'  />
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder='Enter your password' className='p-2 border border-gray-300 font-roboto rounded-md outline-0' />
                </div>
                <div className='flex justify-between'>
                    <div className='flex flex-row-reverse gap-1 justify-center'>
                        <label htmlFor="">Remember Me</label>
                        <input type="checkbox" className='cursor-pointer'/>
                    </div>
                    <button className='text-[#013220] cursor-pointer'>Forgot Password?</button>
                </div>
                <button className='bg-[#013220] font-roboto tracking-widest text-white p-2 mt-6 rounded-md cursor-pointer'>Login</button>
                <p className='text-gray-500' onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>Not registered yet?
                    <span className='text-[#013220] ml-1 cursor-pointer'>Create an account</span>
                    <span>
                        <i className={isHover ? 'fa-solid fa-arrow-up cursor-pointer rotate-45 text-[#013220] font-extralight text-xs pb-1.5 pr-3 ' : 'fa-solid fa-arrow-up rotate-45 cursor-pointer font-extralight text-[#013220] text-xs pb-1.5 pr-2 '}></i>
                    </span>
                </p>
            </form>
        </div>
    </div>
  )
}

export default AuthLogin
