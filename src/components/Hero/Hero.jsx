import React from 'react'
import { LinearGradient as Lg } from 'react-text-gradients'
import './Hero.css'
import { heropic } from '../../constants'
const Hero = () => {
    return (
        <div className='Hero'>
            <div className="hero-details">
                <h1 className='hero-title'>
                    <Lg gradient={["to left", "white, orange"]}>
                        Binge your favorite Anime & Manga Anytime!

                    </Lg>

                    <span></span>
                </h1>

            </div>

            <img
                src={heropic}
                width={600}
                height={600}>
            </img>

            <div className="short-details">

            </div>



        </div>
    )
}

export default Hero