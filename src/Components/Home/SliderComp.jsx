import React, {useState} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import slider1 from '../../Assests/Images/slider1.jpg'
import slider2 from '../../Assests/Images/slider2.jpg'
import slider3 from '../../Assests/Images/slider3.jpg'

const SliderComp = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  }
  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className='carousel'>
      <Carousel.Item>
       <img src={slider1} alt="Slider" className='carousel-img'/>
      </Carousel.Item>
      <Carousel.Item>
        <img src={slider2} alt="Slider" className='carousel-img'/>
      </Carousel.Item>
      <Carousel.Item>
        <img src={slider3} alt="Slider" className='carousel-img'/>
      </Carousel.Item>
    </Carousel>
  )
}

export default SliderComp