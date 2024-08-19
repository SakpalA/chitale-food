import React, { useContext, useEffect, useState } from 'react'
import './appbar.css'
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagramSquare, FaRegUserCircle } from "react-icons/fa"
import { MdMail } from "react-icons/md"
import { IoLogoWhatsapp } from "react-icons/io"
import { ProductContext } from '../../Services/Context/ProductProvider'
import LoginForm from '../UserForm/LoginForm'
import SignUpForm from '../UserForm/SignUpForm'

const TopAppbar = () => {
  const { loginShow, setLoginShow, signupShow, setSignupShow } = useContext(ProductContext)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const loginStatus = localStorage.getItem('login')
    if (loginStatus) {
      setIsLoggedIn(true)
      const userData = JSON.parse(localStorage.getItem('userData'))
      setUser(userData)
    }
  }, [])

  const handleLogout = () => {
    localStorage.clear('login')
    setIsLoggedIn(false)
    setUser(null)
  }

 

  return (
    <nav className='bg-[#253237] text-[#ffffff] w-full flex justify-between items-center topnav'>
      <marquee className='w-8/12'>Welcome to the only official site of Chitale Bandhu. Please beware of other fraudulent sites with our name.</marquee>
      <div className='flex items-center justify-center topicon'>
        <div className='flex items-center justify-center border-r-2 border-[#ffffff] pr-2 mr-5'>
          <FaFacebookF className='text-base mx-1.5 ticons hover:text-[#ed2938]' />
          <FaTwitter className='text-base mx-1.5 ticons hover:text-[#ed2938]' />
          <FaYoutube className='text-base mx-1.5 ticons hover:text-[#ed2938]' />
          <FaInstagramSquare className='text-base mx-1.5 ticons hover:text-[#ed2938]' />
          <MdMail className='text-base mx-1.5 ticons hover:text-[#ed2938]' />
          <IoLogoWhatsapp className='text-base mx-1.5 ticons hover:text-[#ed2938]' />
          {isLoggedIn && user && <p>Hi,{user.firstName}</p>}
        </div>
        <div className='user-icon'>
          <FaRegUserCircle className='text-xl hover:text-[#ed2938] iuser' />
              {
                !isLoggedIn ? (<>
                  <div className='user-list bg-[#ffffff] text-[#253237]'>
                    <ul>
                      <li className='border-t-2 py-2 hover:text-[#ed2938]' onClick={() => setLoginShow(true)}>Login</li>
                      <LoginForm
                        show={loginShow}
                        onHide={() => setLoginShow(false)} />
                      <li className='border-y-2 py-2 hover:text-[#ed2938]' onClick={() => setSignupShow(true)}>Create Account</li>
                      <SignUpForm
                        show={signupShow}
                        onHide={() => setSignupShow(false)} />
                    </ul>
                  </div>
                </>) : (<>
                  <div className='user-list logout-list bg-[#ffffff] text-[#253237]'>
                    <ul>
                      <li className='border-t-2 py-2 hover:text-[#ed2938]' onClick={handleLogout}>Logout</li>
                    </ul>
                  </div>
                </>)
              }
        </div>

      </div>
    </nav>
  )
}

export default TopAppbar;