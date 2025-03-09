import React from 'react'
import "./DefaultHeader.scss"
import uehLogo from "./picture/uehLogo.png"
import doanLogo from "./picture/doanLogo.png"
import SOFLogo from "./picture/SOFLogo.png"
import { Link } from 'react-router-dom'

export default function DefaultHeader() {
    return (
        <div id='defaultHeader'>
            <div className='logo'>
                <img src={uehLogo}/>
                <img src={doanLogo}/>
                <img src={SOFLogo}/>
            </div>
            <div className='route'>
                <ul>
                    <li>
                        <Link to="/">Trang chủ</Link>
                    </li>
                    <li>
                        <Link to="/game">Game</Link>
                    </li>
                    <li>
                        <Link to="/activities">Hoạt động</Link>
                    </li>
                    <li>
                        <Link to="/handbook">Sổ tay phòng chống</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
