import React, { useContext } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { ProductContext } from '../../Services/Context/ProductProvider';
import { ShopContext } from '../../Services/Context/ShopProvider';
import { SlHandbag } from "react-icons/sl";
import { FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaHeart } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";

const GridView = () => {
  const { filteredCategories, handleModalOpen } = useContext(ProductContext)
  const { wishlist, toggleWishlist } = useContext(ShopContext)

  return (
    <Container className='my-3'>
      <Row>
        {filteredCategories.length > 0 ? (
          filteredCategories.map((elem, ind) => (
            <Col md={4} key={ind}>
              <div style={{ marginBottom: '20px' }} className='product-box'>
                <div className='overflow-hidden img-div'>
                  {elem.images && elem.images.length > 0 && (
                    <Link to={`/product-details/${elem.title}`}><img
                      src={elem.images[elem.images.length - 1]}
                      alt={elem.title}
                      className='cursor-pointer pro-img'
                    /></Link>
                  )}
                  <button
                    className='heart-btn flex justify-center items-center'
                    onClick={() => toggleWishlist(elem)}>
                    {wishlist.includes(elem) ? <FaHeart className='text-[#ed2938]' /> : <FaRegHeart />}
                  </button>
                  <div className='pro-add-list w-full mb-2'>
                    <ul className='bg-[#f5f5f5] rounded-3xl flex justify-evenly mx-3 py-3'>
                      <Link to={`/product-details/${elem.title}`}><li className='text-xl cursor-pointer text-[#ed2938]'><SlHandbag /></li></Link>
                      <li className='text-xl cursor-pointer text-[#ed2938]' onClick={() => handleModalOpen(elem)}><FaEye /></li>
                    </ul>
                  </div>
                </div>
                <hr />
                <div className='text-center py-4'>
                  <Link to={`/product-details/${elem.title}`}><h2 className='font-bold cursor-pointer text-xl mb-2'>{elem.title}</h2></Link>
                  <h6 className='text-[#ed2938] font-semibold'>
                    Rs. {elem.price}.00
                  </h6>
                </div>
              </div>
            </Col>
          ))
        ) : (
          <Col>
            <div className='h-96'>
              <p>No data available</p>
            </div>
          </Col>
        )}
      </Row>
    </Container>
  )
}

export default GridView;