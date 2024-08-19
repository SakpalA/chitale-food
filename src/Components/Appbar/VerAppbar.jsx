import React, { useEffect, useState } from 'react'
import './appbar.css'
import { NavLink } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../../Assests/Images/logo.png'
import { FaMinus } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";

const VerAppbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    const [isProductMenuOpen, setIsProductMenuOpen] = useState(false)
    const [categories, setCategories] = useState([])

    const handleShow = () => {
        setShowMenu(true)
    }

    const handleClose = () => {
        setShowMenu(false)
    }

    const toggleProductMenu = () => {
        setIsProductMenuOpen(!isProductMenuOpen)
    }

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch("https://appy.trycatchtech.com/v3/chitale_foods/category_list");
                const data = await response.json();
                setCategories(data);
                // console.log("as", data)
            } catch (error) {
                console.log("Error fetching categories: ", error)
            }
        };
        fetchCategories();
    }, [])



    return (
        <>
            <IoMenu className='text-2xl cursor-pointer hover:text-[#ed2938] menu' onClick={handleShow} />
            <Offcanvas show={showMenu} onHide={handleClose} placement='end'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        <img src={logo} alt="Logo" className='w-28 cursor-pointer' />
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ul className='bg-[#f8f8f8]'>
                        <NavLink to='/'><li className='cursor-pointer text-[#ed2938] p-3 font-semibold  uppercase main-ul'>Home</li></NavLink>
                        <NavLink to='/about'><li className='p-3 text-[#333] font-semibold  uppercase main-ul'>About Us</li></NavLink>
                        <NavLink to='/product'><li className='p-3 text-[#333] font-semibold  uppercase main-ul'>
                            <div className='flex justify-between items-center'>
                                Product
                                    {
                                        isProductMenuOpen ?
                                            (<FaMinus onClick={toggleProductMenu} />)
                                            : (<AiOutlinePlus onClick={toggleProductMenu} />)
                                    }
                            </div>
                        </li></NavLink>
                        <ul className={`${isProductMenuOpen ? "open" : "sub-menu"}`}>
                            {categories.map((category, ind) => {
                                return <li
                                    key={ind}
                                    className='p-3 text-[#333] font-semibold  uppercase main-ul'>{category.cat_name}</li>
                            })}
                        </ul>

                        <NavLink to='/merchandise'><li className='p-3 text-[#333] font-semibold  uppercase main-ul'>Merchandise</li></NavLink>
                        <NavLink to='/location'><li className='p-3 text-[#333] font-semibold  uppercase main-ul'>Store Location</li></NavLink>
                        <NavLink to='/track'><li className='p-3 text-[#333] font-semibold  uppercase main-ul'>Track Order</li></NavLink>
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default VerAppbar;