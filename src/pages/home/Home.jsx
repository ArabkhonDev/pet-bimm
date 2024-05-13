import React from 'react'
import MainWorks from '../../components/mainWorks/MainWorks'
import News from '../../components/news/News'
import Carousel from '../../components/carousel/Carousel'

const Home = () => {
  return (
    <div>
      <Carousel />
      <MainWorks />
      <News />
    </div>
  )
}

export default Home
