import * as Routing from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'



import React from 'react'

const MainLayout = () => {
  return (
    <div className='root-layout'>
    <Navbar/>
    <Routing.Outlet/>
    
    </div>
  )
}

export default MainLayout