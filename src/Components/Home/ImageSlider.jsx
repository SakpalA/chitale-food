import React, { useState } from 'react'
import image1 from '../../Assests/Images/Chitale-Agr_compact.png'
import image2 from '../../Assests/Images/Chitale-Agro_compact.png'
import image3 from '../../Assests/Images/Chitale-Foods_compact.png'
import image4 from '../../Assests/Images/Social-Logo-Profile_CBM_compact.jpg'
import image5 from '../../Assests/Images/Social-Logo-Profile_M2_compact.jpg'
import image6 from '../../Assests/Images/Social_Logo_Profile-01.png'
import image7 from '../../Assests/Images/Social_Logo_Profile-03_compact.png'

const ImageSlider = () => {
    const images = [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7
    ];

    const [index, setIndex] = useState(0);

    const handlePrev = () => {
        setIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };
    return (
        <div className="slider-container">
            <button onClick={handlePrev} className="slider-button">
                Prev
            </button>
            <div className="slider">
                {images.map((image, i) => (
                    <img
                        key={i}
                        src={image}
                        alt={`Slide ${i}`}
                        className={`slider-image ${i === index ? 'active' : ''}`}
                        style={{
                            transform: `translateX(${(i - index) * 100}%)`,
                        }}
                    />
                ))}
            </div>
            <button onClick={handleNext} className="slider-button">
                Next
            </button>
        </div>
    )
}

export default ImageSlider;