import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../../Services/Context/ProductProvider';
import { ShopContext } from '../../Services/Context/ShopProvider';
import { Container, Col, Row } from 'react-bootstrap';

const ProductDetails = () => {
  const { products } = useContext(ProductContext);
  const { addToCart} = useContext(ShopContext);
  const { product_title } = useParams();
  const [selectedImage, setSelectedImage] = useState('');
  const [quantity, setQuantity] = useState(1)

  const detail = products.find(product => product.title === product_title);

  const handleImageClick = (img) => {
    setSelectedImage(img);
  };

  // Icrement
  const incrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  }

  // decrement
  const decrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity > 1 ? prevQuantity - 1 : 1)
  }

  useEffect(() => {
    if (detail && detail.images && detail.images.length > 0 && !selectedImage) {
      setSelectedImage(detail.images[detail.images.length - 1]);
    }
  }, [detail, selectedImage]);

  if (!detail) {
    return <div className='text-center'>No Product Available.</div>;
  }

  return (
    <Container className='py-10'>
      <Row>
        <Col sm={12} md={12} lg={6}>
          <Row>
            <Col sm={4} md={4}>
              <div className="detail-img-scroll flex flex-col">
                {detail.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={detail.title} 
                    onClick={() => handleImageClick(image)}
                    className='cursor-pointer' />
                ))}
              </div>
            </Col>
            <Col sm={8} md={8}>
              <div className="detail-main-img">
                {selectedImage && (
                  <img
                    src={selectedImage}
                    alt={detail.title} />
                )}
              </div>
            </Col>
          </Row>
        </Col>
        <Col sm={12} md={12} lg={6}>
          <div className="detail-text-div">
            <h1>{detail.title}</h1>
            <span>{detail.price}</span>
            <div className='flex justify-start items-center'>
              <div className='mr-3'>
                <button onClick={decrementQuantity}>-</button>
                <span>{quantity}</span>
                <button onClick={incrementQuantity}>+</button>
              </div>
              <button className='bg-[#ed2938] text-[#ffffff]' onClick={() => addToCart(detail, quantity)}>Add To Cart</button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
