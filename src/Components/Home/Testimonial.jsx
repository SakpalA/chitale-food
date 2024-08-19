import React, { useState } from 'react'
import { BiSolidQuoteSingleLeft } from "react-icons/bi";

const Testimonial = () => {
    const [show, setShow] = useState(true);

    const showFirst = () => {
        setShow(true)
    }

    const showSecond = () => {
        setShow(false)
    }
    return (
        <div className='w-full py-10 px-28 bg-[#f6f6f6] testi-sec'>
            <h1 className='text-3xl font-semibold mb-2'>Client Testimonials</h1>
            <p className='text-xl'>What our happy customers have to say about us!</p>
            {
                show ?
                    (<div className='w-7/12 h-60 bg-[#fff] my-4 mx-auto testi-div'>
                        <p className='text-left text-xl mb-2'>Being born and brought up In Pune, I have been familiar with the name of Chitale since as far as I can remember. Be it any festival or any celebration, Chitale products have been an integral part of our lives and a part and parcel of the festivity. The consistency in the taste throughout the years is what separates the brand from others.</p>
                        <div className='flex justify-start items-center'>
                            <div className='flex item-center justify-start'>
                                <BiSolidQuoteSingleLeft className='text-[#ed2938] text-4xl' />
                                <BiSolidQuoteSingleLeft className='text-[#ed2938] text-4xl' />
                            </div>
                            <span className='text-[#ed2938]'>Pratik Kelkar</span>
                        </div>
                    </div>) :
                    (<div className='w-7/12 h-60 bg-[#fff] my-4 mx-auto testi-div'>
                        <p className='text-left text-xl mb-2'>
                            Being a hostelite, Chitale Namkeen & Chivdas are a must have products in our inventory. Be it late night studies or sudden craving for food, Chitale has a wide range of products to cater to our every need! Bakarwadi and Amba Burfi are a mandatory take away gifts when returning home.
                        </p>
                        <div className='flex justify-start items-center'>
                            <div className='flex item-center justify-start'>
                                <BiSolidQuoteSingleLeft className='text-[#ed2938] text-4xl' />
                                <BiSolidQuoteSingleLeft className='text-[#ed2938] text-4xl' />
                            </div>
                            <span className='text-[#ed2938]'>Raj Rajput</span>
                        </div>
                    </div>)
            }
            <div className='testi-btns'>
                <button onClick={showFirst} className={show ? "show-btn" : ""}></button>
                <button onClick={showSecond} className={show ? "" : "show-btn"}></button>
            </div>
        </div>
    )
}

export default Testimonial