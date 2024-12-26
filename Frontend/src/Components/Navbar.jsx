import React from 'react'
import logo from '../../public/Img/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex fixed w-full justify-around py-[10px]'>
      <img className='w-[7%] object-contain max-[500px]:w-[20%]' src={logo} alt="logo" />
      <ul className='flex items-center list-none'>
        <li className='px-[15px] py-[1px] font-medium'><Link to={'/signup'}>SignUp</Link></li>
        <li className='px-[15px] py-[1px] font-medium'><Link to={'/Signin'}>SignIn</Link></li>
        <li className='px-[15px] py-[1px] font-medium'><Link to={'/profile'}>Profile</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
