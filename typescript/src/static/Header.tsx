import  { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import Sidebar from './Sidebar'

const Header = () => {
  const [toggle,setToggle]=useState<boolean>(false);
  const handleToggle= ()=>{
    setToggle(!toggle);
  }
  return (
    <div className='  bg-purple-400 '>
      <div className=' flex justify-between items-center  text-2xl px-10 font-bold text-white  h-20 max-md:hidden '>
          <NavLink to='/' >Home</NavLink>
          <NavLink to='/about' >About</NavLink>
          <NavLink to='/services' >Services</NavLink>
      </div>
      
      <section className=' hidden   max-md: h-20 max-md:flex justify-end items-center pr-5'>
        {toggle ? (
          <RxCross1 size={35}  onClick={handleToggle} />
        ) :(
          <RxHamburgerMenu size={35} onClick={handleToggle} />
        )}
           
      </section>
      <div>
        {toggle && <Sidebar handleToggle={handleToggle} />}
      </div>

    </div>
  )
}

export default Header
