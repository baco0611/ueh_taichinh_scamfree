import React, { useEffect, useRef, useState } from 'react'
import "./Handbook.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import title from "./img/title.png"
import contentList from "./img/contentList.png"
import onlineExample from "./img/onlineExample.png"
import { contentData } from "./data"
import ContentListElement from './ContentListElement';
import OnlineExample from './OnlineExample';
import news from "./img/news.png"
import News from './News';
import feedback from "../Home/img/feedback.png"
import { Link } from 'react-router-dom';
import Object from './HandbookElement/Object/Object';
import SafetyPrinciple from './HandbookElement/SafetyPrinciple/SafetyPrinciple';
import TroubleShooting from './HandbookElement/TroubleShooting/TroubleShooting';
import ReportScam from './HandbookElement/ReportScam/ReportScam';
import Contact from './HandbookElement/Contact/Contact';
import Law from './HandbookElement/Law/Law';
import Tool from './HandbookElement/Tool/Tool';

export default function Handbook() {
    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            const el = document.getElementById(id);
            if (el) {
                setTimeout(() => {
                    const yOffset = -75; // header cao 75px
                    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                }, 100); // delay nhẹ để DOM chắc chắn đã render
            }
        } else {
            // Không có hash → scroll lên đầu
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [location]);

    const [ isHiddenMenu, setIsHiddenMenu ] = useState(true)
    const menuRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsHiddenMenu(true);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className='page-wrapper' id='handbook-section'>
            <img className='handbook-title' src={title}/>

            <div className='search-bar wrapper'>
                <div className='search-box'>
                    <div 
                        className='main-element cursorPointer'
                        onClick={() => setIsHiddenMenu(false)}
                    >
                        <p>Tìm kiếm thông tin</p>
                        <button>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                    {
                        !isHiddenMenu &&
                        <div className='menu' ref={menuRef}>
                            <ul>
                                <li>
                                    <a 
                                        onClick={() => setIsHiddenMenu(true)}
                                        href='#common-form'
                                    >Một số hình thức lừa đảo phổ biến</a>
                                </li>
                                <li>
                                    <a 
                                        onClick={() => setIsHiddenMenu(true)}
                                        href='#object'
                                    >Đối tượng mục tiêu trong các vụ lừa đảo</a>
                                </li>
                                <li>
                                    <a 
                                        onClick={() => setIsHiddenMenu(true)}
                                        href='#principle'
                                    >Nguyên tắc an toàn trước các hình thức lừa đảo</a>
                                </li>
                                <li>
                                    <a 
                                        onClick={() => setIsHiddenMenu(true)}
                                        href='#trouble-shooting'
                                    >Hướng dẫn xử lý khi bị lừa đảo tài chính</a>
                                </li>
                                <li>
                                    <a 
                                        onClick={() => setIsHiddenMenu(true)}
                                        href='#report'
                                    >Hướng dẫn về các báo cáo các vụ lừa đảo cho các cơ quan chức năng, ngân hàng, hoặc tổ chức tài chính</a>
                                </li>
                                <li>
                                    <a 
                                        onClick={() => setIsHiddenMenu(true)}
                                        href='#contact'
                                    >Cơ quan và tổ chức hỗ trợ</a>
                                </li>
                                <li>
                                    <a 
                                        onClick={() => setIsHiddenMenu(true)}
                                        href='#law'
                                    >Luật pháp và quy định</a>
                                </li>
                                <li>
                                    <a 
                                        href='#tool'>Công nghệ chống lừa đảo tài chính</a>
                                </li>
                            </ul>
                        </div>
                    }
                </div>
            </div>

            <div id='common-form' className='content-list wrapper'>
                <img className='title' src={contentList}/>
                <div className='content'>
                {
                    contentData.map((element, index) => {
                        return (
                            <ContentListElement
                                key={index}
                                element={element}
                            />
                        )
                    })
                }
                </div>
            </div>

            <div className='main-content'>
                <Object/>
                <SafetyPrinciple/>
                <TroubleShooting/>
                <ReportScam/>
                <Contact/>
                <Law/>
                <Tool/>
            </div>

            <div className='online-example wrapper'>
                <img className='title' src={onlineExample}/>
                <div className='content'>
                    <OnlineExample/>
                </div>
            </div>

            <div className='news wrapper'>
                <img className='title' src={news}/>
                <div className='content'>
                    <News/>
                </div>
            </div>
            <div className='feedback'>
                <Link to="/feedback">
                    <img src={feedback}/>
                </Link>
            </div>
        </div>
    )
}
