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
                </h1>
            </div>

            <div className='img-cont'>
                <img
                    src={heropic}
                    alt = "cute kawai"
                    width={400}
                    height={500}
                    >
                    
                </img>
            </div>
        </div>
    )
}

export default Hero