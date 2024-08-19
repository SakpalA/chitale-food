import React from 'react'
import image from '../../Assests/Images/Store-image.png'
import { Container, Row, Col } from 'react-bootstrap'

const HomeStore = () => {
    return (
        <div className='w-full py-12'>
            <Container>
                <Row className='flex items-center'>
                    <Col sm={12} md={12} lg={4} className='store-img-col flex justify-center items-center'>
                        <img src={image} alt="Store Image" className='store-img'/>
                    </Col>
                    <Col sm={12} md={12} lg={8}>
                        <div className='flex flex-col justify-center'>
                            <h1 className='text-left mb-4 text-4xl font-semibold'>Welcome to Chitale Foods</h1>
                            <p className='text-xl text-left'>The veins of the rich Chitale legacy trace back to 1939, when the visionary Late Shri. Bhaskar Ganesh Chitale started a humble milk distribution business at Bhilawadi in Sangli district. This marked the beginning of the first ever entrepreneurial dairy revolution in India. This worthy lineage was ably carried forward by his sons Bhausaheb, Rajabhau, Nanasaheb and Kakasaheb Chitale, who got affiliated with the business on completion of their education. The beginning of the 1950s was also marked by yet another significant milestone: the establishment of Chitale Bandhu Mithaiwale by Raghunath Chitale, affectionately known as Bhausaheb. </p>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default HomeStore