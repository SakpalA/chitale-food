import React, { useEffect, useState } from 'react'
import './about.css'
import { Spinner } from 'react-bootstrap'

const AboutUs = () => {
    const [data, setData] = useState(null)
    const [descriptionPart, setDescriptionPart] = useState(["", ""])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://appy.trycatchtech.com/v3/chitale_foods/about')
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json()
                // console.log("Fetch data: ", result)
                setData(result[0])

                // Slipt description
                const description = result[0].description
                const midPoint = Math.floor(description.length / 2.2)
                const firstPart = description.slice(0, midPoint)
                const secondPart = description.slice(midPoint)
                setDescriptionPart([firstPart, secondPart])
            } catch (error) {
                console.log('Error Fetching data:', error)
            }
        }
        fetchData()
    }, [])

    if (!data) {
        return <div className="loading-indicator py-20">
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        </div>
    }
    return (
        <div className='about-div'>
            <h1 className='text-[#253237] text-3xl font-bold py-3'>About Us</h1>
            <h4 className='text-2xl font-semibold text-[#ec2938] mb-3'>{data.title}</h4>
            <p className='text-left mb-5 text-xl'>{descriptionPart[0]}</p>
            <div className='flex justify-between about-img-div'>
                <img src={data.image} alt="Image" className='about-img' />
                <p className='text-left text-xl ml-10 part-two'>{descriptionPart[1]}</p>
            </div>
        </div>
    )
}

export default AboutUs