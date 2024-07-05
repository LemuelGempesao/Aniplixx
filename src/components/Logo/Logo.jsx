import React from 'react'
import './Logo.css'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <div className='logo'>
      <Link to = '/'>
      <h2><span className='logo-design'>Ani</span>Plixx</h2>
      </Link>
    </div>
  )
}

export default Logo