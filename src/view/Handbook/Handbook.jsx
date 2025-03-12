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

            <div className='sign-prevent wrapper'>
                <img className='title' src={signPrevent}/>
                <div className='content'>
                {
                    contentData.map((element, index) => {
                        return (
                            <div key={index} className='element'>
                                <h3>{element.content}</h3>

                                <p className='sign'>Dấu hiệu nhận biết</p>
                                <ul className='sign'>
                                {
                                    element.signs.map((element, index) => {
                                        return <li key={index}>{index + 1}. {element}</li>
                                    })
                                }
                                </ul>

                                <p className='prevent'>
                                    <img src={rightSign}/>
                                    Cách phòng chống:
                                </p>
                                <ul className='prevent'>
                                {
                                    element.prevent.map((element, index) => {
                                        return <li key={index}>- {element}</li>
                                    })
                                }
                                </ul>
                            </div>
                        )
                    })
                }
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
