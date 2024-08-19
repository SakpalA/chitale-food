import React, { useContext } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { ShopContext } from '../../Services/Context/ShopProvider';
import { Link } from 'react-router-dom';
import PriceComp from './PriceComp';

const CartComp = () => {
    const { cart, removeFromCart, incrementQuantity, decrementQuantity, clearCart } = useContext(ShopContext)

    if (!cart || cart.length === 0) {
        return <div className='text-center py-20'>Cart is Empty.</div>;
    }
    return (
        <Container>
            <Row>
                {cart.map(product => (
                    <Col key={product.id} sm={12} md={6} lg={4}>
                        <div className="cart-item">
                            <img src={product.images[product.images.length - 1]} alt={product.title} />
                            <h2>{product.title}</h2>
                            <span>{product.price * product.quantity.toFixed(2)}</span>
                            <div className="quantity-controls">
                                <button onClick={() => decrementQuantity(product.id)}>-</button>
                                <span>{product.quantity}</span>
                                <button onClick={() => incrementQuantity(product.id)}>+</button>
                            </div>
                            <button onClick={() => removeFromCart(product.id)}>Remove</button>
                        </div>
                    </Col>
                ))}
            </Row>
            <Row>
                <button onClick={clearCart}>Clear Cart</button>
                <Link to='/product'><button>Continue Shopping</button></Link>
            </Row>
            <Row>
                <PriceComp />
            </Row>
        </Container>
    )
}

export default CartComp;