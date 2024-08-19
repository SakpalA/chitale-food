import React, { useContext } from 'react';
import { ShopContext } from '../../Services/Context/ShopProvider';
import { ProductContext } from '../../Services/Context/ProductProvider';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { SlHandbag } from "react-icons/sl";
import { FaEye } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";

const WishlistComp = () => {
    const { handleModalOpen } = useContext(ProductContext)
    const { wishlist, toggleWishlist, clearWishlist, addAllWishlistToCart } = useContext(ShopContext)
    return (
        <>
            {
                wishlist.length === 0 ? (
                    <p className='text-center my-20'>Wishlist is empty.</p>
                ) : (
                    <Container>
                        <Row>
                            <h2>Wishlist</h2>
                            {wishlist.map(product => (
                                <Col md={3} key={product.id}>
                                    <div style={{ marginBottom: '20px' }} className='product-box'>
                                        <div className='overflow-hidden img-div'>
                                            {product.images && product.images.length > 0 && (
                                                <Link to={`/product-details/${product.title}`}><img
                                                    src={product.images[product.images.length - 1]}
                                                    alt={product.title}
                                                    className='cursor-pointer pro-img'
                                                /></Link>
                                            )}
                                            <button
                                                className='heart-btn flex justify-center items-center'
                                                onClick={() => toggleWishlist(product)}>
                                                {wishlist.includes(product) ? <FaHeart className='text-[#ed2938]' /> : <FaRegHeart />}
                                            </button>
                                            <div className='pro-add-list w-full mb-2'>
                                                <ul className='bg-[#f5f5f5] rounded-3xl flex justify-evenly mx-3 py-3'>
                                                    <li className='text-xl cursor-pointer text-[#ed2938]'><SlHandbag /></li>
                                                    <li className='text-xl cursor-pointer text-[#ed2938]' onClick={() => handleModalOpen(product)}><FaEye /></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className='text-center py-4'>
                                            <Link to={`/product-details/${product.title}`}><h2 className='font-bold cursor-pointer text-xl mb-2'>{product.title}</h2></Link>
                                            <h6 className='text-[#ed2938] font-semibold'>
                                                Rs. {product.price}.00
                                            </h6>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                        <Row>
                            <button
                                className=''
                                onClick={clearWishlist}>Clear Wishlist</button>
                            
                            <button
                            onClick={addAllWishlistToCart}>Add to cart</button>
                        </Row>
                    </Container>
                )
            }
        </>
    )
}

export default WishlistComp;