import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { BsGridFill } from "react-icons/bs";
import { MdFormatListBulleted } from "react-icons/md";
import { ProductContext } from '../../Services/Context/ProductProvider';

const Sort = () => {
    const { switchToGridView, switchToListView, isGridView } = useContext(ProductContext)
    return (
        <Container>
            <Row>
                <Col sm={12} md={6}>
                    <div className='grid-box flex justify-start items-center'>
                        <div className={isGridView ? 'square-list grid-active' : 'square-list'}onClick={switchToGridView}>
                            <BsGridFill />
                        </div>
                        <div className={isGridView ? 'square-list' : 'square-list grid-active'}onClick={switchToListView}>
                            <MdFormatListBulleted />
                        </div>
                    </div>
                </Col>
                <Col sm={12} md={6}>
                    <div className='sort'>
                        ysycbuiwecn
                    </div>
                </Col>
            </Row>
        </Container>

    )
}

export default Sort