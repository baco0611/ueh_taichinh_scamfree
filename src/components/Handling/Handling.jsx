import React, { useEffect, useState } from "react";
import "./Handling.scss";

export default function Handling({ message }) {
    const [displayText, setDisplayText] = useState("");
    const [index, setIndex] = useState(0);
    const text = message || "VUI LÒNG ĐỢI TRONG GIÂY LÁT";

    useEffect(() => {
        setDisplayText(""); // Reset khi message thay đổi
        setIndex(0);
    }, [message]);

    useEffect(() => {
        if (index < text.length) {
            const timeout = setTimeout(() => {
                setDisplayText((prev) => prev + text[index]);
                setIndex((prev) => prev + 1);
            }, 100); // Gõ từng ký tự mỗi 100ms

            return () => clearTimeout(timeout);
        } else {
            setTimeout(() => {
                setDisplayText(""); // Xóa nội dung sau khi gõ xong
                setIndex(0);
            }, 1000); // Chờ 1 giây trước khi lặp lại
        }
    }, [index, text]);

    return (
        <div id="handling">
            <span className="loader"></span>
            <h1>{displayText}<span className="cursor">|</span></h1>
        </div>
    );
}
