import axios from "axios";
import Swal from "sweetalert2"
import { postData } from "../../utils/apiClient";

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID
const USER_ID = import.meta.env.VITE_USER_ID
const EMAILJS_URL = import.meta.env.VITE_EMAILJS_URL
const APP_SCRIPT_URL = import.meta.env.VITE_APP_SCRIPT_URL

const onCheckData = (content) => {
    if(content == "" || content == null) {
        Swal.fire({
            title: "Không có dữ liệu",
            text: "Hãy nhập nội dung góp ý vào hộp thư bên dưới nhé ^^",
            icon: "error"
        });

        return false
    }

    return true
}

const onSubmit = async ({ e, content, setIsLoading, onReload }) => {
    // e.defaultPrevent()

    if(onCheckData(content)) {
        const now = new Date();
        const time = now.toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" });

        const emailData = {
            service_id: SERVICE_ID,
            template_id: TEMPLATE_ID,
            user_id: USER_ID, 
            template_params: {
                message: content
            }
        }
        
        const databaseData = {
            action: "create",
            sheet: "FEEDBACK",
            data: JSON.stringify([time, content]) // Không cần gửi time
        };

        setIsLoading(true)

        
        try {
            const emailSend = await postData("", EMAILJS_URL, "", emailData)
            if (emailSend.status !== 200) {
                throw new Error("Gửi email thất bại");
            }

            const response = await fetch(APP_SCRIPT_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: new URLSearchParams(databaseData)
            });

            const databaseUpdate = await response.json()
            console.log(databaseUpdate)

            if (databaseUpdate.status === "success") {
                Swal.fire({
                    title: "GÓP Ý THÀNH CÔNG",
                    text: "Cảm ơn bạn đã góp ý. Chúng mình trân trọng ý kiến đóng góp của bạn!",
                    icon: "success"
                });
            } else {
                throw new Error("Lưu vào Google Sheets thất bại");
            }
            onReload()

        } catch (error) {
            Swal.fire({
                title: "CÓ LỖI",
                text: "Vì một vài vấn đề kỹ thuật mà góp ý của bạn chưa được gửi đến chúng mình, vui lòng thử lại sau.",
                icon: "error"
            });
            setIsLoading(false)
        }
    }
}

export {
    onCheckData,
    onSubmit,
}