import React from 'react'

import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Watch from './pages/Watch/Watch'
import News from './pages/News/News'
import Bookmark from './pages/Bookmark/Bookmark'
import MainLayout from './layout/MainLayout'


const App = () => {
  return (

    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />}/> 
        <Route path='/watch' element={<Watch />}/> 
        <Route path='/news' element={<News />}/>
        <Route path='/bookmark' element={<Bookmark />}/>
      </Route>

    </Routes>


  )
}

export default App