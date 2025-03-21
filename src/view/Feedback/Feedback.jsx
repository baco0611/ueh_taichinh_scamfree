import React, { useEffect, useRef, useState } from 'react'
import "./Feedback.scss"
import title from "./img/title.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import button from "./img/button.png"
import { onCheckData, onSubmit } from './function';
import Handling from '../../components/Handling/Handling';

export default function Feedback() {
    const [ emailContent, setEmailContent ] = useState("")
    const contentRef = useRef()
    const [ isLoading, setIsLoading ] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const onReload = () => {
        setEmailContent("")
        setIsLoading(false)
    }

    return (
        <div className='page-wrapper' id='feedback'>
        {
            isLoading &&
            <Handling
                message="GÓP Ý CỦA BẠN ĐANG ĐƯỢC GỬI ĐẾN CHÚNG MÌNH ..."
            />
        }
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
                            ref={contentRef}
                            value={emailContent}
                            onChange={e => setEmailContent(e.target.value)}
                            placeholder='Chúng mình có thể làm gì để cải thiện?'
                        />
                        <button
                            onClick={e => onSubmit({
                                e,
                                content: emailContent,
                                setIsLoading,
                                onReload
                            })}
                        >
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
