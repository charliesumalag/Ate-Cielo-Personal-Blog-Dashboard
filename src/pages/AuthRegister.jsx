import React, { useState } from 'react'
import { useReducer } from 'react'
import { authRegisterInitialState,  authRegisterReducer} from "../reducers/AutRegisterReducer";

const AuthRegister = () => {
  const [state, dispatch] = useReducer(authRegisterReducer, authRegisterInitialState);
  const [isHover, setIsHover] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();

    const frontValiErrs = {};
    if (!state.name) {
      frontValiErrs.name = 'Name Required';
    }
    if (!state.username) {
      frontValiErrs.username = 'Username Required';
    }
    if (!state.password) {
      frontValiErrs.password = 'Password Required';
    } else if (state.password.length < 4) {
      frontValiErrs.password = 'Password must be at lease 4 character';
    }
    if (!state.confirm_password) {
      frontValiErrs.confirm_password = 'Confirm Password Required'
    }else if (state.confirm_password.length < 4) {
      frontValiErrs.confirm_password = 'Confirm Password must be at lease 4 character';
    }

    if (state.password !== state.confirm_password) {
      frontValiErrs.confirm_password = 'Pasword Confirmation do not match';
    }

    if (Object.keys(frontValiErrs).length > 0) {
     dispatch({
      type: 'setErrors',
      errors: frontValiErrs,
     });
    }else{
      alert('you pass the front end validation')

    }

  }
  const handleChange =  (e) => {
    const {name, value} = e.target;
    dispatch({
      type: 'updateField',
      field: name,
      value: value
    })
  }

  console.log(state);

  return (
    <div className='flex flex-col justify-center items-center h-screen font-roboto '>
        <div className='w-[380px]'>
            <div className='mb-10 flex flex-col gap-2'>
                <h2 className='text-4xl font-bold tracking-wide text-[#013220]'>Register</h2>
                <p>Create an account👏</p>
            </div>
            <form action="" onSubmit={handleSubmit} className='flex flex-col gap-4'>
                <div className='flex flex-col gap-1'>
                       <p className="text-red-500 text-sm">{}</p>
                    <label htmlFor="username">Name</label>
                    <input type="text" name='name' value={state.name}   onChange={handleChange}  placeholder='Enter your name' className='p-2 border border-gray-300 font-roboto rounded-md outline-0'  />
                    {state.errors.name && (
                        <p className="text-red-500 text-sm">{state.errors.name}</p>
                    )}
                </div>
                <div className='flex flex-col gap-1'>
                       <p className="text-red-500 text-sm">{}</p>
                    <label htmlFor="username">Username</label>
                    <input type="text" name='username' value={state.username}   onChange={handleChange}  placeholder='Enter your username' className='p-2 border border-gray-300 font-roboto rounded-md outline-0'  />
                    {state.errors.username && (
                        <p className="text-red-500 text-sm">{state.errors.username}</p>
                    )}
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="password">Password</label>
                    <input type="password" value={state.password} onChange={handleChange} name='password' placeholder='Enter your password' className='p-2 border border-gray-300 font-roboto rounded-md outline-0' />
                    {state.errors.password && (
                        <p className="text-red-500 text-sm">{state.errors.password}</p>
                    )}
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="password">Password</label>
                    <input type="password" value={state.confirm_password}  onChange={handleChange} name='confirm_password' placeholder='Conirm Password' className='p-2 border border-gray-300 font-roboto rounded-md outline-0' />
                    {state.errors.confirm_password && (
                        <p className="text-red-500 text-sm">{state.errors.confirm_password}</p>
                    )}
                </div>
                <button className='bg-[#013220] font-roboto tracking-widest text-white p-2 mt-6 rounded-md cursor-pointer'>Register</button>
                <p className='text-gray-500' onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>Already have an account?
                    <span className='text-[#013220] ml-1 cursor-pointer'>Login</span>
                    <span>
                        <i className={isHover ? 'fa-solid fa-arrow-up cursor-pointer rotate-45 text-[#013220] font-extralight text-xs pb-1.5 pr-3 ' : 'fa-solid fa-arrow-up rotate-45 cursor-pointer font-extralight text-[#013220] text-xs pb-1.5 pr-2 '}></i>
                    </span>
                </p>
            </form>
        </div>
    </div>
  )
}

export default AuthRegister
