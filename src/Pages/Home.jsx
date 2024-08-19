import React from 'react'
import '../Components/Home/home.css'
import SliderComp from '../Components/Home/SliderComp'
import Images from '../Components/Home/Images'
import HomeStore from '../Components/Home/HomeStore'
import Testimonial from '../Components/Home/Testimonial'
import ImageSlider from '../Components/Home/ImageSlider'
import Categories from '../Components/Home/Categories'

const Home = () => {
  return (
    <>
      <SliderComp />
      <Categories />
      <Images />
      <HomeStore />
      <Testimonial />
      <ImageSlider />
    </>
  )
}

export default Home