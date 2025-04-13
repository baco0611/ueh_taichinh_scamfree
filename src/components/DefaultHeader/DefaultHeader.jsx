import React, { useState } from 'react'
import "./DefaultHeader.scss"
import uehLogo from "./picture/uehLogo.png"
import doanLogo from "./picture/doanLogo.png"
import SOFLogo from "./picture/SOFLogo.png"
import { Link, useLocation } from 'react-router-dom'
import clsx from 'clsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

export default function DefaultHeader() {

    const location = useLocation()
    console.log(location.pathname)

    const [ isHidden, setIsHidden ] = useState(true)

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
                        })} to="/game">Trò chơi</Link>
                    </li>
                    <li>
                        <Link className={clsx({
                            active: location.pathname == "/handbook"
                        })} to="/handbook">Sổ tay phòng chống</Link>
                    </li>
                    <li>
                        <Link className={clsx({
                            active: location.pathname == "/feedback"
                        })} to="/feedback">Góp ý</Link>
                    </li>
                </ul>
            </div>
            <div className='mobile-route'>
                <button onClick={() => setIsHidden(false)}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
                <div 
                    className={clsx("route-bar", {
                        "active": !isHidden
                    })}
                >
                    <div className='route-main'>
                        <div className='logo' style={{height: "60px", justifyContent:"center"}}>
                            <img src={uehLogo}/>
                            <img src={doanLogo}/>
                            <img src={SOFLogo}/>
                        </div>
                        <button onClick={() => setIsHidden(true)}>
                            <FontAwesomeIcon icon={faXmark} />
                        </button>
                        <ul>
                            <li>
                                <Link 
                                    onClick={() => setIsHidden(true)}
                                    className={clsx({
                                        active: location.pathname == "/"
                                    })} to="/"
                                >Trang chủ</Link>
                            </li>
                            <li>
                                <Link 
                                    onClick={() => setIsHidden(true)}
                                    className={clsx({
                                        active: location.pathname == "/game"
                                    })} to="/game"
                                >Game</Link>
                            </li>
                            <li>
                                <Link 
                                    onClick={() => setIsHidden(true)}
                                    className={clsx({
                                        active: location.pathname == "/handbook"
                                    })} to="/handbook"
                                >Sổ tay phòng chống</Link>
                            </li>
                            <li>
                                <Link 
                                    onClick={() => setIsHidden(true)}
                                    className={clsx({
                                        active: location.pathname == "/feedback"
                                    })} to="/feedback"
                                >Góp ý</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
