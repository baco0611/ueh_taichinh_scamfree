const targetObject = [
    "- Các hình thức lừa đảo trên không gian mạng ngày càng tinh vi và phổ biến, nhắm vào nhiều nhóm đối tượng khác nhau, bao gồm người cao tuổi, sinh viên, nhân viên văn phòng và nhiều đối tượng khác.",
    "- Đối với <span>người cao tuổi</span>, thủ đoạn thường là giả mạo cuộc gọi từ ngân hàng hoặc cơ quan nhà nước, yêu cầu cung cấp thông tin cá nhân hoặc mã xác thực.",
    "- Đối với <span>sinh viên</span>, các kẻ lừa đảo thường sử dụng chiêu thức khuyến mãi ảo, trò chơi trúng thưởng hoặc hứa hẹn công việc hấp dẫn để lấy thông tin và tiền bạc.",
    "- Trong khi đó, <span>nhân viên văn phòng</span> thường là mục tiêu của các thư mạo danh từ đối tác hoặc các trò lừa đảo liên quan đến tài chính.",
    "&rarr;  Mỗi nhóm đối tượng ở từng độ tuổi khác nhau, kẻ xấu sẽ thực hiện những phương thức dẫn dụ khác nhau, tuy nhiên mục tiêu chung là để lấy lòng tin, từ đó dễ dàng đánh cắp thông tin người dùng, cuối cùng là chiếm đoạt tài sản.",  
]

const safetyPrinciple = [
    `- <span>KHÔNG</span> cung cấp thông tin cá nhân, địa chỉ, số điện thoại, số tài khoản ngân hàng của mình cho đối tượng không quen biết; thận trọng rà soát và kiểm tra kỹ thông tin trước khi thực hiện các giao dịch chuyển tiền.`,
    `- <span>KHÔNG</span> truy cập, đăng nhập vào các đường dẫn, liên kết, website, ứng dụng hoặc mở tệp đính kèm đến từ người gửi không xác định, không rõ nguồn gốc.`,
    `- <span>KHÔNG</span> cán bộ cơ quan nhà nước, bộ công an, viện kiểm sát, tòa án hay đơn vị tài chính… nào gọi điện để điều tra qua điện thoại, yêu cầu cung cấp thông tin cá nhân hay đóng tiền. `,
    `- <span>KHÔNG</span> tham lam tài sản, món quà không rõ nguồn gốc có thể nhận được một cách dễ dàng, những lợi nhuận “phi thực tế” mà không tốn sức lao động, những lời mời chào, dụ dỗ “việc nhẹ lương cao”...`,
    `- <span>KHÔNG</span> thực hiện các giao dịch tài chính hoặc nhập thông tin bảo mật khi bạn đang kết nối vào mạng Wifi công cộng, vì nó có thể không an toàn và dễ dàng bị tấn công. Hãy sử dụng mạng riêng hoặc kết nối qua mạng di động khi thực hiện các giao dịch tài chính quan trọng.`,
    `- <span>KHÔNG</span> tải và cài đặt các phần mềm hoặc ứng dụng không rõ nguồn gốc hoặc không có chứng chỉ bảo mật. Các phần mềm này có thể chứa virus hoặc phần mềm gián điệp, giúp kẻ lừa đảo truy cập vào thông tin tài chính và tài khoản của bạn.`,
    `- <span>KHÔNG</span> cung cấp mã OTP (mã xác thực) gửi qua tin nhắn điện thoại hoặc email cho bất kỳ ai, dù họ tự xưng là nhân viên ngân hàng hoặc tổ chức tài chính. Các tổ chức này không bao giờ yêu cầu bạn cung cấp mã OTP qua các kênh không bảo mật.`,
    `- <span>KHÔNG</span> thực hiện chuyển khoản trước, tuyệt đối không đặt cọc, chuyển tiền cho các đối tượng lạ trong bất cứ trường hợp nào.`,
    `- <span>KHÔNG</span> sử dụng mật khẩu dễ đoán như ngày sinh, tên hoặc các thông tin cá nhân để bảo vệ tài khoản ngân hàng và các tài khoản tài chính khác. Cũng không nên dùng chung một mật khẩu cho nhiều tài khoản. Thay vào đó, sử dụng mật khẩu phức tạp, kết hợp chữ hoa, chữ thường, số và ký tự đặc biệt để tăng cường bảo mật.`,
    `- <span>KHÔNG</span> tham gia vào các nhóm kín hoặc diễn đàn trực tuyến không rõ nguồn gốc mà yêu cầu bạn cung cấp thông tin cá nhân hoặc tài chính. Các nhóm này có thể chứa các hoạt động lừa đảo hoặc môi giới giao dịch tài chính không minh bạch.`,
]

const troubleShootingGuide = [
    `- <span>Giữ bình tĩnh và trấn an bản thân:</span> Hãy bình tĩnh và hít thở sâu để tránh bị kẻ lừa đảo lợi dụng tâm lý hoảng loạn rồi đưa ra quyết định vội vàng. Đồng thời hãy nhớ rằng kể cả người có kinh nghiệm cũng có thể là nạn nhân của lừa đảo, vì vậy đừng tự trách bản thân mà hãy tập trung suy nghĩ cách giải quyết vấn đề.`,
    `- <span>Ngừng ngay mọi liên lạc, giao dịch với kẻ lừa đảo và thay đổi mật khẩu:</span> Dừng ngay mọi liên lạc và giao dịch với kẻ lừa đảo, tuyệt đối không chuyển thêm tiền dù họ có hứa hẹn điều gì. Cụ thể:`,
    [
        `+ <span>Thẻ tín dụng/Thẻ ghi nợ:</span> Liên hệ với ngân hàng để yêu cầu đóng băng mọi giao dịch;`,
        `+ <span>Thẻ quà tặng:</span> Liên hệ nhà cung cấp để khóa thẻ;`,
        `+ <span>Ứng dụng lừa đảo:</span> Gỡ bỏ ứng dụng và báo cáo với nhà cung cấp/nhà phát triển chính thức ứng dụng;`,
        `+ <span>Tiền điện tử:</span> Báo cáo với nền tảng hoặc công ty bạn đang gửi vì tiền điện tử không thể thu hồi;`,
        `+ <span>Tiền mặt:</span> Nếu bạn gửi qua thư hoặc chuyển phát, lập tức liên hệ dịch vụ chuyển phát và chặn gói hàng (nếu có thể);`,
        `+ <span>Chuyển khoản trái phép:</span> Liên hệ ngân hàng để đóng băng tài khoản và giao dịch.`,
    ],
    `- Sau đó lập tức thay đổi ngay các mật khẩu liên quan (mật khẩu ngân hàng, email, và các tài khoản tài chính khác).`,
    `- Lưu ý, đây là những điều bạn cần phải làm trong trường hợp kẻ lừa đảo đã truy cập vào máy tính hoặc điện thoại của bạn:`,
    [
        `+ Ngắt kết nối Wifi;`,
        `+ Với máy tính, bạn hãy cập nhật phần mềm bảo mật và quét virus toàn bộ thiết bị. Sau đó xóa mọi ứng dụng, phần mềm được xác định là có vấn đề ;`,
        `+ Với điện thoại, bạn hãy báo cáo với nhà cung cấp dịch vụ điện thoại và yêu cầu phần mềm bảo mật, quét vi-rút. Sau đó thay đổi mật khẩu, mã pin, chặn và xóa các ứng dụng nghi ngờ lừa đảo;`,
        `+ Liên hệ các chuyên gia công nghệ hoặc bạn học giỏi công nghệ để trực tiếp kiểm tra thiết bị của bạn.`,
    ],
    `- Thu thập và bảo quản bằng chứng: Ngay sau đó, bạn cần lưu giữ các bằng chứng liên quan đến hành vi lừa đảo bao gồm: màn hình tin nhắn, thời gian, số tiền, tài khoản nhận, nội dung giao dịch và đoạn ghi âm cuộc gọi (nếu có). Điều này giúp đẩy nhanh tiến độ điều tra và tăng cơ hội lấy lại tài sản đã mất.`,
    `- Báo cáo ngay cho cơ quan chức năng: Sau khi thu thập bằng chứng, bạn cần trình báo với các đơn vị có thẩm quyền bao gồm Phòng An ninh mạng và phòng, chống tội phạm sử dụng công nghệ cao (PA05) tại địa phương; Cục An ninh mạng và Phòng chống tội phạm sử dụng công nghệ cao (A05); hoặc Cục Cảnh sát hình sự (C02) trực thuộc Bộ Công An cùng với các bằng chứng đã thu thập.`,
    `- Cảnh báo người thân, bạn bè và các ứng dụng, nền tảng: Để tránh việc kẻ lừa đảo lợi dụng thông tin, tài khoản của bạn nhằm chiếm đoạt tài sản của người thân và bạn bè, bạn cần nhanh chóng thông báo cho họ về hành vi trên. Đồng thời, báo cáo vụ việc lên các dịch vụ tài chính để họ can thiệp vào hành vi lừa đảo.`,
]

const reportScam = [
    `Xác định sơ bộ mức độ nghiêm trọng của vụ việc lừa đảo và thu thập chứng cứ báo lên cơ quan có thẩm quyền, ta có thể báo cáo vụ việc bằng cách:`,
    [
        `- Tố cáo qua đơn: Trước khi gửi đơn tố cáo đến các cơ quan chức năng có thẩm quyền bằng đường bưu điện thì phải đảm bảo cấu trúc lá đơn đầy đủ các phần sau: `,
        `- Tố cáo trực tiếp: Nếu bạn muốn báo cáo vụ việc lừa đảo tài chính qua mạng, bạn có thể trực tiếp đến các cơ quan chức năng hoặc ngân hàng gần nhất để trình bày vụ việc và yêu cầu xử lý.`,
        `- Tố cáo qua điện thoại: Bạn có thể báo cáo vụ việc lừa đảo qua đường dây nóng của Công an hoặc các cơ quan chức năng chuyên trách để được hướng dẫn và hỗ trợ kịp thời. Tra cứu số điện thoại Công an các địa phương bằng cách truy cập bocongan.gov.vn, chọn mục Hướng dẫn tố giác tội phạm phía bên phải màn hình. Tại đây, bộ công an đã cập nhật danh sách các cơ quan công an tiếp nhận, giải quyết tố giác, tin báo về tội phạm và kiến nghị khởi tố trên toàn quốc để người dân dễ dàng theo dõi.`,
    ]
]

