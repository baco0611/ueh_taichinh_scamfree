import React from 'react'
import "./Handbook.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import title from "./img/title.png"
import contentList from "./img/contentList.png"
import signPrevent from "./img/signPrevent.png"
import onlineExample from "./img/onlineExample.png"
import { contentData } from "./data"
import ContentListElement from './ContentListElement';
import OnlineExample from './OnlineExample';

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
                            <li>- <span>KHÔNG</span> cung cấp thông tin cá nhân, địa chỉ, số điện thoại, số tài khoản ngân hàng của mình cho đối tượng không quen biết; thận trọng rà soát và kiểm tra kỹ thông tin trước khi thực hiện các giao dịch chuyển tiền.</li>
                            <li>- <span>KHÔNG</span> truy cập, đăng nhập vào các đường dẫn, liên kết, website, ứng dụng hoặc mở tệp đính kèm đến từ người gửi không xác định, không rõ nguồn gốc.</li>
                            <li>- <span>KHÔNG</span> cán bộ cơ quan nhà nước, bộ công an, viện kiểm sát, tòa án hay đơn vị tài chính… nào gọi điện để điều tra qua điện thoại, yêu cầu cung cấp thông tin cá nhân hay đóng tiền. </li>
                            <li>- <span>KHÔNG</span> tham lam tài sản, món quà không rõ nguồn gốc có thể nhận được một cách dễ dàng, những lợi nhuận “phi thực tế” mà không tốn sức lao động, những lời mời chào, dụ dỗ “việc nhẹ lương cao”...</li>
                            <li>- <span>KHÔNG</span> thực hiện các giao dịch tài chính hoặc nhập thông tin bảo mật khi bạn đang kết nối vào mạng Wifi công cộng, vì nó có thể không an toàn và dễ dàng bị tấn công. Hãy sử dụng mạng riêng hoặc kết nối qua mạng di động khi thực hiện các giao dịch tài chính quan trọng.</li>
                            <li>- <span>KHÔNG</span> tải và cài đặt các phần mềm hoặc ứng dụng không rõ nguồn gốc hoặc không có chứng chỉ bảo mật. Các phần mềm này có thể chứa virus hoặc phần mềm gián điệp, giúp kẻ lừa đảo truy cập vào thông tin tài chính và tài khoản của bạn.</li>
                            <li>- <span>KHÔNG</span> cung cấp mã OTP (mã xác thực) gửi qua tin nhắn điện thoại hoặc email cho bất kỳ ai, dù họ tự xưng là nhân viên ngân hàng hoặc tổ chức tài chính. Các tổ chức này không bao giờ yêu cầu bạn cung cấp mã OTP qua các kênh không bảo mật.</li>
                            <li>- <span>KHÔNG</span> thực hiện chuyển khoản trước, tuyệt đối không đặt cọc, chuyển tiền cho các đối tượng lạ trong bất cứ trường hợp nào.</li>
                            <li>- <span>KHÔNG</span> sử dụng mật khẩu dễ đoán như ngày sinh, tên hoặc các thông tin cá nhân để bảo vệ tài khoản ngân hàng và các tài khoản tài chính khác. Cũng không nên dùng chung một mật khẩu cho nhiều tài khoản. Thay vào đó, sử dụng mật khẩu phức tạp, kết hợp chữ hoa, chữ thường, số và ký tự đặc biệt để tăng cường bảo mật.</li>
                            <li>- <span>KHÔNG</span> tham gia vào các nhóm kín hoặc diễn đàn trực tuyến không rõ nguồn gốc mà yêu cầu bạn cung cấp thông tin cá nhân hoặc tài chính. Các nhóm này có thể chứa các hoạt động lừa đảo hoặc môi giới giao dịch tài chính không minh bạch.</li>
                        </ul>
                    </div>
                    <div className='element'>
                        <h3>HƯỚNG DẪN XỬ LÝ</h3>
                        <ul>
                            <li><span>1. Giữ bình tĩnh và trấn an bản thân:</span> Hãy bình tĩnh và hít thở sâu để tránh bị kẻ lừa đảo lợi dụng tâm lý hoảng loạn rồi đưa ra quyết định vội vàng. Đồng thời hãy nhớ rằng kể cả người có kinh nghiệm cũng có thể là nạn nhân của lừa đảo, vì vậy đừng tự trách bản thân mà hãy tập trung suy nghĩ cách giải quyết vấn đề.</li>
                            <li><span>2. Ngừng ngay mọi liên lạc, giao dịch với kẻ lừa đảo và thay đổi mật khẩu:</span> Dừng ngay mọi liên lạc và giao dịch với kẻ lừa đảo, tuyệt đối không chuyển thêm tiền dù họ có hứa hẹn điều gì. Cụ thể:</li>
                            <li>
                                <ul className='sub-element'>
                                    <li>- <span>Thẻ tín dụng/Thẻ ghi nợ:</span> Liên hệ với ngân hàng để yêu cầu đóng băng mọi giao dịch;</li>
                                    <li>- <span>Thẻ quà tặng:</span> Liên hệ nhà cung cấp để khóa thẻ;</li>
                                    <li>- <span>Ứng dụng lừa đảo:</span> Gỡ bỏ ứng dụng và báo cáo với nhà cung cấp/nhà phát triển chính thức ứng dụng;</li>
                                    <li>- <span>Tiền điện tử:</span> Báo cáo với nền tảng hoặc công ty bạn đang gửi vì tiền điện tử không thể thu hồi;</li>
                                    <li>- <span>Tiền mặt:</span> Nếu bạn gửi qua thư hoặc chuyển phát, lập tức liên hệ dịch vụ chuyển phát và chặn gói hàng (nếu có thể);</li>
                                    <li>- <span>Chuyển khoản trái phép:</span> Liên hệ ngân hàng để đóng băng tài khoản và giao dịch. Sau đó lập tức thay đổi ngay các mật khẩu liên quan (mật khẩu ngân hàng, email, và các tài khoản tài chính khác).</li>
                                </ul>
                            </li>
                            <li><FontAwesomeIcon icon={faTriangleExclamation} /> Lưu ý, đây là những điều bạn cần phải làm trong trường hợp kẻ lừa đảo đã truy cập vào máy tính hoặc điện thoại của bạn:</li>
                            <li>
                                <ul className='sub-element'>
                                    <li>- Ngắt kết nối Wifi;</li>
                                    <li>- Với máy tính, bạn hãy cập nhật phần mềm bảo mật và quét virus toàn bộ thiết bị. Sau đó xóa mọi ứng dụng, phần mềm được xác định là có vấn đề;</li>
                                    <li>- Với điện thoại, bạn hãy báo cáo với nhà cung cấp dịch vụ điện thoại và yêu cầu phần mềm bảo mật, quét vi-rút. Sau đó thay đổi mật khẩu, mã pin, chặn và xóa các ứng dụng nghi ngờ lừa đảo;</li>
                                    <li>- Liên hệ các chuyên gia công nghệ hoặc bạn học giỏi công nghệ để trực tiếp kiểm tra thiết bị của bạn.</li>
                                </ul>
                            </li>
                            <li><span>3. Thu thập và bảo quản bằng chứng:</span> Ngay sau đó, bạn cần lưu giữ các bằng chứng liên quan đến hành vi lừa đảo bao gồm: màn hình tin nhắn, thời gian, số tiền, tài khoản nhận, nội dung giao dịch và đoạn ghi âm cuộc gọi (nếu có). Điều này giúp đẩy nhanh tiến độ điều tra và tăng cơ hội lấy lại tài sản đã mất.</li>
                            <li><span>4. Báo cáo ngay cho cơ quan chức năng:</span> Sau khi thu thập bằng chứng, bạn cần trình báo với các đơn vị có thẩm quyền bao gồm Phòng An ninh mạng và phòng, chống tội phạm sử dụng công nghệ cao (PA05) tại địa phương; Cục An ninh mạng và Phòng chống tội phạm sử dụng công nghệ cao (A05); hoặc Cục Cảnh sát hình sự (C02) trực thuộc Bộ Công An cùng với các bằng chứng đã thu thập.</li>
                            <li><span>5. Cảnh báo người thân, bạn bè và các ứng dụng, nền tảng:</span> Để tránh việc kẻ lừa đảo lợi dụng thông tin, tài khoản của bạn nhằm chiếm đoạt tài sản của người thân và bạn bè, bạn cần nhanh chóng thông báo cho họ về hành vi trên. Đồng thời, báo cáo vụ việc lên các dịch vụ tài chính để họ can thiệp vào hành vi lừa đảo.</li>
                        </ul>
                    </div>
                    <div className='element'>
                        <h3>HƯỚNG DẪN VỀ CÁCH BÁO CÁO CÁC VỤ LỪA ĐẢO CHO CÁC CƠ QUAN CHỨC NĂNG, NGÂN HÀNG, HOẶC TỔ CHỨC TÀI CHÍNH</h3>

                        <p>Xác định sơ bộ mức độ nghiêm trọng của vụ việc lừa đảo và thu thập chứng cứ báo lên cơ quan có thẩm quyền, ta có thể báo cáo vụ việc bằng cách:</p>
                        <ul>
                            <li></li>
                            <li><span>1. Tố cáo qua đơn:</span></li>
                            <li>Trước khi gửi đơn tố cáo đến các cơ quan chức năng có thẩm quyền bằng đường bưu điện thì phải đảm bảo cấu trúc lá đơn đầy đủ các phần sau: </li>
                            <li>
                                <ul className='sub-element'>
                                    <li>&bull; Thông tin của người tố cáo;</li>
                                    <li>&bull; Thông tin về đối tượng bị tố cáo;</li>
                                    <li>&bull; Mô tả hành vi vi phạm pháp luật;</li>
                                    <li>&bull; Yêu cầu của người tố cáo;</li>
                                    <li>&bull; Cách thức liên hệ.</li>
                                </ul>
                            </li>
                            <li></li>
                            <li><span>2. Tố cáo trực tiếp:</span></li>
                            <li>Nếu bạn muốn báo cáo vụ việc lừa đảo tài chính qua mạng, bạn có thể trực tiếp đến các cơ quan chức năng hoặc ngân hàng gần nhất để trình bày vụ việc và yêu cầu xử lý.</li>
                            <li></li>
                            <li><span>3. Tố cáo qua điện thoại:</span></li>
                            <li>Bạn có thể báo cáo vụ việc lừa đảo qua đường dây nóng của Công an hoặc các cơ quan chức năng chuyên trách để được hướng dẫn và hỗ trợ kịp thời. Tra cứu số điện thoại Công an các địa phương bằng cách truy cập <span><a href='bocongan.gov.vn' target='_blank'>bocongan.gov.vn</a></span>, chọn mục Hướng dẫn tố giác tội phạm phía bên phải màn hình. Tại đây, bộ công an đã cập nhật danh sách các cơ quan công an tiếp nhận, giải quyết tố giác, tin báo về tội phạm và kiến nghị khởi tố trên toàn quốc để người dân dễ dàng theo dõi. </li>
                            <li></li>
                        </ul>
                    </div>
                    <div className='element'>
                        <h3>CƠ QUAN & TỔ CHỨC HỖ TRỢ</h3>
                        <p><span>1. Cơ quan Công an:</span></p>
                        <li className='contact'>
                            <div className='block'>
                                <p><span>Cục cảnh sát Hình sự (C02):</span> Chịu trách nhiệm điều tra các vụ án hình sự, bao gồm các vụ lừa đảo chiếm đoạt tài sản.</p>
                                <ul>
                                    <li>- Hotline: 0692348560</li>
                                </ul>
                            </div>
                            <div className='block'>
                                <p><span>Cục An ninh mạng và Phòng, chống tội phạm sử dụng công nghệ cao (A05):</span> Chuyên trách điều tra các vụ lừa đảo qua mạng và tội phạm công nghệ cao.</p>
                                <ul>
                                    <li>- Hotline: 0593.505.999</li>
                                    <li>- Thư điện tử: contact@nca.gov.vn</li>
                                </ul>
                            </div>
                            <div className='block' style={{gridColumn: "1 / -1"}}>
                                <p><span>Công an địa phương:</span> Tại mỗi tỉnh, thành phố, Phòng Cảnh sát Hình sự (PC02) và Phòng An ninh mạng và Phòng, chống tội phạm sử dụng công nghệ cao (PA05) thuộc Công an tỉnh/thành phố chịu trách nhiệm điều tra các vụ lừa đảo trên địa bàn.</p>
                            </div>
                        </li>

                        <p></p>
                        <p></p>
                        <p><span>2. Cục An toàn thông tin:</span> Hỗ trợ cảnh báo, ngăn chặn website/ứng dụng lừa đảo tài chính; tiếp nhận phản ánh, hướng dẫn xử lý khi bị lừa đảo và phối hợp với cơ quan chức năng để điều tra; tuyên truyền nâng cao nhận thức và kỹ năng phòng tránh lừa đảo mạng.</p>
                        <ul className='sub-element'>
                            <li>Hotline: 024.32096789</li>
                            <li>Website: <span><a href='https://ais.gov.vn/' target='_blank'>https://ais.gov.vn/</a></span></li>
                        </ul>
                        <p></p>
                        <p><span>3. Cổng thông tin điện tử Bộ công an:</span> Cung cấp thông tin chính thống về hoạt động, chính sách và các dịch vụ công trực tuyến của Bộ Công an.</p>
                        <ul className='sub-element'>
                            <li>Hotline: 069.2343647</li>
                            <li>Website: <span><a href='www.bocongan.gov.vn' target='_blank'>www.bocongan.gov.vn</a></span></li>
                        </ul>
                        <p></p>
                        <p><span>4. Hiệp hội an toàn thông tin Việt Nam (VNISA):</span> thúc đẩy phát triển an toàn thông tin qua nghiên cứu, đào tạo, tư vấn, tổ chức sự kiện và hợp tác trong nước, quốc tế.</p>
                        <ul className='sub-element'>
                            <li>Hotline: 02462901028</li>
                            <li>Website: <span><a href='https://vnisa.org.vn/' target='_blank'>https://vnisa.org.vn/</a></span></li>
                        </ul>
                    </div>
                    <div className='element'>
                        <h3>LUẬT PHÁP VÀ QUY ĐỊNH</h3>

                        <p><span>1. Hình phạt cho tội lừa đảo chiếm đoạt tài sản:</span></p>
                        <p>Căn cứ <span>Điều 174 Bộ luật Hình sự 2015</span> và <span>điểm a, điểm c khoản 3 Điều 2 Luật sửa đổi Bộ luật Hình sự 2017</span> quy định về tội lừa đảo chiếm đoạt tài sản như sau:</p>
                        <p>- Người nào bằng thủ đoạn gian dối chiếm đoạt tài sản của người khác trị giá từ 2.000.000 đồng đến dưới 50.000.000 đồng hoặc dưới 2.000.000 đồng nhưng thuộc một trong các trường hợp sau đây, thì bị phạt cải tạo không giam giữ đến 03 năm hoặc phạt tù từ 06 tháng đến 03 năm:</p>
                        <ul className='sub-element'>
                            <li>+ Đã bị xử phạt vi phạm hành chính về hành vi chiếm đoạt tài sản mà còn vi phạm;</li>
                            <li>+ Đã bị kết án về tội này hoặc về một trong các tội quy định tại các <span>điều 168, 169, 170, 171, 172, 173, 175 và 290</span> của Bộ luật này, chưa được xóa án tích mà còn vi phạm;</li>
                            <li>+ Gây ảnh hưởng xấu đến an ninh, trật tự, an toàn xã hội;</li>
                            <li>+ Tài sản là phương tiện kiếm sống chính của người bị hại và gia đình họ;</li>
                        </ul>
                        <p>- Phạm tội thuộc một trong các trường hợp sau đây, thì bị phạt tù từ 02 năm đến 07 năm:</p>
                        <ul className='sub-element'>
                            <li>+ Có tổ chức;</li>
                            <li>+ Có tính chất chuyên nghiệp;</li>
                            <li>+ Chiếm đoạt tài sản trị giá từ 50.000.000 đồng đến dưới 200.000.000 đồng;</li>
                            <li>+ Tái phạm nguy hiểm;</li>
                            <li>+ Lợi dụng chức vụ, quyền hạn hoặc lợi dụng danh nghĩa cơ quan, tổ chức;</li>
                            <li>+ Dùng thủ đoạn xảo quyệt;</li>
                        </ul>
                        <p>- Phạm tội thuộc một trong các trường hợp sau đây, thì bị phạt tù từ 07 năm đến 15 năm:</p>
                        <ul className='sub-element'>
                            <li>+ Chiếm đoạt tài sản trị giá từ 200.000.000 đồng đến dưới 500.000.000 đồng;</li>
                            <li>+ Lợi dụng thiên tai, dịch bệnh.</li>
                        </ul>
                        <p>- Phạm tội thuộc một trong các trường hợp sau đây, thì bị phạt tù từ 12 năm đến 20 năm hoặc tù chung thân:</p>
                        <ul className='sub-element'>
                            <li>+ Chiếm đoạt tài sản trị giá 500.000.000 đồng trở lên;</li>
                            <li>+ Lợi dụng hoàn cảnh chiến tranh, tình trạng khẩn cấp.</li>
                        </ul>
                        <p>Người phạm tội còn có thể bị phạt tiền từ 10.000.000 đồng đến 100.000.000 đồng, cấm đảm nhiệm chức vụ, cấm hành nghề hoặc làm công việc nhất định từ 01 năm đến 05 năm hoặc tịch thu một phần hoặc toàn bộ tài sản.</p>
                    
                        <p></p>
                        <p><span>2. Trình báo hành vi lừa đảo chiếm đoạt tài sản:</span></p>
                        <p>Căn cứ <span>Điều 144 Bộ luật Tố tụng hình sự 2015</span> có quy định như sau:</p>  
                        <ul className='sub-element'>
                            <li>- Tố giác về tội phạm là việc cá nhân phát hiện và tố cáo hành vi có dấu hiệu tội phạm với cơ quan có thẩm quyền.</li>
                            <li>- Tin báo về tội phạm là thông tin về vụ việc có dấu hiệu tội phạm do cơ quan, tổ chức, cá nhân thông báo với cơ quan có thẩm quyền hoặc thông tin về tội phạm trên phương tiện thông tin đại chúng.</li>
                            <li>- Kiến nghị khởi tố là việc cơ quan nhà nước có thẩm quyền kiến nghị bằng văn bản và gửi kèm theo chứng cứ, tài liệu liên quan cho Cơ quan điều tra, Viện kiểm sát có thẩm quyền xem xét, xử lý vụ việc có dấu hiệu tội phạm.</li>
                            <li>- Tố giác, tin báo về tội phạm có thể bằng lời hoặc bằng văn bản.</li>
                            <li>- Người nào cố ý tố giác, báo tin về tội phạm sai sự thật thì tuỳ tính chất, mức độ vi phạm mà bị xử lý kỷ luật, xử phạt vi phạm hành chính hoặc bị truy cứu trách nhiệm hình sự theo quy định của luật.</li>
                        </ul>
                        <p>Căn cứ <span>khoản 2 Điều 145 Bộ luật Tố tụng hình sự 2015</span> quy định về trách nhiệm tiếp nhận và thẩm quyền giải quyết tố giác, tin báo về tội phạm, kiến nghị khởi tố như sau:</p>
                        <ul className='sub-element'>
                            <li>- Cơ quan, tổ chức có trách nhiệm tiếp nhận tố giác, tin báo về tội phạm, kiến nghị khởi tố gồm:</li>
                            <li>- Cơ quan điều tra, Viện kiểm sát tiếp nhận tố giác, tin báo về tội phạm, kiến nghị khởi tố;</li>
                            <li>- Cơ quan, tổ chức khác tiếp nhận tố giác, tin báo về tội phạm.</li>
                            <li>- Thẩm quyền giải quyết tố giác, tin báo về tội phạm, kiến nghị khởi tố:</li>
                            <li>
                                <ul className='sub-element'>
                                    <li>+ Cơ quan điều tra giải quyết tố giác, tin báo về tội phạm, kiến nghị khởi tố theo thẩm quyền điều tra của mình;</li>
                                    <li>+ Cơ quan được giao nhiệm vụ tiến hành một số hoạt động điều tra giải quyết tố giác, tin báo về tội phạm theo thẩm quyền điều tra của mình;</li>
                                    <li>+ Viện kiểm sát giải quyết tố giác, tin báo về tội phạm, kiến nghị khởi tố trong trường hợp phát hiện Cơ quan điều tra, cơ quan được giao nhiệm vụ tiến hành một số hoạt động điều tra có vi phạm pháp luật nghiêm trọng trong hoạt động kiểm tra, xác minh tố giác, tin báo về tội phạm, kiến nghị khởi tố hoặc có dấu hiệu bỏ lọt tội phạm mà Viện kiểm sát đã yêu cầu bằng văn bản nhưng không được khắc phục.</li>
                                </ul>
                            </li>
                            <li>- Đồng thời căn cứ <span>Điều 5 Thông tư liên tịch 01/2017/TTLT-BCA-BQP-BTC-BNN&PTNT-VKSNDTC</span> có quy định về trách nhiệm tiếp nhận, thẩm quyền giải quyết tố giác, tin báo về tội phạm như sau:</li>
                            <li>
                                <ul className='sub-element'>
                                    <li>+ Các cơ quan, tổ chức có trách nhiệm tiếp nhận tố giác, tin báo về tội phạm;</li>
                                    <li>+ Cơ quan điều tra;</li>
                                    <li>+ Cơ quan được giao nhiệm vụ tiến hành một số hoạt động điều tra;</li>
                                    <li>+ Viện kiểm sát các cấp;</li>
                                    <li>+ Các cơ quan, tổ chức quy định tại <span>điểm b khoản 2 Điều 145 Bộ luật Tố tụng hình sự năm 2015</span> gồm: Công an xã, phường, thị trấn, Đồn Công an, Trạm Công an; Tòa án các cấp; Cơ quan báo chí và các cơ quan, tổ chức khác.</li>
                                </ul>
                            </li>
                            <li>- Thẩm quyền giải quyết tố giác, tin báo về tội phạm:</li>
                            <li>
                                <ul className='sub-element'>
                                    <li>+ Các cơ quan quy định tại <span>điểm a, điểm b khoản 1</span> Điều này, trừ Đội An ninh ở Công an huyện, quận, thị xã, thành phố thuộc tỉnh, thành phố thuộc thành phố trực thuộc Trung ương (sau đây viết gọn là Đội An ninh Công an cấp huyện) có thẩm quyền giải quyết tố giác, tin báo về tội phạm theo thẩm quyền điều tra của mình.</li>
                                    <li>+ Viện kiểm sát giải quyết tố giác, tin báo về tội phạm trong trường hợp phát hiện Cơ quan điều tra, Cơ quan được giao nhiệm vụ tiến hành một số hoạt động điều tra có vi phạm pháp luật nghiêm trọng trong hoạt động kiểm tra, xác minh tố giác, tin báo về tội phạm hoặc có dấu hiệu bỏ lọt tội phạm mà Viện kiểm sát đã yêu cầu bằng văn bản nhưng sau 15 ngày kể từ ngày cơ quan đang thụ lý, giải quyết tố giác, tin báo về tội phạm nhận văn bản yêu cầu mà không được khắc phục.</li>
                                </ul>
                            </li>
                        </ul>
                        <p>Căn cứ <span>khoản 4 Điều 163 Bộ luật Tố tụng hình sự 2015</span> quy định về thẩm quyền điều tra như sau:</p>
                        <ul className='sub-element'>
                            <li>- Cơ quan điều tra có thẩm quyền điều tra những vụ án hình sự mà tội phạm xảy ra trên địa phận của mình. Trường hợp tội phạm được thực hiện tại nhiều nơi khác nhau hoặc không xác định được địa điểm xảy ra tội phạm thì việc điều tra thuộc thẩm quyền của Cơ quan điều tra nơi phát hiện tội phạm, nơi bị can cư trú hoặc bị bắt. </li>
                        </ul>
                        <p></p>
                        <p><span>3. Chứng cứ đúng quy định pháp luật: </span></p>
                        <p>Căn cứ Điều 87, Điều 89, Điều 99, Điều 100, Điều 101 và Điều 104 Bộ luật Tố tụng hình sự 2015 quy định như sau:</p>
                        <ul className='sub-element'>
                            <li>- Chứng cứ được thu thập, xác định từ các nguồn:</li>
                            <li>
                                <ul className='sub-element'>
                                    <li>+ Vật chứng: là vật được dùng làm công cụ, phương tiện phạm tội, vật mang dấu vết tội phạm, vật là đối tượng của tội phạm, tiền hoặc vật khác có giá trị chứng minh tội phạm và người phạm tội hoặc có ý nghĩa trong việc giải quyết vụ án.</li>
                                    <li>+ Lời khai, lời trình bày;</li>
                                    <li>+ Dữ liệu điện tử: là ký hiệu, chữ viết, chữ số, hình ảnh, âm thanh hoặc dạng tương tự được tạo ra, lưu trữ, truyền đi hoặc nhận được bởi phương tiện điện tử; Dữ liệu điện tử được thu thập từ phương tiện điện tử, mạng máy tính, mạng viễn thông, trên đường truyền và các nguồn điện tử khác.</li>
                                    <li>+ Kết luận giám định: là văn bản do cá nhân hoặc cơ quan, tổ chức giám định lập để kết luận chuyên môn về những vấn đề được trưng cầu, yêu cầu giám định.</li>
                                    <li>+ Kết luận định giá tài sản: là văn bản do Hội đồng định giá tài sản lập để kết luận về giá của tài sản được yêu cầu.</li>
                                    <li>+ Biên bản trong hoạt động khởi tố, điều tra, truy tố, xét xử, thi hành án;</li>
                                    <li>+ Kết quả thực hiện ủy thác tư pháp và hợp tác quốc tế khác;</li>
                                    <li>+ Các tài liệu, đồ vật khác: những tình tiết liên quan đến vụ án ghi trong tài liệu, đồ vật do cơ quan, tổ chức, cá nhân cung cấp có thể được coi là chứng cứ. Trường hợp tài liệu, đồ vật này có đặc điểm quy định tại Điều 89 Bộ luật Tố tụng hình sự 2015 thì được coi là vật chứng.</li>
                                </ul>
                            </li>
                            <li>- Những gì có thật nhưng không được thu thập theo trình tự, thủ tục do Bộ luật Tố tụng hình sự 2015 quy định thì không có giá trị pháp lý và không được dùng làm căn cứ để giải quyết vụ án hình sự.</li>
                        </ul>
                    </div>
                    <div className='element'>
                        <h3>CÔNG NGHỆ CHỐNG LỪA ĐẢO TÀI CHÍNH</h3>

                        <p><span>1. Phân tích Dữ liệu Lớn (Big Data) trong phát hiện hành vi lừa đảo</span></p>
                        <p><span>Phân tích dữ liệu lớn</span> là công nghệ sử dụng các thuật toán và công cụ mạnh mẽ để xử lý và phân tích lượng dữ liệu khổng lồ, từ đó nhận diện các mẫu hành vi bất thường và có thể liên quan đến lừa đảo. Các tổ chức tài chính và ngân hàng có thể áp dụng phân tích dữ liệu lớn để theo dõi và phân tích hành vi giao dịch của người dùng trong thời gian thực.</p>
                        <p><span>Cách thức hoạt động:</span></p>
                        <ul className='sub-element'>
                            <li>- <span>Phát hiện giao dịch bất thường:</span> Các hệ thống phân tích dữ liệu lớn có thể phát hiện những thay đổi đột ngột trong hành vi giao dịch của người dùng, ví dụ như giao dịch lớn, giao dịch ở địa điểm không thường xuyên hoặc chuyển tiền qua các quốc gia có tỷ lệ lừa đảo cao.</li>
                            <li>- <span>Theo dõi mẫu hành vi:</span> Các công cụ phân tích có thể học các mẫu hành vi giao dịch bình thường của khách hàng và từ đó so sánh với hành vi thực tế để phát hiện các giao dịch lạ hoặc có dấu hiệu gian lận.</li>
                            <li>- <span>Phân tích đa chiều:</span> Phân tích dữ liệu lớn có thể kết hợp nhiều yếu tố từ nhiều nguồn khác nhau như lịch sử giao dịch, thông tin cá nhân, và hành vi trên mạng xã hội để phát hiện các dấu hiệu tiềm ẩn của hành vi lừa đảo.</li>
                        </ul>

                        <p></p>
                        <p><span>2. Trí tuệ Nhân tạo (AI) và Học máy (Machine Learning)</span></p>
                        <p><span>Trí tuệ nhân tạo (AI)</span> và <span>học máy (machine learning)</span> đang ngày càng được ứng dụng trong các hệ thống chống lừa đảo tài chính, giúp nhận diện và phản ứng với các mối đe dọa một cách tự động và hiệu quả. Các mô hình AI có thể học và cải thiện khả năng phát hiện hành vi lừa đảo theo thời gian.</p>
                        <p><span>Cách thức hoạt động:</span></p>
                        <ul className='sub-element'>
                            <li>- <span>Phát hiện hành vi gian lận trong thời gian thực:</span> AI có thể sử dụng các thuật toán học máy để phân tích các dữ liệu giao dịch trong thời gian thực và nhận diện các mô hình gian lận tiềm ẩn. Điều này giúp các ngân hàng và tổ chức tài chính can thiệp kịp thời trước khi giao dịch bị hoàn thành.</li>
                            <li>- <span>Học từ dữ liệu quá khứ:</span> Các hệ thống học máy có thể học từ dữ liệu quá khứ về các vụ lừa đảo tài chính và tìm ra các đặc điểm chung của những vụ việc này. Từ đó, hệ thống sẽ có khả năng tự động phát hiện các dấu hiệu tương tự trong các giao dịch hiện tại.</li>
                            <li>- <span>Phát hiện gian lận phức tạp:</span> AI có thể phát hiện những vụ lừa đảo phức tạp, chẳng hạn như gian lận thẻ tín dụng, lừa đảo qua các giao dịch trực tuyến hoặc các hành vi mạo danh, qua việc phân tích hàng triệu giao dịch một cách nhanh chóng và chính xác.</li>
                        </ul>

                        <p></p>
                        <p><span>3. Các ứng dụng và phần mềm bảo mật chống lừa đảo tài chính</span></p>
                        <p>Có rất nhiều ứng dụng và phần mềm bảo mật được thiết kế đặc biệt để bảo vệ người dùng khỏi các cuộc tấn công lừa đảo tài chính. Các ứng dụng này giúp tăng cường bảo mật thông qua việc mã hóa, xác thực đa yếu tố (2FA), và phát hiện các hành vi đáng ngờ.</p>
                        <p><span>Cách thức hoạt động:</span></p>
                        <ul className='sub-element'>
                            <li>- <span>Phần mềm chống virus và bảo mật:</span> Các phần mềm như <span>Norton, McAfee, Kaspersky, Bitdefender</span> giúp phát hiện và ngăn chặn các phần mềm độc hại hoặc virus có thể dùng để tấn công tài khoản ngân hàng và đánh cắp thông tin tài chính.</li>
                            <li>- <span>Ứng dụng xác thực đa yếu tố (2FA):</span> Các ứng dụng như <span>Google Authenticator, Authy, Duo Security</span> giúp cung cấp lớp bảo mật bổ sung khi người dùng đăng nhập vào các tài khoản tài chính hoặc ngân hàng trực tuyến. Xác thực hai yếu tố giúp bảo vệ tài khoản khỏi việc truy cập trái phép, ngay cả khi mật khẩu bị lộ.</li>
                            <li>- <span>Các ứng dụng chống lừa đảo trực tuyến:</span> Nhiều ngân hàng và tổ chức tài chính hiện nay cung cấp các ứng dụng riêng biệt để phát hiện và ngăn chặn hành vi lừa đảo trực tuyến. Ví dụ, ứng dụng ngân hàng có thể cảnh báo người dùng về các giao dịch đáng ngờ, đồng thời yêu cầu xác nhận thêm trước khi giao dịch được hoàn tất.</li>
                            <li>- <span>Ứng dụng chống phishing:</span> Một số phần mềm bảo mật có khả năng ngăn chặn các cuộc tấn công phishing (lừa đảo qua email, tin nhắn). Chúng có thể quét email và thông báo cho người dùng nếu có dấu hiệu của lừa đảo hoặc trang web giả mạo. Ví dụ như <span>PhishTank, Norton Anti-Phishing</span>, hay các tính năng bảo vệ có sẵn trong các trình duyệt như <span>Google Chrome</span>.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='online-example wrapper'>
                <img className='title' src={onlineExample}/>
                <div className='content'>
                    <OnlineExample/>
                {/* {
                    tiktokVideo.map((element, index) => {
                        return <TiktokElement
                            key={index}
                            information={element}
                        />
                    })
                } */}
                </div>
            </div>
        </div>
    )
}
