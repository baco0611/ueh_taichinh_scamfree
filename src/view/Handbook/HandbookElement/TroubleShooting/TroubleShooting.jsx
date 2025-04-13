import React from 'react'
import title from "./title.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

export default function TroubleShooting() {
    return (
        <div id='trouble-shooting' className='sub-content'>
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
                        <p>- <span>Giữ bình tĩnh và trấn an bản thân:</span> Hãy bình tĩnh và hít thở sâu để tránh bị kẻ lừa đảo lợi dụng tâm lý hoảng loạn rồi đưa ra quyết định vội vàng. Đồng thời hãy nhớ rằng kể cả người có kinh nghiệm cũng có thể là nạn nhân của lừa đảo, vì vậy đừng tự trách bản thân mà hãy tập trung suy nghĩ cách giải quyết vấn đề.</p>
                        <p>- <span>Ngừng ngay mọi liên lạc, giao dịch với kẻ lừa đảo và thay đổi mật khẩu:</span> Dừng ngay mọi liên lạc và giao dịch với kẻ lừa đảo, tuyệt đối không chuyển thêm tiền dù họ có hứa hẹn điều gì. Cụ thể:</p>
                        <ul className='sub-element'>
                            <li>+ <span>Thẻ tín dụng/Thẻ ghi nợ:</span> Liên hệ với ngân hàng để yêu cầu đóng băng mọi giao dịch;</li>
                            <li>+ <span>Thẻ quà tặng:</span> Liên hệ nhà cung cấp để khóa thẻ;</li>
                            <li>+ <span>Ứng dụng lừa đảo:</span> Gỡ bỏ ứng dụng và báo cáo với nhà cung cấp/nhà phát triển chính thức ứng dụng;</li>
                            <li>+ <span>Tiền điện tử:</span> Báo cáo với nền tảng hoặc công ty bạn đang gửi vì tiền điện tử không thể thu hồi;</li>
                            <li>+ <span>Tiền mặt:</span> Nếu bạn gửi qua thư hoặc chuyển phát, lập tức liên hệ dịch vụ chuyển phát và chặn gói hàng (nếu có thể);</li>
                            <li>+ <span>Chuyển khoản trái phép:</span> Liên hệ ngân hàng để đóng băng tài khoản và giao dịch.</li>
                        </ul>
                        <p>- Sau đó lập tức thay đổi ngay các mật khẩu liên quan (mật khẩu ngân hàng, email, và các tài khoản tài chính khác).</p>
                        <p>- Lưu ý, đây là những điều bạn cần phải làm trong trường hợp kẻ lừa đảo đã truy cập vào máy tính hoặc điện thoại của bạn:</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='element'>
                        <ul className='sub-element'>
                            <li>+ Ngắt kết nối Wifi;</li>
                            <li>+ Với máy tính, bạn hãy cập nhật phần mềm bảo mật và quét virus toàn bộ thiết bị. Sau đó xóa mọi ứng dụng, phần mềm được xác định là có vấn đề ;</li>
                            <li>+ Với điện thoại, bạn hãy báo cáo với nhà cung cấp dịch vụ điện thoại và yêu cầu phần mềm bảo mật, quét vi-rút. Sau đó thay đổi mật khẩu, mã pin, chặn và xóa các ứng dụng nghi ngờ lừa đảo;</li>
                            <li>+ Liên hệ các chuyên gia công nghệ hoặc bạn học giỏi công nghệ để trực tiếp kiểm tra thiết bị của bạn.</li>
                        </ul>
                        <p>- <span>Thu thập và bảo quản bằng chứng:</span> Ngay sau đó, bạn cần lưu giữ các bằng chứng liên quan đến hành vi lừa đảo bao gồm: màn hình tin nhắn, thời gian, số tiền, tài khoản nhận, nội dung giao dịch và đoạn ghi âm cuộc gọi (nếu có). Điều này giúp đẩy nhanh tiến độ điều tra và tăng cơ hội lấy lại tài sản đã mất.</p>
                        <p>- <span>Báo cáo ngay cho cơ quan chức năng:</span> Sau khi thu thập bằng chứng, bạn cần trình báo với các đơn vị có thẩm quyền bao gồm Phòng An ninh mạng và phòng, chống tội phạm sử dụng công nghệ cao (PA05) tại địa phương; Cục An ninh mạng và Phòng chống tội phạm sử dụng công nghệ cao (A05); hoặc Cục Cảnh sát hình sự (C02) trực thuộc Bộ Công An cùng với các bằng chứng đã thu thập.</p>
                        <p>- <span>Cảnh báo người thân, bạn bè và các ứng dụng, nền tảng:</span> Để tránh việc kẻ lừa đảo lợi dụng thông tin, tài khoản của bạn nhằm chiếm đoạt tài sản của người thân và bạn bè, bạn cần nhanh chóng thông báo cho họ về hành vi trên. Đồng thời, báo cáo vụ việc lên các dịch vụ tài chính để họ can thiệp vào hành vi lừa đảo.</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
