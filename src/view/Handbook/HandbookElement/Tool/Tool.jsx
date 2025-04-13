import React from 'react'
import title from "./title.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

export default function Tool() {
    return (
        <div className='sub-content'>
            <img className='title' src={title}/>

            <Swiper
                slidesPerView={1}
                slidesPerGroup={1}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
                loop={true}
                speed={800}
            >
                <SwiperSlide>
                    <div className='element'>
                        <p><span>Phân tích Dữ liệu Lớn (Big Data) trong phát hiện hành vi lừa đảo</span></p>
                        <ul className='sub-element'>
                            <li>+ <span>Phân tích dữ liệu lớn</span> là công nghệ sử dụng các thuật toán và công cụ mạnh mẽ để xử lý và phân tích lượng dữ liệu khổng lồ, từ đó nhận diện các mẫu hành vi bất thường và có thể liên quan đến lừa đảo. Các tổ chức tài chính và ngân hàng có thể áp dụng phân tích dữ liệu lớn để theo dõi và phân tích hành vi giao dịch của người dùng trong thời gian thực.</li>
                            <li>+ <span>Cách thức hoạt động:</span></li>
                            <li>
                                <ul className='sub-element'>
                                    <li>&#9900; <span className='underline'>Phát hiện giao dịch bất thường:</span> Các hệ thống phân tích dữ liệu lớn có thể phát hiện những thay đổi đột ngột trong hành vi giao dịch của người dùng, ví dụ như giao dịch lớn, giao dịch ở địa điểm không thường xuyên hoặc chuyển tiền qua các quốc gia có tỷ lệ lừa đảo cao.</li>
                                    <li>&#9900; <span className='underline'>Theo dõi mẫu hành vi:</span> Các công cụ phân tích có thể học các mẫu hành vi giao dịch bình thường của khách hàng và từ đó so sánh với hành vi thực tế để phát hiện các giao dịch lạ hoặc có dấu hiệu gian lận.</li>
                                    <li>&#9900; <span className='underline'>Phân tích đa chiều:</span> Phân tích dữ liệu lớn có thể kết hợp nhiều yếu tố từ nhiều nguồn khác nhau như lịch sử giao dịch, thông tin cá nhân, và hành vi trên mạng xã hội để phát hiện các dấu hiệu tiềm ẩn của hành vi lừa đảo.</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='element'>
                        <p><span>Trí tuệ Nhân tạo (AI) và Học máy (Machine Learning)</span></p>
                        <ul className='sub-element'>
                            <li>+ <span>Trí tuệ nhân tạo (AI)</span> và <span>học máy (machine learning)</span> đang ngày càng được ứng dụng trong các hệ thống chống lừa đảo tài chính, giúp nhận diện và phản ứng với các mối đe dọa một cách tự động và hiệu quả. Các mô hình AI có thể học và cải thiện khả năng phát hiện hành vi lừa đảo theo thời gian.</li>
                            <li>+ <span>Cách thức hoạt động:</span></li>
                            <li>
                                <ul className='sub-element'>
                                    <li>&#9900; <span className='underline'>Phát hiện hành vi gian lận trong thời gian thực:</span> AI có thể sử dụng các thuật toán học máy để phân tích các dữ liệu giao dịch trong thời gian thực và nhận diện các mô hình gian lận tiềm ẩn. Điều này giúp các ngân hàng và tổ chức tài chính can thiệp kịp thời trước khi giao dịch bị hoàn thành.</li>
                                    <li>&#9900; <span className='underline'>Học từ dữ liệu quá khứ:</span> Các hệ thống học máy có thể học từ dữ liệu quá khứ về các vụ lừa đảo tài chính và tìm ra các đặc điểm chung của những vụ việc này. Từ đó, hệ thống sẽ có khả năng tự động phát hiện các dấu hiệu tương tự trong các giao dịch hiện tại.</li>
                                    <li>&#9900; <span className='underline'>Phát hiện gian lận phức tạp:</span> AI có thể phát hiện những vụ lừa đảo phức tạp, chẳng hạn như gian lận thẻ tín dụng, lừa đảo qua các giao dịch trực tuyến hoặc các hành vi mạo danh, qua việc phân tích hàng triệu giao dịch một cách nhanh chóng và chính xác.</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='element'>
                        <p><span>Các ứng dụng và phần mềm bảo mật chống lừa đảo tài chính</span></p>
                        <ul className='sub-element'>
                            <li>+ Có rất nhiều ứng dụng và phần mềm bảo mật được thiết kế đặc biệt để bảo vệ người dùng khỏi các cuộc tấn công lừa đảo tài chính. Các ứng dụng này giúp tăng cường bảo mật thông qua việc mã hóa, xác thực đa yếu tố (2FA), và phát hiện các hành vi đáng ngờ.</li>
                            <li><span>+ Một số ứng dụng và phần mềm bảo mật phổ biến:</span></li>
                            <li>
                                <ul className='sub-element'>
                                    <li><span className='underline'>Phần mềm chống virus và bảo mật:</span> Các phần mềm như <span className='underline'>Norton, McAfee, Kaspersky, Bitdefender</span> giúp phát hiện và ngăn chặn các phần mềm độc hại hoặc virus có thể dùng để tấn công tài khoản ngân hàng và đánh cắp thông tin tài chính.</li>
                                    <li><span className='underline'>Ứng dụng xác thực đa yếu tố (2FA):</span> Các ứng dụng như <span className='underline'>Google Authenticator, Authy, Duo Security</span> giúp cung cấp lớp bảo mật bổ sung khi người dùng đăng nhập vào các tài khoản tài chính hoặc ngân hàng trực tuyến. Xác thực hai yếu tố giúp bảo vệ tài khoản khỏi việc truy cập trái phép, ngay cả khi mật khẩu bị lộ.</li>
                                    <li><span className='underline'>Các ứng dụng chống lừa đảo trực tuyến:</span> Nhiều ngân hàng và tổ chức tài chính hiện nay cung cấp các ứng dụng riêng biệt để phát hiện và ngăn chặn hành vi lừa đảo trực tuyến. Ví dụ, ứng dụng ngân hàng có thể cảnh báo người dùng về các giao dịch đáng ngờ, đồng thời yêu cầu xác nhận thêm trước khi giao dịch được hoàn tất.</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='element'>
                        <ul className='sub-element'> 
                            <li>
                                <ul className='sub-element'>
                                    <li><span className='underline'>Ứng dụng chống phishing:</span> Một số phần mềm bảo mật có khả năng ngăn chặn các cuộc tấn công phishing (lừa đảo qua email, tin nhắn). Chúng có thể quét email và thông báo cho người dùng nếu có dấu hiệu của lừa đảo hoặc trang web giả mạo. Ví dụ như <span className='underline'>PhishTank, Norton Anti-Phishing,</span> hay các tính năng bảo vệ có sẵn trong các trình duyệt như <span className='underline'>Google Chrome</span>.</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
