import React from 'react'
import * as image from "./img/newsImage"
import { newsData } from './data'

export default function News() {
    console.log(image)
    return (
        <>
            {
                newsData.map((element, index) => {
                    return (
                        <a 
                            href={element.url} 
                            className='element' 
                            target='_blank'
                            key={index}
                        >
                            <img src={image["image" + element.image]}/>
                            <h3>{element.title}</h3>
                            <p>{element.details}</p>
                        </a>
                    )
                })
            }
        </>
    )
}
