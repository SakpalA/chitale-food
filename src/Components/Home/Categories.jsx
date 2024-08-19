import React, { useContext } from 'react'
import { ProductContext } from '../../Services/Context/ProductProvider'
import { Container, Row, Col } from 'react-bootstrap'
import { IoMdArrowDroprightCircle } from "react-icons/io"

const Categories = () => {
    const { categories } = useContext(ProductContext)
    return (
        <div className='w-full py-10'>
            <Container>
            <h1 className='text-left pb-4 text-3xl font-medium'>Popular Categories</h1>
                <Row>
                    {
                        categories && categories.map((item, ind) => {
                            return <Col key={ind}
                                sm={12} md={4} lg={4}>
                                <div  className='home-cat-img-div'>
                                    <img src={item.home_cat_image}
                                        alt={item.cat_name}
                                        className='home-cat-img' />
                                    <div className='home-cat-content text-left'>
                                        <h4 className='font-semibold text-xl'>{item.cat_name}</h4>
                                        <span className='text-sm font-semibold text-gray-400'>{item.no_of_post} Product</span>
                                        <h6 className='flex justify-center items-center cat-shop font-semibold'>Shop Now <IoMdArrowDroprightCircle className='text-[#ed2938] ml-1' /></h6>
                                    </div>
                                </div>
                            </Col>
                        })
                    }
                </Row>
            </Container>
        </div>
    )
}

export default Categories