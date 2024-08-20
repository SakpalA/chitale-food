import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ShopContext } from '../../Services/Context/ShopProvider';
import { Link } from 'react-router-dom';
import PriceComp from './PriceComp';
import '../Wishlist/wishlist.css';

const CartComp = () => {
    const { cart, removeFromCart, incrementQuantity, decrementQuantity, clearCart } = useContext(ShopContext);

    if (!cart || cart.length === 0) {
        return <div className='text-center py-20'>Cart is Empty.</div>;
    }

    return (
        <>
            <h1 className='text-center text-3xl font-bold mt-3'>Cart</h1>
            <div className='flex justify-center align-top p-20 cart-cont'>
                <Container>
                    <Row>
                        {cart.map(product => (
                            <Col key={product.id} sm={12} md={12} lg={12}>
                                <div className="cart-item">
                                    <img src={product.images[product.images.length - 1]} alt={product.title} />
                                    <div className='cart-item-text'>
                                        <h2 className='text-2xl font-bold mb-2 sm:text-l'>{product.title}</h2>
                                        <span className='text-gray-500 mb-2'>Rs. {(product.price * product.quantity).toFixed(2)}</span>
                                        <div className="quantity-controls my-3">
                                            <button className='wish-btn' onClick={() => decrementQuantity(product.id)}>-</button>
                                            <span>{product.quantity}</span>
                                            <button className='wish-btn' onClick={() => incrementQuantity(product.id)}>+</button>
                                        </div>
                                        <button className='wish-btn' onClick={() => removeFromCart(product.id)}>Remove</button>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                    {/* <Row className='py-2'>
                        <Col>
                            <button className='wish-btn float-right clear-btn' onClick={clearCart}>Clear Cart</button>
                        </Col>
                        <Col>
                        <Link to='/product'><button className='wish-btn float-left continue-btn'>Continue Shopping</button></Link>
                        </Col>
                    </Row> */}
                </Container>
                <Container>
                    <Row>
                        <PriceComp />
                    </Row>
                </Container>
            </div>
            <div className="cart-btns">
                <button className='wish-btn clear-btn' onClick={clearCart}>Clear Cart</button>
                <Link to='/product'><button className='wish-btn continue-btn'>Continue Shopping</button></Link>
            </div>
        </>
    );
};

export default CartComp;
