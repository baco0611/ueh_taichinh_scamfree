const gameData = {
    round1: [
        {
            id: 1,
            type: "situation",
            title: "ACB Notification",
            datum: "Kính gửi Quý khách, vào lúc 14:32 ngày 07/04/2025, tài khoản của Quý khách ghi nhận giao dịch chuyển tiền 15,000,000 VNĐ. Nếu không thực hiện, vui lòng đăng nhập ngay tại https://acb-banking-shoppng-support.com để xác minh giao dịch.",
            answer: false,
            description: `URL của ngân hàng ACB chính thức phải là "acb.com.vn". Các trang web lạ có đuôi khác thường là phishing giả mạo nhằm đánh cắp thông tin đăng nhập.`,
        },
        {
            id: 2,
            type: "situation",
            title: "VPBank",
            datum: "VPBank thông báo: Kính gửi Quý khách, khoản vay tín chấp của Quý khách sẽ đến kỳ thanh toán vào ngày 15/04/2025. Vui lòng thanh toán qua ứng dụng VPBank NEO để tránh phát sinh phí phạt. Hotline hỗ trợ: 1900545415.",
            answer: true,
            description:
                "Nội dung nhắc thanh toán khoản vay từ ngân hàng chính thức, không yêu cầu đăng nhập link lạ, đúng quy trình nhắc nợ thông thường.",
        },
        {
            id: 3,
            type: "situation",
            title: "MB Bank",
            datum: "Quý khách vui lòng cập nhật thông tin tài khoản trước ngày 10/04/2025 để tránh gián đoạn dịch vụ. Nhấn vào link: http://capnhat-mbbank.vip để hoàn tất thủ tục.",
            answer: false,
            description:
                "Ngân hàng chính thống không yêu cầu cập nhật thông tin qua các link lạ ngoài hệ thống app hoặc website chính thức.",
        },
        {
            id: 4,
            type: "situation",
            title: "Công an TP.HCM",
            datum: "Chúng tôi sẽ gửi giấy mời làm việc trực tiếp qua đường bưu điện hoặc yêu cầu anh/chị đến trụ sở để làm việc. Không yêu cầu xác minh qua điện thoại hoặc chuyển tiền.",
            answer: true,
            description:
                "Cơ quan chức năng chỉ làm việc trực tiếp, không yêu cầu xác thực hay chuyển khoản từ xa.",
        },
        {
            id: 5,
            type: "situation",
            title: "Vinaphone",
            datum: "Anh/chị nhận được yêu cầu cập nhật thông tin thuê bao. Nhấn vào link: http://capnhatsimfree.vn để xác nhận.",
            answer: false,
            description:
                "Link cập nhật thông tin thuê bao không chính thống, sử dụng tên miền không thuộc nhà mạng. Đây là dấu hiệu lừa đảo.",
        },
        {
            id: 6,
            type: "situation",
            title: "BIDV",
            datum: "Kính gửi Quý khách, hệ thống cảnh báo bảo mật của BIDV đã phát hiện đăng nhập trái phép từ IP lạ vào tài khoản xxxx6789 lúc 02:14 ngày 08/04/2025. Để đảm bảo an toàn, vui lòng truy cập ngay https://bidv-verification.com và xác minh trong vòng 60 phút.\n\nHotline hỗ trợ: 1900 9247.",
            answer: false,
            description:
                'Trang web chính thức của BIDV là "bidv.com.vn". Việc yêu cầu xác minh gấp qua đường link lạ là chiêu trò phishing tinh vi, đánh vào tâm lý hoảng loạn của khách hàng.',
        },
        {
            id: 7,
            type: "situation",
            title: "Chi cục thuế",
            datum: "Cục Thuế TP.HCM trân trọng thông báo: Hồ sơ quyết toán thuế năm 2024 của Quý khách phát sinh sai lệch. Để tránh bị phạt chậm nộp, Quý khách vui lòng hoàn tất phí xử lý 850.000 VNĐ theo hướng dẫn tại https://tongcuc-thue.online trước 17h hôm nay.\n\nHotline hỗ trợ: (84-28) 7300 8888.",
            answer: false,
            description:
                'Cơ quan thuế không bao giờ yêu cầu người dân tự chuyển tiền phí xử lý qua link lạ. Thông tin xử lý thuế luôn qua cổng thông tin chính phủ và không dùng tên miền ".online".',
        },
        {
            id: 8,
            type: "short",
            title: "Shopee Mall",
            datum: `email: Cskh.shopee@gmail.com
                    Xin chúc mừng quý khách! Tài khoản của bạn đã may mắn trúng thưởng 01 điện thoại iPhone 15 Pro Max trị giá 40.000.000 VNĐ trong chương trình "Tri ân khách hàng - Siêu sale shopee 2025".
                    Để nhận thưởng, quý khách vui lòng truy cập vào website xác thực thông tin cá nhân tại: http://www.shopee-mall-vn.vip trong vòng 24h kể từ khi nhận được thông báo này.
                    Lưu ý:
                    - Chỉ cần nhập thông tin cơ bản (Họ tên, số điện thoại, địa chỉ).
                    - Thanh toán trước phí vận chuyển 50.000đ để hệ thống xác nhận và gửi quà tận nhà.
                    - Nếu không hoàn tất trong thời gian quy định, phần thưởng sẽ bị hủy và chuyển cho người chơi kế tiếp.
                    Mọi thắc mắc vui lòng liên hệ Hotline: 1900 632343 (miễn phí).
                    Trân trọng,
                    Đội ngũ CSKH Shopee Mall Việt Nam.
                `,
            answer: ["http://www.shopee-mall-vn.vip", "Cskh.shopee@gmail.com"],
            description: `Link lạ http://www.shopee-mall-vn.vip được gài vào tự nhiên, email của các công ty lớn không bao giờ là @gmail.com.
                    Câu chữ đúng kiểu lừa đảo thật: thông báo trúng thưởng bất ngờ + thúc ép thời gian + yêu cầu truy cập link + nộp phí vận chuyển nhỏ.
                    Dùng các từ ngữ như "Tri ân khách hàng", "Quà tặng đỉnh cao" để tăng độ tin tưởng.
                    Link lạ http://www.shopee-mall-vn.vip được gài vào tự nhiên, email của các công ty lớn không bao giờ là @gmail.com
                    Hotline cũng giả mạo cho giống thật.
                `,
        },
        {
            id: 9,
            type: "choice",
            data_type: ["An toàn", "Không an toàn"],
            choice: [
                {
                    content: `Yêu cầu cung cấp mã OTP qua link lạ`,
                    answer: false,
                },
                {
                    content: `Website có chứng chỉ bảo mật 'https'`,
                    answer: true,
                },
                {
                    content: `Giao dịch chỉ qua app chính thức của ngân hàng`,
                    answer: true,
                },
                {
                    content: `Gửi tin nhắn trúng thưởng yêu cầu phí nhận quà`,
                    answer: false,
                },
            ],
        },
        {
            id: 10,
            type: "choice",
            data_type: ["Dấu hiệu Ponzi", "Không phải Ponzi"],
            choice: [
                {
                    content: "Cam kết lợi nhuận cao và ổn định",
                    answer: true,
                },
                {
                    content: "Tuyển người mới để nhận hoa hồng",
                    answer: true,
                },
                {
                    content: "Lợi nhuận từ hoạt động kinh doanh thực tế",
                    answer: false,
                },
                {
                    content: "Công khai báo cáo tài chính kiểm toán",
                    answer: false,
                },
            ],
        },
    ],
    round2: [
        {
            id: 11,
            type: "situation",
            title: "Em họ",
            datum: ` giao diện chat mess hoặc zalo
                "Chị ơi, em gấp lắm. Sáng nay mẹ em bị tai nạn giao thông, đang cấp cứu ở bệnh viện 115, bác sĩ yêu cầu tạm ứng viện phí 15 triệu. Em đang ở bệnh viện mà thẻ ATM lại bị khóa, không rút tiền được. Chị giúp em ứng trước được không, em gửi thông tin tài khoản nè:
                Ngân hàng Vietcombank - 0438765432 - NGUYEN THI LAN ANH.
                Em gửi cả hình CCCD của em cho chị nè cho chắc (đính kèm ảnh).
                Chị chuyển gấp giúp em với, xong em trả lại liền, em đang rối quá 😭."
                `,
            answer: false,
            description: `Đây là thủ đoạn hack tài khoản mạng xã hội (Facebook, Zalo,...) rồi nhắn tin mượn tiền với câu chuyện cấp cứu hoặc tai nạn để tạo áp lực tâm lý. Đối tượng còn gửi hình CCCD giả hoặc tự ghép ảnh để lấy lòng tin.
                Cách kiểm tra: Phải gọi điện/video call trực tiếp xác minh danh tính người thân trước khi chuyển tiền. Tuyệt đối không tin chỉ dựa trên tin nhắn.`,
        },
        {
            id: 12,
            type: "situation",
            title: "Em trai",
            datum: `Chị ơi, em làm mất điện thoại, đang mượn Zalo người khác nhắn nè. Em đang bị công an giữ lại do lỗi vượt đèn đỏ, giờ họ yêu cầu em nộp phạt tại chỗ 1.500.000đ mới cho đi tiếp.
                Chị gửi em gấp qua số tài khoản BIDV 1234567890 - LE THI NGOC TRINH nha.
                Gấp quá chị ơi, em không kịp rút tiền ATM ngoài đường đâu. Em cảm ơn chị nhiều lắm!"`,
            answer: false,
            description: `Không có quy định nộp phạt tại chỗ qua tài khoản cá nhân. Đây là chiêu lừa tinh vi đánh vào tâm lý hoảng loạn, lợi dụng thông tin công an/phạt nguội để ép chuyển khoản.`,
        },
        {
            id: 13,
            type: "situation",
            title: "Em trai",
            datum: `Anh ơi, em bị lừa mất điện thoại rồi, đang mượn nick người khác nhắn đây. Em cần gấp 5 triệu để khóa thẻ ngân hàng và đổi lại điện thoại ngay.
                Anh chuyển gấp cho em vào số tài khoản Techcombank - 1023456789 - NGUYEN VAN NAM nhé.
                Làm ơn anh, em đang loạn quá, vừa mất điện thoại vừa mất luôn ví tiền! Huhu."`,
            answer: false,
            description: `Lợi dụng việc đánh mất điện thoại/ví để tạo cảm giác hoảng loạn, thúc ép người thân chuyển tiền ngay. Cần xác minh bằng cách gọi thẳng số điện thoại cũ.`,
        },
        {
            id: 14,
            type: "short",
            title: "ViettelPay",
            datum: `ViettelPay xin trân trọng thông báo:
                  Quý khách được tặng 1 năm miễn phí Data 4G Viettel vào số điện thoại này.
                  Vui lòng click https://viettelpay-giftcard.com để tải ViettelPay xác nhận và nhận ưu đãi."`,
            answer: ["https://viettelpay-giftcard.com"],
            description: `Domain lạ, không thuộc ViettelPay.vn. ViettelPay chỉ sử dụng domain chính thức thuộc Viettel.`,
        },
        {
            id: 15,
            type: "short",
            title: "Shopee GameCenter",
            datum: `Kính gửi Quý khách,
                  Shopee GameCenter xin thông báo: Đơn hàng #SPX-4478216 của Quý khách đã lọt vào danh sách Khách Hàng May Mắn tháng 4/2025.
                  Phần thưởng: Voucher mua sắm trị giá 5.000.000 VNĐ, có giá trị đến 31/05/2025.
                  Để nhận thưởng, Quý khách vui lòng xác nhận tài khoản tại https://shopee-event-confirm2025.com trước 18h00 ngày 10/04/2025.
                  Nếu cần hỗ trợ thêm, vui lòng liên hệ CSKH qua Telegram: @Shopee_SupportCenter."`,
            answer: [
                "https://shopee-event-confirm2025.com",
                "Telegram: @Shopee_SupportCenter",
            ],
            description: `Shopee chỉ hỗ trợ khách hàng qua ứng dụng hoặc website chính thức. Việc yêu cầu xác nhận qua link lạ và Telegram là dấu hiệu lừa đảo nhằm đánh cắp tài khoản.`,
        },
        {
            id: 16,
            type: "short",
            title: "Tiki",
            datum: `Chúc mừng Quý khách!
                  Tiki xin thông báo: Bạn đã trúng giải thưởng điện thoại iPhone 15 Pro Max trị giá 25 triệu VNĐ từ chương trình "Siêu Sự Kiện Tiki 2025".
                  Để nhận giải, vui lòng chuyển phí xác nhận hồ sơ 1.500.000 VNĐ vào tài khoản Vietcombank số 123456789 để tiến hành giao dịch và nhận quà trong vòng 12h. Sau thời gian này, giải thưởng của Quý khách sẽ bị hủy.
                  Chúng tôi sẽ gửi mã xác nhận ngay sau khi khoản phí được chuyển thành công. Xin vui lòng kiểm tra ngay."`,
            answer: [
                "vui lòng chuyển phí xác nhận hồ sơ",
                "vui lòng chuyển phí",
            ],
            description: `Tiki không yêu cầu khách hàng chuyển phí để nhận giải thưởng. Việc yêu cầu chuyển tiền trước khi nhận giải thưởng là dấu hiệu của một cuộc lừa đảo.`,
        },
        {
            id: 17,
            type: "choice",
            data_type: ["Email hợp lệ", "Email đáng nghi"],
            choice: [
                {
                    content: "support@shopee.vn",
                    answer: true,
                },
                {
                    content: "info@shopee-gift.vn",
                    answer: false,
                },
                {
                    content: "xacnhan@bank-support.com",
                    answer: false,
                },
                {
                    content: "contact@lazada.vn",
                    answer: true,
                },
            ],
        },
        {
            id: 18,
            type: "choice",
            data_type: ["Tình huống nên xác minh", "Tình huống an toàn"],
            choice: [
                {
                    content: "Tin nhắn từ số lạ yêu cầu chuyển tiền gấp",
                    answer: true,
                },
                {
                    content:
                        "Giao dịch OTP yêu cầu xác nhận qua app chính thức",
                    answer: false,
                },
                {
                    content:
                        "Tin nhắn yêu cầu cập nhật tài khoản ngân hàng qua link lạ",
                    answer: true,
                },
                {
                    content: "Thông báo xác nhận đơn hàng từ app mua sắm",
                    answer: false,
                },
            ],
        },
        {
            id: 19,
            type: "choice",
            data_type: ["Link an toàn", "Link nguy hiểm"],
            choice: [
                {
                    content: "http://shopee-voucher-gift.vip",
                    answer: false,
                },
                {
                    content: "https://www.vietcombank.com.vn",
                    answer: true,
                },
                {
                    content: "http://vietcombank-update-info.com",
                    answer: false,
                },
                {
                    content: "https://www.lazada.vn",
                    answer: true,
                },
            ],
        },
        {
            id: 20,
            type: "choice",
            data_type: ["Ứng dụng chính thức", "Ứng dụng đáng nghi"],
            choice: [
                {
                    content: "App Shopee tải từ CH Play",
                    answer: true,
                },
                {
                    content: "App BIDV tải từ App Store",
                    answer: true,
                },
                {
                    content: "App nhận quà từ link rút gọn",
                    answer: false,
                },
                {
                    content: "App banking tải từ trang web lạ",
                    answer: false,
                },
            ],
        },
    ],
    round3: [
        {
            id: 21,
            type: "situation",
            title: "+84 344 682 400",
            datum: `"Em nhờ chị xíu được không? Em đang làm thủ tục đặt lô đất nền, phải chuyển đặt cọc 10 triệu trong vòng 1 tiếng.
                   Nhưng thẻ em hôm nay bị khóa online, chị giúp em ứng trước 10 triệu được không? Đây STK em xài Vietinbank - 7654321098 - PHAM HOANG LONG.
                   Em chụp luôn CMND và giấy hẹn đặt cọc cho chị nè. Gấp cực kỳ luôn á!"`,
            answer: false,
            description: `Hack tài khoản mạng xã hội, dựng chuyện "chốt cọc nhanh" để ép người thân chuyển tiền. Các hình ảnh giấy tờ đính kèm đều có thể làm giả dễ dàng.`,
        },
        {
            id: 22,
            type: "situation",
            title: "Thông báo",
            datum: `"VNPT thông báo: Tài khoản Internet Fiber của Quý khách sẽ bị gián đoạn do chưa hoàn tất thủ tục đồng bộ dữ liệu khách hàng năm 2025. Vui lòng cập nhật thông tin và đóng lệ phí xác thực 200.000 VNĐ tại cổng https://vnpt-support.online trong vòng 24h.`,
            answer: false,
            description: `VNPT không yêu cầu đóng lệ phí xác thực qua trang web không chính thức. Tên miền ".online" rất đáng nghi và không thuộc VNPT.`,
        },
        {
            id: 23,
            type: "situation",
            title: "+84 234 000 888",
            datum: `"MB Bank xin thông báo: Do nhu cầu bảo mật tài khoản, MB sẽ tiến hành xác minh danh tính định kỳ 6 tháng/lần. Quý khách vui lòng đăng nhập vào https://mbbank-verification.com và xác thực trước 18h hôm nay để tránh khóa tài khoản."`,
            answer: false,
            description: `Trang web xác minh phải thuộc tên miền chính thức "mbbank.com.vn". Trang giả "mbbank-verification.com" là phishing tinh vi để lấy tài khoản đăng nhập.`,
        },
        {
            id: 24,
            type: "short",
            title: "Shopee Mall",
            datum: `
                mail: Shopee VN shopee.vn@gmail.com
                Xin chúc mừng quý khách đã được chọn là 1 trong 100 khách hàng may mắn trong chương trình "Tri ân khách hàng – Nhận quà liền tay" từ Shopee Mall.
                Quý khách vui lòng truy cập http://www.shopee-mall-vn.vip và nhập thông tin nhận thưởng để nhận ngay phần quà trị giá 5.000.000 VNĐ, bao gồm tiền mặt và phiếu mua hàng điện tử.
               Lưu ý:
               - Link chỉ có hiệu lực trong 2 giờ kể từ thời điểm nhận được tin nhắn.
               - Quà sẽ được chuyển về ví ShopeePay hoặc tài khoản ngân hàng đã xác minh.
               - Chương trình KHÔNG công bố công khai để tránh nghẽn hệ thống.
               Mọi thắc mắc vui lòng liên hệ hotline 1900.xxx.xxx để được hỗ trợ.`,
            answer: ["http://www.shopee-mall-vn.vip", "shopee.vn@gmail.com"],
            description: `Link lạ http://www.shopee-mall-vn.vip được gài vào tự nhiên, email của các công ty lớn không bao giờ là @gmail.com.`,
        },
        {
            id: 25,
            type: "short",
            title: "Tiki",
            datum: `Chúc mừng!
                Tiki gửi thông báo: Quý khách đã trúng điện thoại iPhone 15 Pro Max trong chương trình "Tiki Super Sale 4.4".
                 Vui lòng chuyển phí hồ sơ 1.200.000 VNĐ vào tài khoản 127849989 tại ACB, chủ tài khoản VO THANH NAM để nhận giải.`,
            answer: [
                "Yêu cầu chuyển phí để nhận thưởng.",
                "Vui lòng chuyển phí",
                "Vui lòng chuyển phí hồ sơ",
            ],
            description: `Tiki không yêu cầu khách hàng chuyển phí nhận giải. Đây là dấu hiệu lừa đảo phổ biến.`,
        },
        {
            id: 26,
            type: "short",
            title: "Momo",
            datum: `Ví điện tử MoMo thông báo Quý khách trúng lì xì 888.000 VNĐ. Để nhận quà, vui lòng đăng nhập tài khoản tại https://momo-event-bonus.com và xác minh thông tin.`,
            answer: ["https://momo-event-bonus.com"],
            description: `MoMo chỉ xác thực và gửi lì xì qua ứng dụng chính thức, không qua website ngoài.`,
        },
        {
            id: 27,
            type: "choice",
            data_type: ["Hành động nên làm", "Hành động không nên làm"],
            choice: [
                {
                    content: `Xác minh thông tin qua tổng đài chính thức`,
                    answer: true,
                },
                {
                    content: `Nhấn vào link lạ trong email không rõ nguồn gốc`,
                    answer: false,
                },
                {
                    content: `Gọi điện xác thực nếu có yêu cầu chuyển tiền`,
                    answer: true,
                },
                {
                    content: `Cung cấp số tài khoản và OTP qua Zalo`,
                    answer: false,
                },
            ],
        },
        {
            id: 28,
            type: "choice",
            data_type: ["Website uy tín", "Website nghi ngờ lừa đảo"],
            choice: [
                {
                    content: `www.shopee.vn`,
                    answer: true,
                },
                {
                    content: `www.lazada.vn`,
                    answer: true,
                },
                {
                    content: `www.trungtamtuvan-vn.vip`,
                    answer: false,
                },
                {
                    content: `www.capnhatsim-free.com`,
                    answer: false,
                },
            ],
        },
        {
            id: 29,
            type: "choice",
            data_type: ["Nội dung xác thực", "Nội dung giả mạo"],
            choice: [
                {
                    content: `Tin nhắn từ ngân hàng yêu cầu giữ bảo mật OTP`,
                    answer: true,
                },
                {
                    content: `Email yêu cầu cập nhật tài khoản qua link lạ`,
                    answer: false,
                },
                {
                    content: `Thông báo chính thức trên website ngân hàng`,
                    answer: true,
                },
                {
                    content: `Lời mời trúng thưởng qua tin nhắn cá nhân`,
                    answer: false,
                },
            ],
        },
        {
            id: 30,
            type: "choice",
            data_type: ["Nội dung xác thực", "Nội dung giả mạo"],
            choice: [
                {
                    content: `Tin nhắn ngân hàng nhắc giữ bảo mật OTP`,
                    answer: true,
                },
                {
                    content: `Email yêu cầu cập nhật thông tin qua link lạ`,
                    answer: false,
                },
                {
                    content: `Thông báo từ app chính thức`,
                    answer: true,
                },
                {
                    content: `Tin nhắn trúng thưởng yêu cầu phí`,
                    answer: false,
                },
            ],
        },
    ],
    round4: [
        {
            id: 31,
            type: "situation",
            title: "Cty Bảo hiểm Bảo Việt",
            datum: `"Công ty Bảo hiểm Bảo Việt kính gửi: Chúc mừng Quý khách đã trúng thưởng chương trình 'Khách hàng may mắn 2025'. Phần thưởng: Gói bảo hiểm nhân thọ trị giá 200 triệu VNĐ. Để xác nhận quyền lợi, vui lòng chuyển phí hồ sơ 500.000 VNĐ vào STK 0123456789 - Bui Van A - tại ACB."
    `,
            answer: false,
            description: `Công ty bảo hiểm chính thống không bao giờ yêu cầu đóng phí để nhận quà trúng thưởng. Đây là chiêu đánh vào lòng tham rất quen thuộc.`,
        },
        {
            id: 32,
            type: "situation",
            title: "MoMo",
            datum: `
            MoMo thông báo: Quý khách nhận được lì xì may mắn 500.000 VNĐ từ chương trình "Đón Lộc Đầu Năm 2025".
            Vui lòng nhấn vào đường link https://momo-giftbonus.com để xác nhận và nhận thưởng trong vòng 24h.`,
            answer: false,
            description: `MoMo chính thức chỉ dùng domain "momo.vn". Các chương trình lì xì luôn yêu cầu xác nhận trực tiếp qua app, không qua đường link bên ngoài.`,
        },
        {
            id: 33,
            type: "situation",
            title: "Techcombank",
            datum: `Techcombank trân trọng thông báo: Tài khoản của Quý khách sẽ tự động cập nhật ưu đãi phí thường niên vào tháng 4/2025. Không cần thực hiện thêm bất kỳ thao tác nào. Tổng đài hỗ trợ: 1800 588 822.`,
            answer: true,
            description: `Đúng quy trình chăm sóc khách hàng, không yêu cầu đăng nhập hoặc xác minh qua link lạ.`,
        },
        {
            id: 34,
            type: "situation",
            title: "SHOPEE",
            datum: `Kính gửi Quý khách,
    Shopee trân trọng thông báo: Đơn hàng #SPX-2456793 của Quý khách tham gia chương trình 'Mua sắm cuối tuần may mắn' đã trúng voucher mua sắm trị giá 2.000.000 VNĐ.
    Vui lòng xác nhận thông tin nhận thưởng bằng cách đăng nhập tại https://shopee-bonus-event2025.com trước 18h00 ngày 10/04/2025 để không mất quyền lợi.
    Xin cám ơn quý khách đã đồng hành cùng Shopee! `,
            answer: false,
            description: `Vexere chỉ xác nhận voucher qua App chính thức Vexere. Link ngoài là dấu hiệu của phishing nhằm lấy cắp thông tin người dùng.`,
        },
        {
            id: 35,
            type: "short",
            title: "Traveloka",
            datum: `Traveloka xin thông báo:
  Quý khách đã nhận được voucher 3 triệu VNĐ dành cho chuyến bay quốc tế từ chương trình “Ưu Đãi Đặc Biệt Traveloka 2025”.
  Để nhận thưởng, vui lòng truy cập đường link https://traveloka-claim-voucher.com và hoàn tất xác minh trong vòng 48h.
  Mọi giao dịch sau thời gian này sẽ không còn giá trị.`,
            answer: ["https://traveloka-claim-voucher.com"],
            description: `Traveloka chỉ xác nhận voucher qua website chính thức traveloka.com. Link ngoài là dấu hiệu của phishing nhằm lấy cắp thông tin người dùng.`,
        },
        {
            id: 36,
            type: "short",
            title: "Grab",
            datum: `Chúc mừng Quý khách đã nhận được voucher giảm giá 500.000 VNĐ từ chương trình "Mừng Xuân Grab 2025".
  Để nhận mã giảm giá, vui lòng truy cập https://grab-reward-2025.com và xác nhận thông tin nhận quà.
  Xin lưu ý: Quý khách chỉ có thể nhận voucher trong vòng 12h sau khi nhận tin nhắn này.`,
            answer: ["https://grab-reward-2025.com"],
            description: `Grab chỉ sử dụng ứng dụng chính thức và website grab.com.vn. Việc sử dụng link lạ là dấu hiệu rõ ràng của phishing.`,
        },
        {
            id: 37,
            type: "short",
            title: "+842347 634 676",
            datum: `Kính gửi Quý khách,
  Chúng tôi xin thông báo: Quý khách đã được lựa chọn tham gia chương trình “Đầu Tư Tiết Kiệm Siêu Lợi Nhuận 2025” với mức lãi suất lên đến 25% mỗi tháng.
  Để bắt đầu đầu tư và nhận lãi suất cao, vui lòng chuyển khoản số tiền tối thiểu 10 triệu VNĐ vào tài khoản số 1345763868 tại Vietcombank Chủ tài khoản: LE THI THANH TAM (giám đốc khu vực của chương trình) trước ngày 15/04/2025.
  Chúng tôi cam kết trả lãi suất đầy đủ sau mỗi tháng. Sau khi chuyển tiền, Quý khách sẽ nhận được thông tin chi tiết về các bước tiếp theo.
  Lưu ý chỉ có những số điện thoại nhận được tin nhắn này mới được tham gia chương trình. Ưu đãi không được phép chuyển nhượng hay mua bán dưới bất kỳ hình thức nào."`,
            answer: [
                "mức lãi suất lên đến 25% mỗi tháng",
                "vui lòng chuyển khoản số tiền tối thiểu 10 triệu VNĐ vào tài khoản",
            ],
            description: `Các chương trình cam kết lãi suất cao một cách bất thường thường là hình thức lừa đảo Ponzi. Các chương trình này không có cơ sở pháp lý và chỉ lấy tiền của người sau để trả cho người trước, không có lợi nhuận thực tế.`,
        },
        {
            id: 38,
            type: "choice",
            data_type: ["Thông báo an toàn", "Thông báo lừa đảo"],
            choice: [
                {
                    content: "Thông báo OTP từ ngân hàng qua SMS",
                    answer: true,
                },
                {
                    content: "Thông báo nhận thưởng từ số lạ yêu cầu phí",
                    answer: false,
                },
                {
                    content: "Tin nhắn nhắc đóng phí dịch vụ qua app",
                    answer: true,
                },
                {
                    content: "Tin nhắn nhận giải thưởng không tham gia",
                    answer: false,
                },
            ],
        },
        {
            id: 39,
            type: "choice",
            data_type: ["Số điện thoại chính thức", "Số điện thoại đáng nghi"],
            choice: [
                {
                    content: "Tổng đài 1900 ngân hàng",
                    answer: true,
                },
                {
                    content: "Số lạ yêu cầu nạp tiền gấp",
                    answer: false,
                },
                {
                    content: "Hotline công ty vận chuyển uy tín",
                    answer: true,
                },
                {
                    content:
                        "Số lạ nhắn yêu cầu chuyển tiền vào tài khoản cá nhân",
                    answer: false,
                },
            ],
        },
        {
            id: 40,
            type: "choice",
            data_type: [
                "Phương thức xác thực an toàn",
                "Phương thức xác thực không an toàn",
            ],
            choice: [
                {
                    content: "Xác thực bằng vân tay qua app ngân hàng",
                    answer: true,
                },
                {
                    content: "Gửi mã OTP cho người khác qua Zalo",
                    answer: false,
                },
                {
                    content: "Xác thực bằng SMS OTP đúng quy trình",
                    answer: true,
                },
                {
                    content: "Nhập mật khẩu vào link lạ",
                    answer: false,
                },
            ],
        },
    ],
    round5: [
        {
            id: 41,
            type: "situation",
            title: "Techcombank",
            datum: `Techcombank thông báo: Tài khoản tiết kiệm số 01234567 của Quý khách đã đến kỳ tái tục vào ngày 10/04/2025. Nếu Quý khách không có yêu cầu khác, số tiền gốc và lãi sẽ được tự động tái tục theo kỳ hạn cũ. Mọi thắc mắc vui lòng liên hệ tổng đài 1800 588 822.`,
            answer: true,
            description: `Thông báo này hoàn toàn đúng quy trình ngân hàng: không có yêu cầu cung cấp thông tin cá nhân, không dẫn link lạ, tổng đài chuẩn Techcombank.`,
        },
        {
            id: 42,
            type: "situation",
            title: "+86 2384 467 894",
            datum: `Công ty Cổ phần Đầu tư Tài chính Việt Nam (VIF) xin thông báo: Tài khoản đầu tư của Quý khách hiện đang bị giới hạn rút vốn do thay đổi quy định pháp lý. Để mở khóa tài khoản, Quý khách vui lòng nộp phí quản lý hồ sơ 2.000.000 VNĐ vào tài khoản 0099887766 - Ngân hàng TechcomBank trước 20h hôm nay.`,
            answer: false,
            description: `Các công ty đầu tư không yêu cầu nộp phí để mở khóa tài khoản cá nhân theo kiểu chuyển khoản tay ba. Đây là dấu hiệu rõ ràng của lừa đảo tài chính.`,
        },
        {
            id: 43,
            type: "situation",
            title: "ZALO",
            datum: `Thông báo từ Trung tâm Chăm sóc Khách hàng ZaloPay: Do yêu cầu đồng bộ hóa dữ liệu định kỳ năm 2025, Quý khách cần đăng nhập vào cổng xác minh https://zalopay-veri-check.com để tiếp tục sử dụng dịch vụ. Vui lòng thực hiện trong vòng 24h để tránh gián đoạn giao dịch.`,
            answer: false,
            description: `ZaloPay chính thức chỉ sử dụng domain "zalopay.vn". Trang web có domain lạ hoặc thêm hậu tố "veri-check" là phishing giả mạo nhằm lấy cắp thông tin đăng nhập ví điện tử.`,
        },
        {
            id: 44,
            type: "short",
            title: "MOMO",
            datum: `Chúc mừng Quý khách đã nhận được 500.000 VNĐ từ chương trình "Lì Xì MoMo Tết 2025".
  Để nhận quà, Quý khách vui lòng truy cập vào đường link https://momo-reward2025.com và hoàn tất đăng nhập tài khoản MoMo trong vòng 24h kể từ khi nhận được thông báo này.
  Nếu Quý khách không xác nhận thông tin trong thời gian trên, phần thưởng sẽ bị hủy. Để nhận hỗ trợ thêm, Quý khách vui lòng liên hệ với đội ngũ CSKH qua Telegram: @MoMoSupport2025.`,
            answer: [`https://momo-reward2025.com`],
            description: `MoMo chỉ thông báo và yêu cầu xác minh qua ứng dụng chính thức, không bao giờ yêu cầu đăng nhập qua website ngoài. Đây là dấu hiệu của một cuộc tấn công phishing.`,
        },
        {
            id: 45,
            type: "short",
            title: "EVN",
            datum: `EVN thông báo: Tài khoản điện của Quý khách mã số EVN-2025-1234 đã bị tạm ngưng dịch vụ do chưa thanh toán hóa đơn tháng 3/2025.
  Để tránh việc cắt điện, Quý khách vui lòng thanh toán số tiền 1.200.000 VNĐ qua cổng thanh toán tại https://evn-paycheck-online.com và hoàn tất thủ tục trước 18h ngày 10/04/2025.
  Mọi thắc mắc vui lòng liên hệ tổng đài hỗ trợ: 19001122.`,
            answer: ["https://evn-paycheck-online.com"],
            description: `EVN không yêu cầu khách hàng truy cập vào link ngoài ứng dụng hoặc website chính thức. Thông báo về thanh toán sẽ được thực hiện qua các kênh chính thức như app EVN, không qua link giả mạo.`,
        },
        {
            id: 46,
            type: "short",
            title: "Bamboo Airways",
            datum: `Chúc mừng Quý khách, bạn đã nhận được voucher miễn phí 1 vé máy bay khứ hồi trong nước trị giá 2 triệu VNĐ từ chương trình “Khách Hàng Thân Thiết Bamboo Airways”. Để nhận voucher, vui lòng truy cập vào đường link https://bamboo-airways-reward2025.com và nhập mã số đơn hàng #BA-78899 để xác minh.
  Phần thưởng có giá trị đến hết ngày 30/06/2025.`,
            answer: ["https://bamboo-airways-reward2025.com"],
            description: `Bamboo Airways không yêu cầu khách hàng nhập mã số qua website lạ. Mọi thông báo về voucher đều được gửi qua ứng dụng chính thức hoặc qua email.`,
        },
        {
            id: 47,
            type: "short",
            title: "Vietcombank",
            datum: `Vietcombank xin thông báo:
  Tài sản của Quý khách có dấu hiệu hoạt động bất thường trong những ngày qua, và hệ thống đã tạm khóa một số chức năng nhằm bảo vệ tài sản của Quý khách.
  Để mở khóa tài khoản và thực hiện các giao dịch, Quý khách vui lòng truy cập vào đường link https://vietcombank-security-update2025.com và nhập mã OTP đã được gửi về điện thoại.
  Quý khách cần hoàn tất xác minh trước 20h ngày hôm nay để tránh việc khóa tài khoản vĩnh viễn.`,
            answer: [
                "Tài sản của Quý khách",
                "https://vietcombank-security-update2025.com",
            ],
            description: `Vietcombank không yêu cầu xác minh qua đường link lạ và không bao giờ dùng cụm từ "khóa tài khoản vĩnh viễn" trong thông báo bảo mật. Việc này cùng với lỗi dùng từ “tài sản của Quý khách” là dấu hiệu lừa đảo.`,
        },
        {
            id: 48,
            type: "choice",
            data_type: ["Giao dịch an toàn", "Giao dịch rủi ro"],
            choice: [
                {
                    content: "Giao dịch qua app ngân hàng chính thức",
                    answer: true,
                },
                {
                    content: "Chuyển tiền cho tài khoản cá nhân yêu cầu phí",
                    answer: false,
                },
                {
                    content: "Mua hàng thanh toán qua ShopeePay",
                    answer: true,
                },
                {
                    content: "Chuyển khoản vào tài khoản cá nhân lạ",
                    answer: false,
                },
            ],
        },
        {
            id: 49,
            type: "choice",
            data_type: ["Nội dung chat đáng tin cậy", "Nội dung chat nghi ngờ"],
            choice: [
                {
                    content: "Tin nhắn yêu cầu xác nhận trên app ngân hàng",
                    answer: true,
                },
                {
                    content: "Tin nhắn yêu cầu chuyển khoản trước qua Zalo",
                    answer: false,
                },
                {
                    content: "Tin nhắn báo giao dịch thành công từ ứng dụng",
                    answer: true,
                },
                {
                    content: "Tin nhắn mời đầu tư với lợi nhuận cao",
                    answer: false,
                },
            ],
        },
        {
            id: 50,
            type: "choice",
            data_type: ["Website đáng tin", "Website rủi ro cao"],
            choice: [
                {
                    content:
                        "Website có địa chỉ rõ ràng, bảo mật SSL, hotline hỗ trợ",
                    answer: true,
                },
                {
                    content:
                        "Website chỉ có số điện thoại liên hệ, không địa chỉ công ty",
                    answer: false,
                },
                {
                    content: "Website có chứng chỉ xác thực tổ chức (OV SSL)",
                    answer: true,
                },
                {
                    content:
                        "Website cung cấp voucher giảm giá quá lớn mà không điều kiện",
                    answer: false,
                },
            ],
        },
    ],
};

export default gameData;
