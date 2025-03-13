import React from 'react'
import "./Handbook.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import title from "./img/title.png"
import contentList from "./img/contentList.png"
import signPrevent from "./img/signPrevent.png"
import rightSign from "./img/rightSign.png"
import onlineExample from "./img/onlineExample.png"
import { contentData } from "./data"
import ContentListElement from './ContentListElement';

export default function Handbook() {
    return (
        <div className='page-wrapper' id='handbook-section'>
            <img className='handbook-title' src={title}/>

            <div className='search-bar wrapper'>
                <input
                    placeholder='Tìm kiếm thông tin'
                />
                <button>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>

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

            <div className='sign-prevent wrapper'>
                <img className='title' src={signPrevent}/>
                <div className='content'>
                
                </div>
            </div>

            <div className='online-example wrapper'>
                <img className='title' src={onlineExample}/>
                <div>

                </div>
            </div>
        </div>
    )
}
