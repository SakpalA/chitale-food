import React, { useContext } from 'react'
import { ProductContext } from '../../Services/Context/ProductProvider';
import { Container, Row, Col } from 'react-bootstrap';
import { FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Services/Context/ShopProvider';

const ListView = () => {
    const { filteredCategories, handleModalOpen } = useContext(ProductContext)
    const { addToCart } = useContext(ShopContext)
    return (
        <Container className='my-3'>
            <Row>
                {filteredCategories.length > 0 ? (
                    filteredCategories.map((product, ind) => (
                        <Col key={ind} sm={12} md={12}>
                            <Row className='product-box my-2'>
                                <Col sm={12} md={4}>
                                    <div className="prod-img">
                                        {product.images && product.images.length > 0 && (
                                            <Link to={`/product-details/${product.title}`}><img
                                                src={product.images[product.images.length - 1]}
                                                alt={product.title}
                                                className='cursor-pointer' /></Link>
                                        )}
                                        <div
                                            className="modal-icon text-[#ed2938]"
                                            onClick={() => handleModalOpen(product)}><FaEye className='my-3 mx-auto' /></div>
                                    </div>
                                </Col>

                                <Col sm={12} md={8}>
                                    <div className="prod-text p-2">
                                        <Link to={`/product-details/${product.title}`}><h3 className='text-xl font-bold cursor-pointer mb-2'>{product.title}</h3></Link>
                                        <span className='text-[#ed2938]'>Rs.{product.price}.00</span>
                                        <p className='my-4'>{product.full_description}</p>
                                        <button className='list-add-btn py-1.5 px-3 cursor-pointer' onClick={() => addToCart(product)}>Add To Cart</button>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    ))
                ) : (
                    <Col>
                        <p>No Product Available.</p>
                    </Col>
                )}

            </Row>
        </Container>
    )
}

export default ListView;