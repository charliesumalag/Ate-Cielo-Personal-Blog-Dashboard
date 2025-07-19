import React from 'react'

const Create = () => {
  return (
    <div className='w-full pr-12 '>
      <h2 className='font-roboto font-bold text-[22px]'>Add Post</h2>
      <form className='w-full mt-8 flex flex-col gap-6'>
        <div className='w-full flex flex-col gap-1'>
          <label htmlFor="" className='font-roboto font-medium'>Category</label>
          <select name="" id="" className='w-full border border-gray-400 px-2 text-[15px] py-1 rounded-sm outline-none focus:border-green-700 text-gray-600'>
            <option value="" disabled selected hidden>Select category</option>
            <option value="">Food</option>
            <option value="">Travel</option>
          </select>
        </div>
        <div className='flex w-full  gap-4'>
          <div className='w-1/2 flex flex-col gap-1'>
            <label htmlFor="name" className='font-roboto font-medium'>Title</label>
            <input type="text" className='w-full font-roboto border border-gray-400 px-2 py-1 rounded-sm outline-none focus:border-green-700 text-[15px] text-gray-600' />
          </div>
          <div className='w-1/2 flex flex-col gap-1'>
            <label htmlFor="name" className='font-roboto font-medium'>Slug</label>
            <input type="text" className='w-full font-roboto border border-gray-400 px-2 py-1 rounded-sm outline-none focus:border-green-700 text-[15px] text-gray-600' />
          </div>
        </div>
        <div>
          <div>
           <label htmlFor="name" className='font-roboto font-medium'>Description</label>
           <textarea type="text" className='w-full border font-roboto border-gray-400 px-2 py-1 rounded-sm outline-none focus:border-green-700 text-[15px] text-gray-600 h-[120px]' />
          </div>
        </div>
        <div className='flex w-full  gap-4'>
          <div className='w-1/2 flex flex-col gap-1'>
            <label htmlFor="name" className='font-roboto font-medium'>Image</label>
            <input type="file" className='w-full border font-roboto border-gray-400 px-2 py-1 rounded-sm outline-none focus:border-green-700 text-[15px] text-gray-600' />
          </div>
          <div className='w-1/2 flex flex-col gap-1'>
            <label htmlFor="name" className='font-roboto font-medium'>Tags <span className='text-sm font-normal text-gray-500'>Separated by commas</span></label>
            <input type="text" className='w-full border font-roboto border-gray-400 px-2 py-1 rounded-sm outline-none focus:border-green-700 text-[15px] text-gray-600'  placeholder='ex: food, japan, culture'/>
          </div>
        </div>
        <div>
          <button className='px-4 py-1.5 bg-green-600 text-white font-roboto font-normal text-sm rounded-sm cursor-pointer hover:bg-green-700 transition-all duration-300 ease-in-out'>Save Post</button>
        </div>
      </form>
    </div>
  )
}

export default Create
