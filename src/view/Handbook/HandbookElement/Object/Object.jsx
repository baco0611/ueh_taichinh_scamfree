import React from 'react'
import title from "./title.png"

export default function Object() {
    return (
        <div className='sub-content'>
            <img className='title' src={title}/>

            <div className='element'>
                <p>Các hình thức lừa đảo trên không gian mạng ngày càng tinh vi và phổ biến, nhắm vào nhiều nhóm đối tượng khác nhau, bao gồm người cao tuổi, sinh viên, nhân viên văn phòng và nhiều đối tượng khác.</p>
                <p>Đối với <span>người cao tuổi</span>, thủ đoạn thường là giả mạo cuộc gọi từ ngân hàng hoặc cơ quan nhà nước, yêu cầu cung cấp thông tin cá nhân hoặc mã xác thực.</p>
                <p>Đối với <span>sinh viên</span>, các kẻ lừa đảo thường sử dụng chiêu thức khuyến mãi ảo, trò chơi trúng thưởng hoặc hứa hẹn công việc hấp dẫn để lấy thông tin và tiền bạc. </p>
                <p>Trong khi đó, <span>nhân viên văn phòng</span> thường là mục tiêu của các thư mạo danh từ đối tác hoặc các trò lừa đảo liên quan đến tài chính.</p>
                <p>&rarr; Mỗi nhóm đối tượng ở từng độ tuổi khác nhau, kẻ xấu sẽ thực hiện những phương thức dẫn dụ khác nhau, tuy nhiên mục tiêu chung là để lấy lòng tin, từ đó dễ dàng đánh cắp thông tin người dùng, cuối cùng là chiếm đoạt tài sản.</p>
            </div>
        </div>
    )
}
