import React from 'react'
import './Loader.css'
import { CircleLoader } from 'react-spinners'

const Loader = () => {
  return (
    <div className='Loader'>
        <CircleLoader color='orange' size={160} />
    </div>
  )
}

export default Loader