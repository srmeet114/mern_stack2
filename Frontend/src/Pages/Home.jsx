import React from 'react'
import { FcLike } from 'react-icons/fc'
import { MdMood } from 'react-icons/md'

const Home = () => {
  return (
    <div className='pt-16 flex justify-center '>
      <div className='max-w-[500px] h-max border rounded-lg'>
        <div className="flex items-center">
          <div className="">
            <img className='rounded-full w-[30px] h-[auto] p-[5px] object-contain' src="https://images.unsplash.com/photo-1692261853713-4d283f65a6ee?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </div>
          <p className='text-lg p-[11px]'>Rohit</p>
        </div>
        <div className="w-full">
          <img src="https://images.unsplash.com/photo-1692261853713-4d283f65a6ee?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className="line-[4px] px-[10px] py-[3px] border-b border-[rgb(173,173,173)]">
          <FcLike />
          <p>1 like</p>
          <p>this is amazing</p>
        </div>
        <div className="flex justify-between items-center">
          <div className='flex items-center'>
          <MdMood className='text-2xl' />
          <input className='outline-none p-[10px]' type="text" placeholder='Add a comment...' />
          </div>
          <button className='font-medium px-3 text-[#63afe3]'>Post</button>
        </div>
      </div>
    </div> 
  )
}

export default Home
