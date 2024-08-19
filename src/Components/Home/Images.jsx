import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import image1 from '../../Assests/Images/3_Left.jpg';
import image2 from '../../Assests/Images/1_Center.jpg';
import image3 from '../../Assests/Images/2_Right.jpg';

const Images = () => {
    return (
        <div className='py-10 w-full'>
            <Container>
                <Row>
                    <Col sm={12} md={3} lg={3} className='overflow-hidden img-sec-div'>
                            <img src={image1} alt="Puranpoli" className='cursor-pointer hover:scale-105 img-sec' />
                    </Col>
                    <Col sm={12} md={6} lg={6} className='overflow-hidden img-sec-div'>
                        <img src={image2} alt="Cookies" className='h-full cursor-pointer hover:scale-105 img-sec' />
                    </Col>
                    <Col sm={12} md={3} lg={3} className='overflow-hidden img-sec-div'>
                        <img src={image3} alt="Barfi" className='cursor-pointer hover:scale-105 img-sec' />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Images;