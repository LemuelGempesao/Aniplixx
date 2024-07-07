import React from 'react'
import NewsWrapper from '../../components/NewsWrapper/NewsWrapper'
import Watch from '../Watch/Watch'
import Hero from '../../components/Hero/Hero'




const Home = () => {
  return (
    <section className='Home Pages'>
      <div className='home-container'>
        <Hero />
        <NewsWrapper isHome={true} />
        <Watch isHome={true} />
      </div>
    </section>
  )
}

export default Home