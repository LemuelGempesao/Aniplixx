import React from 'react'
import News from '../News/News'
import Watch from '../Watch/Watch'
import Hero from '../../components/Hero/Hero'



const Home = () => {
  return (
    <section className='Home Pages'>
      <div className='home-container'>
      <Hero />
      <News />
      <Watch isHome={true} />
      </div>

    </section>
  )
}

export default Home