import React from 'react'
import './footer.css'
import { Col, Container, Row } from 'react-bootstrap'
import logo from '../../Assests/Images/logo.png'
import payment from '../../Assests/Images/paymentgateway_large.png'
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='w-full bg-[#666666] text-[#ffffff] py-16'>
      <Container>
        <Row>
          <Col sm={12} md={6} lg={3} className='mb-6'>
            <div>
              <img src={logo} alt="Logo" className='w-20' />
              <p className='text-left my-9'>
                Chitale Bandhu Mithaiwale,
                <br />
                777, Pune Sevasadan Building, Sadashiv Peth, Pune 411030, Maharashtra, India.
              </p>
              <ul className='flex justify-start items-center social-ul'>
                <li><FaFacebookF className='text-lg' /></li>
                <li><FaTwitter className='text-lg' /></li>
                <li><FaYoutube className='text-lg' /></li>
                <li><FaInstagram className='text-lg' /></li>
              </ul>
            </div>
          </Col>

          <Col sm={12} md={6} lg={3}>
            <div>
              <h4 className='text-left mb-6 footer-head'>Quick Links</h4>
              <ul className='text-left quick-link'>
                <li>Home</li>
                <li>About Us</li>
                <li>Store Location</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </Col>

          <Col sm={12} md={6} lg={3}>
            <div>
              <h4 className='text-left mb-6 footer-head'>Information</h4>
              <ul className='text-left quick-link'>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>Shipping Policy</li>
                <li>Refund / Cancellation Policy</li>
              </ul>
            </div>
          </Col>

          <Col sm={12} md={6} lg={3}>
            <div>
              <h4 className='text-left mb-6 footer-head'>Payment Provider</h4>
              <img src={payment} alt="Payment GateWay" className='mt-11' />
            </div>
          </Col>
        </Row>
      </Container>
      <Container className='mt-4'>
        <Row>
          <Col>
            <div className='text-left'>
              <p>
                @ Chitale Bandhu Mithaiwale 2024. All Rights Reserved.
                <br />
                FSSAI : 11521036001616
                <br />
                Powered by SwiftIndi Digital.
              </p>
            </div>
          </Col>
        </Row>
      </Container>

    </div>
  )
}

export default Footer