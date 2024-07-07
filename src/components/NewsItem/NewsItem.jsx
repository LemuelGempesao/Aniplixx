import React,{useState} from 'react'
import './NewsItem.css'


const NewsItem = ({title, publicationDate, content}) => {
  const [press, setPress] = useState(false);
  const contents = press? content: content.substring(0, 90)+"..."
  
  return (
    <div className='news-item-cont'>
        <h1 className='news-item-title'>{title}</h1>
        <h5 className='news-item-date'>{publicationDate}</h5>
        <p className='news-item-content'>{contents} <span><button 
        onClick = {()=>{press? setPress(false): setPress(true)}}
        className='see'>{press? "See Less":"See More"}</button></span></p>
       
    </div>
  )
}

export default NewsItem