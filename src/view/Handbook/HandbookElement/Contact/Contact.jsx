import React from 'react'
import title from "./title.png"

export default function Contact() {
    return (
        <div id='contact' className='sub-content'>
            <img className='title' src={title}/>

            <div className='element contact'>
                <div style={{gridRow: "1/4"}}>
                    <p>- <span>Cơ quan Công an:</span></p>
                    <ul className='sub-element'>
                        <li>+ <span>Cục Cảnh sát Hình sự (C02):</span> Chịu trách nhiệm điều tra các vụ án hình sự, bao gồm các vụ lừa đảo chiếm đoạt tài sản.</li>
                        <li><span className='underline'>Hotline:</span> 0692348560</li>

                        <li style={{paddingTop: "10px"}}>+ <span>Cục An ninh mạng và Phòng, chống tội phạm sử dụng công nghệ cao (A05):</span> Chuyên trách điều tra các vụ lừa đảo qua mạng và tội phạm công nghệ cao.</li>
                        <li><span className='underline'>Hotline:</span> 0593.505.999</li>
                        <li><span className='underline'>Thư điện tử:</span> contact@nca.gov.vn</li>
                        
                        <li style={{paddingTop: "10px"}}>+ <span>Công an địa phương:</span> Tại mỗi tỉnh, thành phố, Phòng Cảnh sát Hình sự (PC02) và Phòng An ninh mạng và Phòng, chống tội phạm sử dụng công nghệ cao (PA05) thuộc Công an tỉnh/thành phố chịu trách nhiệm điều tra các vụ lừa đảo trên địa bàn.</li>
                    </ul>
                </div>
                <div>
                    <p>- <span>Cục An toàn thông tin:</span> Hỗ trợ cảnh báo, ngăn chặn website/ứng dụng lừa đảo tài chính; tiếp nhận phản ánh, hướng dẫn xử lý khi bị lừa đảo và phối hợp với cơ quan chức năng để điều tra; tuyên truyền nâng cao nhận thức và kỹ năng phòng tránh lừa đảo mạng.</p>
                    <p><span className='underline'>Hotline:</span> 024.32096789</p>
                    <p><span className='underline'>Website:</span> <a href='https://ais.gov.vn/' target='_blank'>https://ais.gov.vn/</a></p>
                </div>
                <div style={{paddingTop: "10px"}}>
                    <p>- <span>Cổng thông tin điện tử Bộ công an:</span> Cung cấp thông tin chính thống về hoạt động, chính sách và các dịch vụ công trực tuyến của Bộ Công an.</p>
                    <p><span className='underline'>Hotline:</span> 069.2343647</p>
                    <p><span className='underline'>Website:</span> <a href='www.bocongan.gov.vn' target='_blank'>www.bocongan.gov.vn</a></p>
                </div>
                <div style={{paddingTop: "10px"}}>
                    <p>- <span>Hiệp hội an toàn thông tin Việt Nam (VNISA)</span> thúc đẩy phát triển an toàn thông tin qua nghiên cứu, đào tạo, tư vấn, tổ chức sự kiện và hợp tác trong nước, quốc tế.</p>
                    <p><span className='underline'>Hotline:</span> 02462901028</p>
                    <p><span className='underline'>Website:</span> <a href='https://vnisa.org.vn/' target='_https://vnisa.org.vn/'>https://vnisa.org.vn/</a></p>
                </div>
            </div>
        </div>
    )
}
