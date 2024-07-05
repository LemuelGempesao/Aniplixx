import React from 'react';
import { NavLink } from 'react-router-dom';
import Burger from '../Burger/Burger';
import './Links.css'
import { useState, useEffect } from 'react';



const Links = () => {




    const [clicked, setClicked] = useState(false);
    const [size, setSize] = useState(window.innerWidth);
    console.log(size)



    useEffect(() => {
        const set = () => { setSize(window.innerWidth) };
        window.addEventListener("resize", set)

        return () => {
            window.removeEventListener("resize", set)
        }



    }, [])
    console.log(size);



    return (
        <>
            {size<=620 && <Burger click={clicked} setClick={setClicked} />}
            
            <div className={`menus ${size<=620? "abs":""} ${size<=620 && !clicked? "hide":"show"}`}> 
                <ul className={size<=620? `links sm-screen ${clicked? "":"hide"}`: "links"}>
                    {["Home", "Watch", "News", "Bookmark"].map((link, i) => (
                        <li key={i}>
                            <NavLink 
                                activeStyle="active" 
                                className='link' 
                                to={link=="Home"?("/"):`${link.toLowerCase()}`}>
                                    
                                    {link}
                                </NavLink>
                        </li>

                    ))}
                </ul>
            </div>

        </>



    );
}

export default Links;