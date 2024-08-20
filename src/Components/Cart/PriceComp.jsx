import React, { useContext } from 'react'
import { ShopContext } from '../../Services/Context/ShopProvider'
import { Link } from 'react-router-dom'
import '../Wishlist/wishlist.css';

const PriceComp = () => {
  const { totalAmount, totalPrice, packingCharge } = useContext(ShopContext)

  return (
    <div className='price-cont'>
      <span className='text-2xl font-bold'>Price Details</span>
      <div className="mrp-div">
        <h3 className='text-xl font-semibold'>Total MRP: </h3>
        <h3 className='text-xl font-semibold'>₹{totalAmount}</h3>
      </div>
      <div className="mrp-div">
        <h3 className='text-xl font-semibold'>Packing & Handling Charge:  </h3>
        <h3 className='text-xl font-semibold'>₹{packingCharge}</h3>
      </div>
      <div className="mrp-div">
        <h3 className='text-xl font-semibold'>Shipping Fee: </h3>
        <h3 className='text-xl font-semibold'><s className='text-gray-500'>79</s> Free</h3>
      </div>
      <hr />
      <div className="mrp-div">
        <h3 className='text-xl font-semibold'>Total Amount: </h3>
        <h3 className='text-2xl font-semibold'>₹{totalPrice}</h3>
      </div>
      <Link to='/checkout'><button className='wish-btn w-full'>Proceed to Checkout</button></Link>
    </div>
  )
}

export default PriceComp