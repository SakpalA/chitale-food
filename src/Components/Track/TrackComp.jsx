import React from 'react'
import './track.css'
import { Container, Row, Col } from 'react-bootstrap'

const TrackComp = () => {
    return (
        <div className='w-full py-5'>
            <p className='text-2xl'>For any queries please contact <u>shoponline@chitalefood.in</u></p>
            <h1 className='text-3xl font-semibold mt-5'>Track Your Order</h1>
            <Container>
                <Row>
                    <Col sm={12} md={6} lg={3} className='my-4 text-left'>
                        <div>
                            <label className='mb-2'>Order Number</label>
                            <br />
                            <input type="text" placeholder='Order Number' className='w-full'/>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={3} className='my-4 text-left'>
                        <div>
                            <label className='mb-2'>Email or Phone Number</label>
                            <br />
                            <input type="text" className='w-full'/>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={3} className='my-4 text-left'>
                        <div>
                            <label className='mb-2'>Tracking Number</label>
                            <br />
                            <input type="text" className='w-full'/>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={3} className='my-4 text-left'>
                        <div>
                            <button className='py-2 bg-[#334fb4] text-[#ffffff] rounded w-full mt-4'>Track</button>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default TrackComp