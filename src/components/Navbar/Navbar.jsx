import React from 'react'
import Links from '../Links/Links'
import Logo from '../Logo/Logo'


import './Navbar.css'

const Navbar = () => {



  return (
    <nav className='Navbar'>
      <Logo />
      <Links/>  
    </nav>
  )
}

export default Navbar