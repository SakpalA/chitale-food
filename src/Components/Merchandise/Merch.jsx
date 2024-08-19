import React, { useEffect, useState } from 'react'
import './merch.css'
import axios from 'axios'
import { Container, Row, Col, Spinner } from 'react-bootstrap'

const Merch = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://appy.trycatchtech.com/v3/chitale_foods/merchandise_category_list");
                setData(response.data);
                setLoading(false);
                console.log(response.data);
            } catch (error) {
                console.log("Error", error);
                setLoading(false);
            }
        }
        fetchData();
    }, [])

    return (
        <>

        {
            loading ? (
                <div className="loading-indicator py-10">
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                </div>
            ) : (
                <div className='py-10'>
                    <h1 className='text-3xl text-[#c73d23]'>Chitale Merchandise</h1>
                    <Container>
                        <Row>
                            {
                                data && data.map((item, index) => (
                                    <Col key={index} sm={12} md={6} lg={6} className='flex justify-center items-center'>
                                        <div>
                                            <img
                                                src={item.cat_image}
                                                alt={item.cat_name} 
                                                className='cursor-pointer'/>
                                        </div>
                                    </Col>
                                ))}
                        </Row>
                    </Container>
                </div >
            )}
    </>
    )
}

export default Merch