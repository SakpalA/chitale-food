import React, { useContext } from 'react'
import { ShopContext } from '../../Services/Context/ShopProvider'
import { Link } from 'react-router-dom'

const PriceComp = () => {
  const { totalAmount, totalPrice, packingCharge } = useContext(ShopContext)

  return (
    <div>
      <h3>Total Amount: ₹{totalAmount}</h3>
      <h4>Packing & Handling Charge: ₹{packingCharge}</h4>
      <h2>Total Price: ₹{totalPrice}</h2>
      <Link to='/checkout'><button>Proceed to Checkout</button></Link>
    </div>
  )
}

export default PriceComp