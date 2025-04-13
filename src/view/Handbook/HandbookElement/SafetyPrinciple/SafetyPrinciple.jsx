import React from 'react'
import title from "./title.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

export default function SafetyPrinciple() {
    return (
        <div id='principle' className='sub-content'>
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
                        <p>- <span>KHÔNG</span> cung cấp thông tin cá nhân, địa chỉ, số điện thoại, số tài khoản ngân hàng của mình cho đối tượng không quen biết; thận trọng rà soát và kiểm tra kỹ thông tin trước khi thực hiện các giao dịch chuyển tiền.</p>
                        <p>- <span>KHÔNG</span> truy cập, đăng nhập vào các đường dẫn, liên kết, website, ứng dụng hoặc mở tệp đính kèm đến từ người gửi không xác định, không rõ nguồn gốc.</p>
                        <p>- <span>KHÔNG</span> cán bộ cơ quan nhà nước, bộ công an, viện kiểm sát, tòa án hay đơn vị tài chính… nào gọi điện để điều tra qua điện thoại, yêu cầu cung cấp thông tin cá nhân hay đóng tiền. </p>
                        <p>- <span>KHÔNG</span> tham lam tài sản, món quà không rõ nguồn gốc có thể nhận được một cách dễ dàng, những lợi nhuận “phi thực tế” mà không tốn sức lao động, những lời mời chào, dụ dỗ “việc nhẹ lương cao”...</p>
                        <p>- <span>KHÔNG</span> thực hiện các giao dịch tài chính hoặc nhập thông tin bảo mật khi bạn đang kết nối vào mạng Wifi công cộng, vì nó có thể không an toàn và dễ dàng bị tấn công. Hãy sử dụng mạng riêng hoặc kết nối qua mạng di động khi thực hiện các giao dịch tài chính quan trọng.</p>
                        <p>- <span>KHÔNG</span> thực hiện chuyển khoản trước, tuyệt đối không đặt cọc, chuyển tiền cho các đối tượng lạ trong bất cứ trường hợp nào.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='element'>
                        <p>- <span>KHÔNG</span> tải và cài đặt các phần mềm hoặc ứng dụng không rõ nguồn gốc hoặc không có chứng chỉ bảo mật. Các phần mềm này có thể chứa virus hoặc phần mềm gián điệp, giúp kẻ lừa đảo truy cập vào thông tin tài chính và tài khoản của bạn.</p>
                        <p>- <span>KHÔNG</span> cung cấp mã OTP (mã xác thực) gửi qua tin nhắn điện thoại hoặc email cho bất kỳ ai, dù họ tự xưng là nhân viên ngân hàng hoặc tổ chức tài chính. Các tổ chức này không bao giờ yêu cầu bạn cung cấp mã OTP qua các kênh không bảo mật.</p>
                        <p>- <span>KHÔNG</span> sử dụng mật khẩu dễ đoán như ngày sinh, tên hoặc các thông tin cá nhân để bảo vệ tài khoản ngân hàng và các tài khoản tài chính khác. Cũng không nên dùng chung một mật khẩu cho nhiều tài khoản. Thay vào đó, sử dụng mật khẩu phức tạp, kết hợp chữ hoa, chữ thường, số và ký tự đặc biệt để tăng cường bảo mật.</p>
                        <p>- <span>KHÔNG</span> tham gia vào các nhóm kín hoặc diễn đàn trực tuyến không rõ nguồn gốc mà yêu cầu bạn cung cấp thông tin cá nhân hoặc tài chính. Các nhóm này có thể chứa các hoạt động lừa đảo hoặc môi giới giao dịch tài chính không minh bạch.</p>
                    </div>
                </SwiperSlide>
            </Swiper>

            {/* <div className='element'>
            </div> */}
        </div>
    )
}
