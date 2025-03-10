import React from 'react'
import "./DefaultFooter.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom"

export default function DefaultFooter() {
    return (
        <div id='defaultFooter'>
            <div className='info-box'>
                <h2>Tài chính và bạn</h2>
                <p>
                    <FontAwesomeIcon icon={faFacebook} />
                    <a href="https://www.facebook.com/doanhoitaichinh/?locale=vi_VN">https://www.facebook.com/doanhoitaichinh</a>  
                </p>
                <p>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <a href="mailto:doanhoi.taichinh@ueh.edu.vn">doanhoi.taichinh@ueh.edu.vn</a>  
                </p>
            </div>
            <div className='info-box'>
                <h2>Thông tin liên hệ</h2>
                <p>
                    <a href='tel:+84905110074'>Mai Xuân Quỳnh - 0905 110 074</a>
                </p>    
            </div>
        </div>
    )
}
