const contentData = [
    {
        image: null,
        source: null,
        title: "Combo du lịch giá rẻ",
        content: "Giá quá rẻ so với thị trường, yêu cầu thanh toán trước 100%, thông tin liên hệ không rõ ràng và không có địa chỉ văn phòng cụ thể."
    },
    {
        image: null,
        source: null,
        title: "Sử dụng công nghệ Deepfake, Deepvoice để giả mạo khuôn mặt hoặc giọng nói trong các cuộc gọi video",
        content: "Sử dụng công nghệ giả mạo khuôn mặt hoặc giọng nói, hình ảnh và âm thanh không khớp, thường yêu cầu cung cấp thông tin cá nhân hoặc chuyển tiền."
    },
    {
        image: 3,
        source: "VTV.vn",
        title: "Giả mạo biên lai chuyển tiền thành công",
        content: "Cung cấp biên lai mờ, thông tin giao dịch không chính xác và gây áp lực để bạn giao hàng hoặc hoàn tiền trước khi xác minh."
    },
    {
        image: 4,
        source: "Tạp chí điện tử Thông tin và Truyền thông",
        title: "Giả danh giáo viên/nhân viên y tế báo người thân đang cấp cứu",
        content: "Gọi điện thông báo tình trạng khẩn cấp với giọng điệu hối thúc, yêu cầu chuyển tiền gấp nhưng không cung cấp thông tin cụ thể như bệnh viện hoặc phòng khám."
    },
    {
        image: null,
        source: null,
        title: "Tuyển người mẫu nhí",
        content: "Yêu cầu đóng các khoản phí như chụp ảnh hoặc đặt cọc, hứa hẹn thu nhập cao và lợi ích không thực tế."
    },
    {
        image: null,
        source: null,
        title: "Thông báo “khóa sim” vì chưa chuẩn hóa thuê bao",
        content: "Gửi tin nhắn từ số lạ, yêu cầu nhấn vào đường link giả mạo hoặc cung cấp thông tin cá nhân để tránh bị khóa sim."
    },
    {
        image: null,
        source: null,
        title: "Giả danh công ty tài chính",
        content: "Mời gọi vay vốn nhanh với lãi suất thấp nhưng yêu cầu cung cấp thông tin nhạy cảm như căn cước công dân, số tài khoản hoặc mã OTP."
    },
    {
        image: 8,
        source: "Cục An toàn thông tin",
        title: "Cài cắm ứng dụng, link quảng cáo, cờ bạc, tín dụng đen",
        content: "Cài đặt ứng dụng không có trên các chợ ứng dụng chính thống, yêu cầu quyền truy cập bất thường vào thông tin cá nhân hoặc tài khoản ngân hàng."
    },
    {
        image: null,
        source: null,
        title: "Giả mạo trang thông tin điện tử, cơ quan, doanh nghiệp",
        content: "Sử dụng các đường link giả mạo gần giống trang web chính thống, nội dung gây hoang mang và yêu cầu hành động gấp rút như cập nhật thông tin hoặc nộp phạt."
    },
    {
       image: 10,
       source: "Tạp chí Thị trường Tài chính Tiền tệ.",
       title: "Giả mạo SMS Brandname, phát tán tin nhắn giả mạo",
       content: "Gửi tin nhắn mạo danh tổ chức uy tín, chứa đường link lạ với nội dung khuyến mãi, trúng thưởng hoặc yêu cầu xác thực tài khoản."
    },
    {
        image: 11,
        source: null,
        title: "Lừa đảo đầu tư chứng khoán, tiền ảo, đa cấp",
        content: "Cam kết lợi nhuận cao bất thường, thông tin về dự án hoặc công ty không rõ ràng và thường áp lực bạn đầu tư ngay lập tức."
    },
    {
        image: 12,
        source: "Báo Quân đội nhân dân",
        title: "Lừa đảo tuyển cộng tác viên online",
        content: "Hứa hẹn công việc nhẹ, thu nhập cao nhưng yêu cầu đóng phí tham gia hoặc không minh bạch về hợp đồng và thông tin công ty."
    },
    {
        image: null,
        source: null,
        title: "Đánh cắp tài khoản MXH, nhắn tin lừa đảo",
        content: "Thay đổi mật khẩu bất thường, tin nhắn lạ từ bạn bè yêu cầu chuyển tiền hoặc click vào link lạ, hoạt động lạ trên tài khoản."
    },
    {
        image: 14,
        source: "Tạp chí Công Thương",
        title: "Giả danh cơ quan công an, viện kiểm sát, tòa án gọi điện lừa đảo",
        content: "Mạo danh những người có thẩm quyền đe dọa, yêu cầu chuyển tiền vào tài khoản cá nhân."
    },
    {
        image: 15,
        source: "Chuyên Tư Vấn Luật Long Phan PMT 	",
        title: "Rao bán hàng giả, hàng nhái trên sàn thương mại điện tử",
        content: "Giá quá rẻ bất thường, hình ảnh sản phẩm chất lượng kém, thông tin sản phẩm thiếu chi tiết, đánh giá từ người mua không rõ ràng."
    },
    {
        image: null,
        source: null,
        title: "Đánh cắp thông tin CCCD, đi vay nợ tín dụng",
        content: "Nếu bạn nhận được thông báo nợ từ các tổ chức tín dụng mà mình không hề vay, hoặc phát hiện các giao dịch bất thường trên tài khoản."
    },
    {
        image: 17,
        source: null,
        title: "Lừa đảo chuyển nhầm tiền vào tài khoản ngân hàng",
        content: "Nhận được thông báo chuyển nhầm tiền vào tài khoản, kèm theo yêu cầu trả lại gấp và đe dọa."
    },
    {
        image: null,
        source: null,
        title: "Dịch vụ lấy lại tiền khi đã bị lừa",
        content: "Trả thêm phí dịch vụ, không có đảm bảo hoàn lại tiền, và thường yêu cầu cung cấp thông tin cá nhân."
    },
    {
        image: null,
        source: null,
        title: "Đánh cắp telegram OTP",
        content: "Giả mạo thành người quen, cơ quan chức năng hoặc gửi tin nhắn giả mạo yêu cầu cung cấp mã OTP với lý do xác minh tài khoản, khôi phục mật khẩu."
    },
    {
        image: null,
        source: null,
        title: "Tung tin giả về cuộc gọi mất tiền FLASHAI",
        content: "FlashAI là một dịch vụ gọi điện tự động, thường được sử dụng để quảng cáo hoặc thông báo. Kẻ gian lợi dụng cuộc gọi để đánh cắp thông tin hoặc lôi kéo vào các giao dịch gian lận."
    },
    {
        image: null,
        source: null,
        title: "Dịch vụ lấy lại tài khoản FACEBOOK",
        content: "Lợi dụng việc khôi phục lại tài khoản, kẻ gian thường yêu cầu cung cấp thông tin cá nhân hoặc chuyển khoản trước."
    },
    {
        image: null,
        source: null,
        title: "Rải link PHISHING, SEEDING quảng cáo bẩn trên MXH",
        content: "Các đường link không uy tín, cung cấp các tin giật gân hay quảng cáo ưu đãi."
    },
    {
        image: null,
        source: null,
        title: "Cho đánh số đề",
        content: "Hứa hẹn trúng thưởng cao, chắc chắn, yêu cầu chuyển khoản trước."
    },
    {
        image: 24,
        source: "LuatVietnam",
        title: "Bẫy tình cảm, đầu tư tài chính, gửi bưu kiện, trúng thưởng",
        content: "Đối phương liên tục yêu cầu hỗ trợ tài chính hay hứa hẹn về những phần thưởng, lợi nhuận cao."
    }
]
  

const tiktokVideo = {

}

export  {
    contentData
}