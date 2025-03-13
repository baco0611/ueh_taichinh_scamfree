import React from 'react'
import "./Handbook.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import title from "./img/title.png"
import contentList from "./img/contentList.png"
import signPrevent from "./img/signPrevent.png"
import rightSign from "./img/rightSign.png"
import onlineExample from "./img/onlineExample.png"
import { contentData, tiktokVideo } from "./data"
import ContentListElement from './ContentListElement';
import { Link } from 'react-router-dom';
import TiktokElement from './TiktokElement';

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
                    <div className='element'>
                        <h3>ĐỐI TƯỢNG MỤC TIÊU TRONG CÁC VỤ LỪA ĐẢO</h3>
                        <p>Các hình thức lừa đảo trên không gian mạng ngày càng tinh vi và phổ biến, nhắm vào nhiều nhóm đối tượng khác nhau, bao gồm người cao tuổi, sinh viên, nhân viên văn phòng và nhiều đối tượng khác.</p>
                        <p>Đối với <span>người cao tuổi</span>, thủ đoạn thường là giả mạo cuộc gọi từ ngân hàng hoặc cơ quan nhà nước, yêu cầu cung cấp thông tin cá nhân hoặc mã xác thực.</p>
                        <p>Đối với <span>sinh viên</span>, các kẻ lừa đảo thường sử dụng chiêu thức khuyến mãi ảo, trò chơi trúng thưởng hoặc hứa hẹn công việc hấp dẫn để lấy thông tin và tiền bạc. </p>
                        <p>Trong khi đó, <span>nhân viên văn phòng</span> thường là mục tiêu của các thư mạo danh từ đối tác hoặc các trò lừa đảo liên quan đến tài chính.</p>
                        <p>&rarr; Mỗi nhóm đối tượng ở từng độ tuổi khác nhau, kẻ xấu sẽ thực hiện những phương thức dẫn dụ khác nhau, tuy nhiên mục tiêu chung là để lấy lòng tin, từ đó dễ dàng đánh cắp thông tin người dùng, cuối cùng là chiếm đoạt tài sản.</p>
                    </div>
                    <div className='element'>
                        <h3>NGUYÊN TẮC AN TOÀN TRƯỚC CÁC HÌNH THỨC LỪA ĐẢO  </h3>
                        <ul>
                            <li>- <span>Không click</span> vào các liên kết lạ, các trang web không rõ nguồn gốc.</li>
                            <li>- <span>Không cung cấp</span> thông tin cá nhân quan trọng như CCCD, số thẻ ngân hàng, mật khẩu, mã OTP.</li>
                            <li>- <span>Không tin</span> vào những lời hứa hẹn về lợi nhuận cao hoặc những cơ hội làm giàu nhanh chóng.</li>
                            <li>- <span>Không chuyển</span> tiền vào tài khoản lạ khi chưa xác minh rõ ràng.</li>
                        </ul>
                    </div>
                    <div className='element'>
                        <h3>HƯỚNG DẪN XỬ LÝ</h3>
                        <ul>
                            <li>- Giữ bình tĩnh và trấn an bản thân.</li>
                            <li>- Lưu lại các bằng chứng để báo cáo cho cơ quan chức năng hỗ trợ và xử lý kịp thời.</li>
                        </ul>
                    </div>
                    <div className='element'>
                        <h3>CÁC TỔ CHỨC HỖ TRỢ KHI GẶP RẮC RỐI</h3>

                        <div className='contact'>
                            <div className='block'>
                                <p><span>Bộ thông tin và truyền thông</span></p>
                                <ul>
                                    <li>- Số điện thoại: 024.3556.3461</li>
                                    <li>- Website: <a target='_blank' href="https://mic.gov.vn/">https://mic.gov.vn/</a></li>
                                </ul>
                            </div>
                            <div className='block'>
                                <p><span>Cổng thông tin hỗ trợ người dùng</span></p>
                                <ul>
                                    <li>- Số điện thoại: 1900.888.655</li>
                                    <li>- Website: <a target='_blank' href="https://ais.gov.vn/">https://ais.gov.vn/</a></li>
                                </ul>
                            </div>
                            <div className='block'>
                                <p><span>Cục An toàn thông tin (AIS)</span></p>
                                <ul>
                                    <li>- Số điện thoại: 024.3209.6789</li>
                                    <li>- Website: <a target='_blank' href="https://ais.gov.vn/">https://ais.gov.vn/</a></li>
                                </ul>
                            </div>
                            <div className='block'>
                                <p><span>Cổng thông tin điện tử Bộ công an</span></p>
                                <ul>
                                    <li>- Số điện thoại: 069.2343647</li>
                                    <li>- Website: <a target='_blank' href="www.bocongan.gov.vn ​​​​​">www.bocongan.gov.vn ​​​​​</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='online-example wrapper'>
                <img className='title' src={onlineExample}/>
                <div className='content'>
                {
                    tiktokVideo.map((element, index) => {
                        return <TiktokElement
                            key={index}
                            information={element}
                        />
                    })
                }
                </div>
            </div>
        </div>
    )
}
