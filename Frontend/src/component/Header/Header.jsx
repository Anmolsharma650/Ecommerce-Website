import { MapPin, ShoppingCartIcon } from 'lucide-react'
import React from 'react'
import { FaCaretDown, FaCartArrowDown } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'


function Header() {
  const [openMenu, setOpenMenu] = useState(false)

  const location = false
  return (
    <div className=' bg-white shadow-2xl py-3'>
      <div className='max-w-6xl mx-auto flex  justify-between items-center'>
        {/*logo */}
        <div className='flex  justify-center gap-5 items-center'>
          <Link to={"/"}>
            <h1 className='font-bold ml-5 text-3xl'><span className='text-red-400 font-serif'>Z</span>eptro</h1>
          </Link>  <div className='flex justify-center cursor-pointer gap-2'>
            <MapPin className=' md:flex hidden text-red-500' />
            <span className='   md:flex hidden font-semibold'>{location ? <div></div> : "Add Location"}</span>
            <FaCaretDown className=' md:flex hidden justify-center items-center font-medium' />
          </div>
        </div>
        {/*menu*/}
        <div className='flex text-[20px]  items-center gap-7'>
          <ul className='   hidden  md:flex justify-center gap-7 font-semibold '>
            <NavLink to={'/'} className={({ isActive }) => `${isActive ? "border-b-2 translate-all border-red-500 " : 'text-black '} cursor-pointer`} ><li>Home</li></NavLink>
            <NavLink to={'/about'} className={({ isActive }) => `${isActive ? "border-b-2 translate-all border-red-500 " : 'text-black '} cursor-pointer`} ><li>About</li></NavLink>
            <NavLink to={'/contact'} className={({ isActive }) => `${isActive ? "border-b-2 translate-all border-red-500 " : 'text-black '} cursor-pointer`} ><li>Contact</li></NavLink>
            <NavLink to={'/products'} className={({ isActive }) => `${isActive ? "border-b-2 translate-all border-red-500 " : 'text-black '} cursor-pointer`} ><li>Produts</li></NavLink>
          </ul>
          {/*cart icon*/}

          <div className=" cursor-pointer flex justify-center items-center gap-5">
            <Link to="/cart">
              <ShoppingCartIcon className="h-7 w-7 text-gray-800 hover:text-black" />
            </Link> 
            {/* menu icon */}
        <div
          className="sm:hidden text-4xl mr-5 font-bold text-gray-700 cursor-pointer"
        ><Link to={"/menuicon"}>&#8801;</Link>
          
        </div>
          </div>

          {/*Button */}
          <div>
            <button className='  hidden md:flex  justify-center cursor-pointer text-black px-4 py-1 font-semibold rounded-md bg-red-500'>Sign in</button>
          </div>
        </div>

       

      </div>

    </div>
  )
}

export default Header