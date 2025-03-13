import React, { useState } from 'react'
import * as image from "./img/contentImage"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { getFatherElementByClass } from '../../utils/function';

export default function ContentListElement({ element }) {
    const [ isHide, setIsHide ] = useState(true)

    const closePopUp = e => {
        const element = getFatherElementByClass(e.target, "contain")
        
        if(!element) setIsHide(true)
    }

    return (
        <>
            <div 
                className='element cursorPointer'
                onClick={() => setIsHide(false)}
            >
                <p>{element.title}</p>
            </div>
            {
                !isHide && 
                <div 
                    className='pop-up'
                    onClick={closePopUp}
                >
                    <div className='contain'>
                        <FontAwesomeIcon 
                            className='closeBtn cursorPointer' 
                            icon={faXmark} 
                            onClick={() => setIsHide(true)}    
                        />
                        <h1>{element.title}</h1>
                        {
                            element.image &&    
                            <img src={image["image" + element.image]}/>
                        }
                        {
                            element.image && element.source &&
                            <span>Nguồn: {element.source}</span>
                        }

                        <p>{element.content}</p>
                    </div>  
                </div>
            }
        </>
    )
}
