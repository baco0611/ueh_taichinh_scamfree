import React from 'react'
import "./DefaultHeader.scss"
import uehLogo from "./picture/uehLogo.png"
import doanLogo from "./picture/doanLogo.png"
import SOFLogo from "./picture/SOFLogo.png"
import { Link, useLocation } from 'react-router-dom'
import clsx from 'clsx'

export default function DefaultHeader() {

    const location = useLocation()
    console.log(location.pathname)

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
                        <Link className={clsx({
                            active: location.pathname == "/"
                        })} to="/">Trang chủ</Link>
                    </li>
                    <li>
                        <Link className={clsx({
                            active: location.pathname == "/game"
                        })} to="/game">Game</Link>
                    </li>
                    <li>
                        <Link className={clsx({
                            active: location.pathname == "/activities"
                        })} to="/activities">Hoạt động</Link>
                    </li>
                    <li>
                        <Link className={clsx({
                            active: location.pathname == "/handbook"
                        })} to="/handbook">Sổ tay phòng chống</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
