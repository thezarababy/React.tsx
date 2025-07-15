import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex justify-between items-center h-20 bg-purple-400 text-2xl px-10 font-bold text-white max-w-[1280px]:'>
      <NavLink to='/' >Home</NavLink>
      <NavLink to='/about' >About</NavLink>
      <NavLink to='/services' >Services</NavLink>

    </div>
  )
}

export default Header
