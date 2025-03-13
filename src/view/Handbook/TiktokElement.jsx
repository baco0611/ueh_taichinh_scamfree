import React from 'react'
import * as image from "./img/tiktokImage"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";

export default function TiktokElement({ information }) {
    return (
        <a target='_blank' href={information.url} className='tiktok-element'>
            <div className='block'>
                <img src={image["image" + information.image]}/>
                <h4> 
                    <FontAwesomeIcon icon={faTiktok} />
                    {information.tiktokName}
                </h4>
                <h2>{information.title}</h2>
            </div>
        </a>
    )
}
