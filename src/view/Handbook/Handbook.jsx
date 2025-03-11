import React from 'react'
import "./Handbook.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import title from "./img/title.png"
import contentList from "./img/contentList.png"
import contentData from './data';

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
                        <div className='element' key={index}>
                            <p>{element.content}</p>
                        </div>
                        )
                    })
                }
                </div>
            </div>
        </div>
    )
}
