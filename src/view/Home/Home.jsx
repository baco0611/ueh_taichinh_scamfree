import React from 'react'
import "./Home.scss"
import Banner from './Banner'
import mission from "./img/mission.png"

export default function Home() {
    return (
        <div className='page-wrapper' id='home-section'>
            <Banner/>
            <div className='container'>
                <div className='mission wrapper'>
                    <img className='header' src={mission}/>

                    <div className='content'>
                        <p>Nắm bắt được tầm quan trọng của việc bảo vệ bản thân sinh viên tránh khỏi những cạm bẫy lừa đảo trong thời đại phát triển hiện nay, chiến dịch được tạo ra nhằm giúp sinh viên có một môi trường học tập an toàn, hạn chế tối đa việc bị lừa đảo tài chính.</p>
                        <p>Chiến dịch giúp nâng cao nhận thức và hiểu biết của sinh viên về các hình thức lừa đảo tài chính phổ biến, các thủ đoạn, phương thức lừa đảo tài chính thường gặp hiện nay, đồng thời nâng cao cảnh giác của sinh viên trước những rủi ro này.</p>
                        <p>Cung cấp cho sinh viên kiến thức và kỹ năng cần thiết để phòng chống lừa đảo tài chính, hướng dẫn sinh viên cách bảo mật thông tin cá nhân, trang bị cho sinh viên kỹ năng sử dụng internet an toàn, nhận diện các trang web, ứng dụng giả mạo.</p>

                        <div className='side-content'>
                            <div className='sign-content'>
                                <p>GENZ -  SCAM FREE</p>
                                <p>Scam - free crew, together we grew</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
