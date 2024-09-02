import React, { useContext, useState } from 'react'
import './product.css'
import { Modal } from 'react-bootstrap'
import { ShopContext } from '../../Services/Context/ShopProvider'

const ProductModal = ({ show, onHide, product }) => {
  const { addToCart } = useContext(ShopContext)
  const [quantity, setQuantity] = useState(1)
  // ensure product is not null or undefined before accessing its properties
  if (!product) return null

  const incrementQuantity = () => {
    setQuantity(prevQuanity => prevQuanity + 1);
  }

  const decrementQuantity = () => {
    setQuantity(prevQuanity => prevQuanity > 1 ? prevQuanity - 1 : 1);
  }
  return (
    <Modal
      show={show}
      onHide={onHide}
      size='lg'
      centered >
      <Modal.Header closeButton>
        <Modal.Title className='font-bold'>{product.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className='pro-modal-body flex '>
        <img
          src={product.images[product.images.length - 1]}
          alt={product.title}
          className='w-72' />
        <div>
          <div className="modal-text">
            <p className='text-[#888888]'>{product.small_description}</p>
            <h4 className='text-2xl mb-2 font-bold'>Price:  Rs.{product.price}</h4>
            <p>{product.full_description}</p>
          </div>
          <div className='my-2'>
            <button className='wish-btn' onClick={decrementQuantity}>-</button>
            <span>{quantity}</span>
            <button className='wish-btn' onClick={incrementQuantity}>+</button>
          </div>
          <button
            className='bg-[#ed2938] text-[#ffffff] py-2 px-3 rounded-md'
            onClick={() => addToCart(product, quantity)}>Add to Cart</button>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default ProductModal;