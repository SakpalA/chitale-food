import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { BsGridFill } from "react-icons/bs";
import { MdFormatListBulleted } from "react-icons/md";
import { ProductContext } from '../../Services/Context/ProductProvider';

const Sort = () => {
    const { switchToGridView, switchToListView, isGridView, handleSortChange } = useContext(ProductContext)
    return (
        <Container className='bg-[#f6f6f6] p-3'>
            <Row>
                <Col sm={12} md={6} className='my-1'>
                    <div className='grid-box flex justify-start items-center'>
                        <div className={isGridView ? 'square-list grid-active' : 'square-list'}onClick={switchToGridView}>
                            <BsGridFill />
                        </div>
                        <div className={isGridView ? 'square-list' : 'square-list grid-active'}onClick={switchToListView}>
                            <MdFormatListBulleted />
                        </div>
                        <span className='text-[#888888]'>Showing all products</span>
                    </div>
                </Col>
                <Col sm={12} md={6} className='my-1'>
                    <div className='sort'>
                        <label htmlFor="food-order" className='sort-label'>Sort By: </label>
                        <select name="food-order" id='food-order' onChange={handleSortChange}>
                            <option value="">Featured</option>
                            <option value="priceHighToLow">Price, High to Low</option>
                            <option value="priceLowToHigh">Price, Low to High</option>
                            <option value="alphabeticallyAZ">Alphabetically, A-Z</option>
                            <option value="alphabeticallyZA">Alphabetically, Z-A</option>
                        </select>
                    </div>
                </Col>
            </Row>
        </Container>

    )
}

export default Sort