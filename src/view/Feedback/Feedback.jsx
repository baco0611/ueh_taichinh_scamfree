import React, { useState } from 'react'
import "./Feedback.scss"
import title from "./img/title.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import button from "./img/button.png"

export default function Feedback() {
    const [ emailContent, setEmailContent ] = useState("")
    console.log(emailContent)

    return (
        <div className='page-wrapper' id='feedback'>
            <img className='title' src={title}/>

            <div className='container'>
                <div className='header'>
                    <div></div>
                    <div>
                        <FontAwesomeIcon icon={faMinus}/>
                        <FontAwesomeIcon icon={faSquare}/>
                        <FontAwesomeIcon icon={faXmark}/>
                    </div>
                </div>
                <div className='content'>
                    <div className='main'>
                        <textarea
                            value={emailContent}
                            onChange={e => setEmailContent(e.target.value)}
                            autoFocus={true}
                            placeholder='Chúng mình có thể làm gì để cải thiện?'
                        />
                        <button>
                            <img src={button}/>
                        </button>
                    </div>
                    <div className='text'>
                        <p>Chúng mình trân trọng ý kiến đóng góp của bạn!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
