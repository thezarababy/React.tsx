import React from 'react'
import { NavLink } from 'react-router-dom'

interface SidebarProps {
  handleToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({handleToggle}) => {
  return (
    <div>
        <main className='flex flex-col bg-white p-10 text-black text-2xl w-50 '>
            <NavLink  onClick={handleToggle}  to='/' >Home</NavLink>
            <NavLink   onClick={handleToggle} to='/about' >About</NavLink>
            <NavLink   onClick={handleToggle} to='/services' >Services</NavLink>
        </main>
    </div>
  )
}

export default Sidebar