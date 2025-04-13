import React from 'react'
import title from "./title.png"

export default function ReportScam() {
    return (
        <div className='sub-content'>
            <img className='title' src={title}/>

            <div className='element'>
                <p>Xác định sơ bộ mức độ nghiêm trọng của vụ việc lừa đảo và thu thập chứng cứ báo lên cơ quan có thẩm quyền, ta có thể báo cáo vụ việc bằng cách:</p>
                <ul className='sub-element'>
                    <li>- <span>Tố cáo qua đơn:</span> Trước khi gửi đơn tố cáo đến các cơ quan chức năng có thẩm quyền bằng đường bưu điện thì phải đảm bảo cấu trúc lá đơn đầy đủ các phần sau:</li>
                    <li>
                        <ul className='sub-element'>
                            <li>+ Thông tin của người tố cáo;</li>
                            <li>+ Thông tin về đối tượng bị tố cáo;</li>
                            <li>+ Mô tả hành vi vi phạm pháp luật;</li>
                            <li>+ Yêu cầu của người tố cáo;</li>
                            <li>+ Cách thức liên hệ.</li>
                        </ul>
                    </li>
                    <li>- <span>Tố cáo trực tiếp:</span> Nếu bạn muốn báo cáo vụ việc lừa đảo tài chính qua mạng, bạn có thể trực tiếp đến các cơ quan chức năng hoặc ngân hàng gần nhất để trình bày vụ việc và yêu cầu xử lý.</li>
                    <li>- <span>Tố cáo qua điện thoại:</span> Bạn có thể báo cáo vụ việc lừa đảo qua đường dây nóng của Công an hoặc các cơ quan chức năng chuyên trách để được hướng dẫn và hỗ trợ kịp thời. Tra cứu số điện thoại Công an các địa phương bằng cách truy cập <a href='bocongan.gov.vn' target='_blank'>bocongan.gov.vn</a>, chọn mục Hướng dẫn tố giác tội phạm phía bên phải màn hình. Tại đây, bộ công an đã cập nhật danh sách các cơ quan công an tiếp nhận, giải quyết tố giác, tin báo về tội phạm và kiến nghị khởi tố trên toàn quốc để người dân dễ dàng theo dõi.</li>
                </ul>
            </div>
        </div>
    )
}
