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
        <Modal.Title>{product.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className='pro-modal-body'>
        <img
          src={product.images[product.images.length - 1]}
          alt={product.title}
          className='w-72' />
        <div className="modal-text">
          <p>{product.small_description}</p>
          <h4>Price:  Rs.{product.price}.00</h4>
          <p>{product.full_description}</p>
        </div>
        <div>
          <button onClick={decrementQuantity}>-</button>
          <span>{quantity}</span>
          <button onClick={incrementQuantity}>+</button>
        </div>
        <button
          className='bg-[#ed2938] text-[#ffffff]'
          onClick={() => addToCart(product, quantity)}>Add to Cart</button>
      </Modal.Body>
    </Modal>
  )
}

export default ProductModal;