import React, { useState, useEffect } from 'react'
import { CircleLoader } from 'react-spinners'
import NewsItem from '../NewsItem/NewsItem';
import './NewsWrapper.css'
import { LinearGradient as Lg } from 'react-text-gradients';
import { Link } from 'react-router-dom';


const NewsWrapper = ({ isHome = false }) => {


    const [loading, setLoading] = useState(true);
    const [news, setNews] = useState(null);

    useEffect(() => {

        const fetchNews = async () => {

            const animeURL = isHome ? "api/animeNews?_limit=3" : "api/animeNews";

            try {
                const res = await fetch(animeURL);
                const data = await res.json();
                setNews(data);
                setLoading(false);
                console.log(news);


            }

            catch (error) {
                console.log("Error: ", error.message);
            }


        }
        fetchNews();




    }, [])

    console.log(news)



    return (
        <div className='Pages'>
            <h1 className='News-Wrapper-title'>
                <Lg gradient={["to right", "orange, white"]}>News</Lg></h1>


            <div className={`news-items-container ${isHome? "half" : ""}`}>

                {loading ?
                    <CircleLoader color='orange' size={80} />
                    :
                    (news.map(item => {
                        return (
                            <NewsItem
                                title={item.title}
                                publicationDate={item.publicationDate}
                                content={item.content} />
                        )

                    }))
                }
            {isHome && 
            <div className='see-more-news'>
                <Link to ='./news'><h1>See More News</h1></Link>
            </div>}
            </div>

            
           

        </div>
         )
   
}

export default NewsWrapper