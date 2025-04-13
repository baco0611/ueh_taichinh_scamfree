import React from 'react'
import title from "./title.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

export default function Law() {
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
                        <p><span>1. Hình phạt cho tội lừa đảo chiếm đoạt tài sản:</span></p>
                        <p>Căn cứ <span className='underline'>Điều 174 Bộ luật Hình sự 2015</span> và <span className='underline'>điểm a, điểm c khoản 3 Điều 2 Luật sửa đổi Bộ luật Hình sự 2017</span> quy định về tội lừa đảo chiếm đoạt tài sản như sau:</p>
                        <ul className='sub-element'>
                            <li>- Người nào bằng thủ đoạn gian dối chiếm đoạt tài sản của người khác trị giá từ 2.000.000 đồng đến dưới 50.000.000 đồng hoặc dưới 2.000.000 đồng nhưng thuộc một trong các trường hợp sau đây, thì bị phạt cải tạo không giam giữ đến 03 năm hoặc phạt tù từ 06 tháng đến 03 năm:</li>
                            <li>
                                <ul className='sub-element'>
                                    <li>+ Đã bị xử phạt vi phạm hành chính về hành vi chiếm đoạt tài sản mà còn vi phạm;</li>
                                    <li>+ Đã bị kết án về tội này hoặc về một trong các tội quy định tại các <span className='underline'>điều 168, 169, 170, 171, 172, 173, 175 và 290</span> của Bộ luật này, chưa được xóa án tích mà còn vi phạm;</li>
                                    <li>+ Gây ảnh hưởng xấu đến an ninh, trật tự, an toàn xã hội;</li>
                                    <li>+ Tài sản là phương tiện kiếm sống chính của người bị hại và gia đình họ;</li>
                                </ul>
                            </li>
                            <li>- Phạm tội thuộc một trong các trường hợp sau đây, thì bị phạt tù từ 02 năm đến 07 năm:</li>
                            <li>
                                <ul className='sub-element'>
                                    <li>+ Có tổ chức;</li>
                                    <li>+ Có tính chất chuyên nghiệp;</li>
                                    <li>+ Chiếm đoạt tài sản trị giá từ 50.000.000 đồng đến dưới 200.000.000 đồng;</li>
                                    <li>+ Tái phạm nguy hiểm;</li>
                                    <li>+ Lợi dụng chức vụ, quyền hạn hoặc lợi dụng danh nghĩa cơ quan, tổ chức;</li>
                                    <li>+ Dùng thủ đoạn xảo quyệt;</li>
                                </ul>
                            </li>
                        </ul>                    
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='element'>
                        <ul className='sub-element'>
                            <li>- Phạm tội thuộc một trong các trường hợp sau đây, thì bị phạt tù từ 07 năm đến 15 năm:</li>
                            <li>
                                <ul className='sub-element'>
                                    <li>+ Chiếm đoạt tài sản trị giá từ 200.000.000 đồng đến dưới 500.000.000 đồng;</li>
                                    <li>+ Lợi dụng thiên tai, dịch bệnh.</li>
                                </ul>
                            </li>
                            <li>- Phạm tội thuộc một trong các trường hợp sau đây, thì bị phạt tù từ 12 năm đến 20 năm hoặc tù chung thân:</li>
                            <li>
                                <ul className='sub-element'>
                                    <li>+ Chiếm đoạt tài sản trị giá 500.000.000 đồng trở lên;</li>
                                    <li>+ Lợi dụng hoàn cảnh chiến tranh, tình trạng khẩn cấp.</li>
                                    <li>+ Người phạm tội còn có thể bị phạt tiền từ 10.000.000 đồng đến 100.000.000 đồng, cấm đảm nhiệm chức vụ, cấm hành nghề hoặc làm công việc nhất định từ 01 năm đến 05 năm hoặc tịch thu một phần hoặc toàn bộ tài sản.</li>
                                </ul>
                            </li>
                        </ul>
                        <br/>
                        <p><span>2. Trình báo hành vi lừa đảo chiếm đoạt tài sản:</span></p>
                        <p>- Căn cứ <span className='underline'>Điều 144 Bộ luật Tố tụng hình sự 2015</span> có quy định như sau:</p>
                        <ul className='sub-element'>
                            <li>+ Tố giác về tội phạm là việc cá nhân phát hiện và tố cáo hành vi có dấu hiệu tội phạm với cơ quan có thẩm quyền.</li>
                            <li>+ Tin báo về tội phạm là thông tin về vụ việc có dấu hiệu tội phạm do cơ quan, tổ chức, cá nhân thông báo với cơ quan có thẩm quyền hoặc thông tin về tội phạm trên phương tiện thông tin đại chúng.</li>
                            <li>+ Kiến nghị khởi tố là việc cơ quan nhà nước có thẩm quyền kiến nghị bằng văn bản và gửi kèm theo chứng cứ, tài liệu liên quan cho Cơ quan điều tra, Viện kiểm sát có thẩm quyền xem xét, xử lý vụ việc có dấu hiệu tội phạm.</li>
                            <li>+ Tố giác, tin báo về tội phạm có thể bằng lời hoặc bằng văn bản.</li>
                            <li>+ Người nào cố ý tố giác, báo tin về tội phạm sai sự thật thì tuỳ tính chất, mức độ vi phạm mà bị xử lý kỷ luật, xử phạt vi phạm hành chính hoặc bị truy cứu trách nhiệm hình sự theo quy định của luật.</li>
                        </ul>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='element'>
                        <p>- Căn cứ <span className='underline'>khoản 2 Điều 145 Bộ luật Tố tụng hình sự 2015</span> quy định về trách nhiệm tiếp nhận và thẩm quyền giải quyết tố giác, tin báo về tội phạm, kiến nghị khởi tố như sau:</p>
                        <ul className='sub-element'>
                            <li>+ Cơ quan, tổ chức có trách nhiệm tiếp nhận tố giác, tin báo về tội phạm, kiến nghị khởi tố gồm:</li>
                            <li>+ Cơ quan điều tra, Viện kiểm sát tiếp nhận tố giác, tin báo về tội phạm, kiến nghị khởi tố;</li>
                        </ul>
                        <p>- Cơ quan, tổ chức khác tiếp nhận tố giác, tin báo về tội phạm.</p>
                        <p>- Thẩm quyền giải quyết tố giác, tin báo về tội phạm, kiến nghị khởi tố:</p>
                        <ul className='sub-element'>
                            <li>+ Cơ quan điều tra giải quyết tố giác, tin báo về tội phạm, kiến nghị khởi tố theo thẩm quyền điều tra của mình;</li>
                            <li>+ Cơ quan được giao nhiệm vụ tiến hành một số hoạt động điều tra giải quyết tố giác, tin báo về tội phạm theo thẩm quyền điều tra của mình;</li>
                            <li>+ Viện kiểm sát giải quyết tố giác, tin báo về tội phạm, kiến nghị khởi tố trong trường hợp phát hiện Cơ quan điều tra, cơ quan được giao nhiệm vụ tiến hành một số hoạt động điều tra có vi phạm pháp luật nghiêm trọng trong hoạt động kiểm tra, xác minh tố giác, tin báo về tội phạm, kiến nghị khởi tố hoặc có dấu hiệu bỏ lọt tội phạm mà Viện kiểm sát đã yêu cầu bằng văn bản nhưng không được khắc phục.</li>
                        </ul> 
                        <p>Đồng thời căn cứ <span className='underline'>Điều 5 Thông tư liên tịch 01/2017/TTLT-BCA-BQP-BTC-BNN&PTNT-VKSNDTC</span> có quy định về trách nhiệm tiếp nhận, thẩm quyền giải quyết tố giác, tin báo về tội phạm như sau:</p>
                        <ul className='sub-element'>
                            <li>+ Các cơ quan, tổ chức có trách nhiệm tiếp nhận tố giác, tin báo về tội phạm;</li>
                            <li>+ Cơ quan điều tra;</li>
                            <li>+ Cơ quan được giao nhiệm vụ tiến hành một số hoạt động điều tra;</li>
                            <li>+ Viện kiểm sát các cấp;</li>
                            <li>+ Các cơ quan, tổ chức quy định tại <span className='underline'>điểm b khoản 2 Điều 145 Bộ luật Tố tụng hình sự năm 2015</span> gồm: Công an xã, phường, thị trấn, Đồn Công an, Trạm Công an; Tòa án các cấp; Cơ quan báo chí và các cơ quan, tổ chức khác.</li>
                        </ul>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='element'>
                        <p>Thẩm quyền giải quyết tố giác, tin báo về tội phạm:</p>
                        <ul className='sub-element'>
                            <li>+ Các cơ quan quy định tại <span className='underline'>điểm a, điểm b khoản 1</span> Điều này, trừ Đội An ninh ở Công an huyện, quận, thị xã, thành phố thuộc tỉnh, thành phố thuộc thành phố trực thuộc Trung ương (sau đây viết gọn là Đội An ninh Công an cấp huyện) có thẩm quyền giải quyết tố giác, tin báo về tội phạm theo thẩm quyền điều tra của mình.</li>
                            <li>+ Viện kiểm sát giải quyết tố giác, tin báo về tội phạm trong trường hợp phát hiện Cơ quan điều tra, Cơ quan được giao nhiệm vụ tiến hành một số hoạt động điều tra có vi phạm pháp luật nghiêm trọng trong hoạt động kiểm tra, xác minh tố giác, tin báo về tội phạm hoặc có dấu hiệu bỏ lọt tội phạm mà Viện kiểm sát đã yêu cầu bằng văn bản nhưng sau 15 ngày kể từ ngày cơ quan đang thụ lý, giải quyết tố giác, tin báo về tội phạm nhận văn bản yêu cầu mà không được khắc phục.</li>
                        </ul>
                        <p>- Căn cứ <span className='underline'>khoản 4 Điều 163 Bộ luật Tố tụng hình sự 2015</span> quy định về thẩm quyền điều tra như sau: Cơ quan điều tra có thẩm quyền điều tra những vụ án hình sự mà tội phạm xảy ra trên địa phận của mình. Trường hợp tội phạm được thực hiện tại nhiều nơi khác nhau hoặc không xác định được địa điểm xảy ra tội phạm thì việc điều tra thuộc thẩm quyền của Cơ quan điều tra nơi phát hiện tội phạm, nơi bị can cư trú hoặc bị bắt.</p>
                        <br/>
                        <p><span>3. Chứng cứ đúng quy định pháp luật:</span></p>
                        <p>Căn cứ <span className='underline'>Điều 87, Điều 89, Điều 99, Điều 100, Điều 101</span> và <span className='underline'>Điều 104 Bộ luật Tố tụng hình sự 2015</span> quy định như sau:</p>
                        <ul className='sub-element'>
                            <li>- Chứng cứ được thu thập, xác định từ các nguồn:</li>
                            <li>
                                <ul className='sub-element'>
                                    <li>+ Vật chứng: là vật được dùng làm công cụ, phương tiện phạm tội, vật mang dấu vết tội phạm, vật là đối tượng của tội phạm, tiền hoặc vật khác có giá trị chứng minh tội phạm và người phạm tội hoặc có ý nghĩa trong việc giải quyết vụ án.</li>
                                    <li>+ Dữ liệu điện tử: là ký hiệu, chữ viết, chữ số, hình ảnh, âm thanh hoặc dạng tương tự được tạo ra, lưu trữ, truyền đi hoặc nhận được bởi phương tiện điện tử; Dữ liệu điện tử được thu thập từ phương tiện điện tử, mạng máy tính, mạng viễn thông, trên đường truyền và các nguồn điện tử khác.</li>
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
                                    <li>+ Lời khai, lời trình bày;</li>
                                    <li>+ Kết luận giám định: là văn bản do cá nhân hoặc cơ quan, tổ chức giám định lập để kết luận chuyên môn về những vấn đề được trưng cầu, yêu cầu giám định.</li>
                                    <li>+ Kết luận định giá tài sản: là văn bản do Hội đồng định giá tài sản lập để kết luận về giá của tài sản được yêu cầu.</li>
                                    <li>+ Biên bản trong hoạt động khởi tố, điều tra, truy tố, xét xử, thi hành án;</li>
                                    <li>+ Kết quả thực hiện ủy thác tư pháp và hợp tác quốc tế khác;</li>
                                    <li>+ Các tài liệu, đồ vật khác: những tình tiết liên quan đến vụ án ghi trong tài liệu, đồ vật do cơ quan, tổ chức, cá nhân cung cấp có thể được coi là chứng cứ. Trường hợp tài liệu, đồ vật này có đặc điểm quy định tại <span className='underline'>Điều 89 Bộ luật Tố tụng hình sự 2015</span> thì được coi là vật chứng.</li>
                                </ul>
                            </li>
                            <li>- Những gì có thật nhưng không được thu thập theo trình tự, thủ tục do <span className='underline'>Bộ luật Tố tụng hình sự 2015</span> quy định thì không có giá trị pháp lý và không được dùng làm căn cứ để giải quyết vụ án hình sự.</li>
                        </ul>
                        <p>Nguồn: <a href='https://thuvienphapluat.vn/phap-luat/bi-lua-dao-chiem-doat-tai-san-phai-di-dau-trinh-bao-can-mang-theo-nhung-bang-chung-gi-va-su-dung-nh-2351.html' target='_blank'>https://thuvienphapluat.vn/phap-luat/bi-lua-dao-chiem-doat-tai-san-phai-di-dau-trinh-bao-can-mang-theo-nhung-bang-chung-gi-va-su-dung-nh-2351.html</a></p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
