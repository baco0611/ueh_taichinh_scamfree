import React, { useEffect } from 'react'
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
    // useEffect(() => {
    //     window.scrollTo(0, 0)
    // }, [])

    return (
        <div className='page-wrapper' id='handbook-section'>
            <img className='handbook-title' src={title}/>

            {/* <div className='search-bar wrapper'>
                <input
                    placeholder='Tìm kiếm thông tin'
                />
                <button>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div> */}

            <div className='content-list wrapper'>
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
