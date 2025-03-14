const contentData = [
    {
        image: 1,
        source: "baotintuc.vn",
        title: "Combo du lịch giá rẻ",
        content: "Giá quá rẻ so với thị trường, yêu cầu thanh toán trước 100%, thông tin liên hệ không rõ ràng và không có địa chỉ văn phòng cụ thể."
    },
    {
        image: 2,
        source: "Báo SÀI GÒN GIẢI PHÓNG",
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
        image: 5,
        source: "Báo Đại biểu Nhân Dân",
        title: "Tuyển người mẫu nhí",
        content: "Yêu cầu đóng các khoản phí như chụp ảnh hoặc đặt cọc, hứa hẹn thu nhập cao và lợi ích không thực tế."
    },
    {
        image: 6,
        source: "Trang Thông Tin Điện Tử Công An Tỉnh Kon Tum",
        title: "Thông báo “khóa sim” vì chưa chuẩn hóa thuê bao",
        content: "Gửi tin nhắn từ số lạ, yêu cầu nhấn vào đường link giả mạo hoặc cung cấp thông tin cá nhân để tránh bị khóa sim."
    },
    {
        image: 7,
        source: "Báo Phụ nữ Việt Nam",
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
        image: 9,
        source: "Báo giáo dục thời đại",
        title: "Giả mạo trang thông tin điện tử, cơ quan, doanh nghiệp",
        content: "Sử dụng các đường link giả mạo gần giống trang web chính thống, nội dung gây hoang mang và yêu cầu hành động gấp rút như cập nhật thông tin hoặc nộp phạt."
    },
    {
       image: 10,
       source: "Tạp chí Thị trường Tài chính Tiền tệ",
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
        image: 13,
        source: "Báo Nhân Dân",
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
        image: 16,
        source: "Chuyển đổi số tỉnh Lai Châu",
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
        image: 18,
        source: "UBND tỉnh Bình Định",
        title: "Dịch vụ lấy lại tiền khi đã bị lừa",
        content: "Trả thêm phí dịch vụ, không có đảm bảo hoàn lại tiền, và thường yêu cầu cung cấp thông tin cá nhân."
    },
    {
        image: 19,
        source: "VnMedia",
        title: "Đánh cắp telegram OTP",
        content: "Giả mạo thành người quen, cơ quan chức năng hoặc gửi tin nhắn giả mạo yêu cầu cung cấp mã OTP với lý do xác minh tài khoản, khôi phục mật khẩu."
    },
    {
        image: 20,
        source: "VOV",
        title: "Tung tin giả về cuộc gọi mất tiền FLASHAI",
        content: "FlashAI là một dịch vụ gọi điện tự động, thường được sử dụng để quảng cáo hoặc thông báo. Kẻ gian lợi dụng cuộc gọi để đánh cắp thông tin hoặc lôi kéo vào các giao dịch gian lận."
    },
    {
        image: 21,
        source: "Báo Nhân Dân",
        title: "Dịch vụ lấy lại tài khoản FACEBOOK",
        content: "Lợi dụng việc khôi phục lại tài khoản, kẻ gian thường yêu cầu cung cấp thông tin cá nhân hoặc chuyển khoản trước."
    },
    {
        image: 22,
        source: "Báo Nhân Dân",
        title: "Rải link PHISHING, SEEDING quảng cáo bẩn trên MXH",
        content: "Các đường link không uy tín, cung cấp các tin giật gân hay quảng cáo ưu đãi."
    },
    {
        image: 23,
        source: "Tạp chí Tài chính",
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
  

const tiktokVideo = [
    {
        image: 1,
        title: "LỪA ĐẢO QUA SPOTIFY",
        url: "https://www.tiktok.com/@cschd.gov.vn/video/7446652947292884232?is_from_webapp=1&sender_device=pc&web_id=7209923524130457089",
        tiktokName: "Cục ANM và PCTP sử dụng CNC",
    },
    {
        image: 2,
        title: "LỪA ĐẢO VAY TIỀN",
        url: "https://www.tiktok.com/@cschd.gov.vn/video/7440108655871069447?is_from_webapp=1&sender_device=pc&web_id=7209923524130457089",
        tiktokName: "Cục ANM và PCTP sử dụng CNC",
    },
    {
        image: 3,
        title: "LỪA ĐẢO VIỆC NHẸ LƯƠNG CAO",
        url: "https://www.tiktok.com/@vtv24news/video/7443828244882771217?is_from_webapp=1&sender_device=pc&web_id=7209923524130457089",
        tiktokName: "VTV24",
    },
    {
        image: 4,
        title: "GIẢ MẠO ỨNG DỤNG CHÍNH PHỦ ĐỂ LỪA ĐẢO",
        url: "https://www.tiktok.com/@vtv24news/video/7253613731060436225",
        tiktokName: "VTV24",
    },
    {
        image: 5,
        title: "GIẢ MẠO SHIPPER LỪA CHUYỂN TIỀN",
        url: "https://www.tiktok.com/@vtv24news/video/7423770623052221716?is_from_webapp=1&sender_device=pc&web_id=7209923524130457089",
        tiktokName: "VTV24",
    },
    {
        image: 6,
        title: "GIẢ SHIPPER LỪA TIỀN, HACK TÀI KHOẢN",
        url: "https://www.tiktok.com/@cshs.37/video/7445291712089541895?is_from_webapp=1&sender_device=pc&web_id=7209923524130457089",
        tiktokName: "Hà Huy Đức",
    },
    {
        image: 7,
        title: "LỪA ĐẢO CỘNG TÁC VIÊN TRÊN SÀN THƯƠNG MẠI ĐIỆN TỬ",
        url: "https://www.tiktok.com/@cshs.37/video/7312685749084736769?is_from_webapp=1&sender_device=pc&web_id=7209923524130457089",
        tiktokName: "Hà Huy Đức",
    },
    {
        image: 8,
        title: "LỪA ĐẢO THI BẰNG LÁI QUA MẠNG XÃ HỘI",
        url: "https://www.tiktok.com/@vtv24news/video/7416001937298033938?is_from_webapp=1&sender_device=pc&web_id=7209923524130457089 ",
        tiktokName: "VTV24",
    },
    {
        image: 9,
        title: "TRUNG TÂM GIA SƯ LỪA ĐẢO THU TIỀN PHÍ NHẬN LỚP",
        url: "https://www.tiktok.com/@vtv24news/video/7431204339777080594?is_from_webapp=1&sender_device=pc&web_id=7209923524130457089",
        tiktokName: "VTV24",
    },
    {
        image: 10,
        title: "LỪA ĐẢO QUA KHUYẾN MÃI, RÒ RỈ THÔNG TIN THẺ TÍN DỤNG",
        url: "https://www.tiktok.com/@vtv24news/video/7427119117750111495?is_from_webapp=1&sender_device=pc&web_id=7209923524130457089",
        tiktokName: "VTV24",
    },
    {
        image: 11,
        title: "MẠO DANH CÔNG TY DU LỊCH ĐỂ LỪA ĐẢO",
        url: "https://vt.tiktok.com/ZSjo4WJh9/",
        tiktokName: "Hà Huy Đức",
    },
    {
        image: 12,
        title: "GIẢ DANH CƠ QUAN ĐIỀU TRA LỪA ĐẢO QUA ĐIỆN THOẠI",
        url: "https://www.tiktok.com/@binhtravel/video/7446257277587213586",
        tiktokName: "Mr Bình Công Ty Du Lịch",
    },
    {
        image: 13,
        title: "MẤT TIỀN VÌ WIFI CÔNG CỘNG",
        url: "https://www.tiktok.com/@thuvienphapluat.vn/video/7439962295578397953",
        tiktokName: "Thư Viện Pháp Luật",
    },
]

export  {
    contentData,
    tiktokVideo
}