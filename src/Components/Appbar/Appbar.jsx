import React, { useContext } from 'react'
import './appbar.css'
import logo from '../../Assests/Images/logo.png'
import { IoSearchOutline } from "react-icons/io5";
import { SlHandbag } from "react-icons/sl";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import VerAppbar from './VerAppbar';
import { NavLink } from 'react-router-dom';
import TopAppbar from './TopAppbar';
import HoverProduct from './HoverProduct';
import { ShopContext } from '../../Services/Context/ShopProvider';


const Appbar = () => {
  const {wishlist, cart} = useContext(ShopContext)

  // Total cart product
  const totalCartQuantity = cart.reduce((total, product) => total + product.quantity, 0)
  return (
    <>
      <TopAppbar />
      <nav className="w-full h-28 flex justify-between items-center shadow-[0_8px_6px_-6px_#0006] navbar">
        <NavLink to='/'><img src={logo} alt="Logo" className='w-28 cursor-pointer' /></NavLink>
        <ul className='flex justify-center font-semibold nav-ul'>
          <NavLink to='/'><li className='cursor-pointer text-[#ed2938]'>Home</li></NavLink>
          <NavLink to='/about'><li className='cursor-pointer hover:text-[#ed2938]'>About Us</li></NavLink>
          <NavLink to='/product'><li className='cursor-pointer product'>
            <div className='flex items-center hover:text-[#ed2938] list-nav-product'>Produts <IoIosArrowDown /></div>
            <div className='nav-product'><HoverProduct /></div>
          </li> </NavLink>

          <NavLink to='/merchandise'><li className='cursor-pointer hover:text-[#ed2938]'>Merchandise</li></NavLink>
          <NavLink to='/location'><li className='cursor-pointer hover:text-[#ed2938]'>Store Location</li></NavLink>
          <NavLink to='/track'><li className='cursor-pointer hover:text-[#ed2938]'>Track Order</li></NavLink>
        </ul>
        <div className='flex'>
          <IoSearchOutline className='text-2xl cursor-pointer mr-3.5 hover:text-[#ed2938]' />
          <div className='relative mr-3.5'>
            <NavLink to='/wishlist'><FaRegHeart className='text-2xl cursor-pointer hover:text-[#ed2938]' /></NavLink>
            <div className='w-5 h-5 text-[#ffffff] bg-[#ed2938] rounded-full flex justify-center items-center absolute inset-1/2 cursor-pointer'>{wishlist.length}</div>
          </div>
          <div className='relative mr-3.5'>
            <NavLink to='/cart'><SlHandbag className='text-2xl cursor-pointer hover:text-[#ed2938]' /></NavLink>
            <div className='w-5 h-5 text-[#ffffff] bg-[#ed2938] rounded-full flex justify-center items-center absolute inset-1/2 cursor-pointer'>{totalCartQuantity}</div>
          </div>
          <VerAppbar />
        </div>
      </nav>
    </>
  )
}

export default Appbar