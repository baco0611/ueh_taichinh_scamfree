import React, { useEffect, useState } from 'react'
import volume from "../asset/volume.png"
import mute from "../asset/mute.png"
import { useAudio } from '../../../context/AudioContext'
import "./GameTutorial.scss"
import tutorial from "./img/tutorial.png"
import { useNavigate } from 'react-router-dom'

export default function GameTutorial() {
    const { isAudioOn, setIsAudioOn } = useAudio()
    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0)

        const userInfo = sessionStorage.getItem("userInfo");
        if(!userInfo)
            navigate("/game")
    }, [])

    const handleConfirm = () => {
        const userInfo = sessionStorage.getItem("userInfo");
    
        if (!userInfo) {
          Swal.fire({
            icon: "warning",
            title: "Bạn chưa đăng nhập!",
            text: "Hãy quay lại để nhập thông tin trước khi bắt đầu.",
            confirmButtonText: "Quay lại"
            }).then(() => {
                navigate("/game");
            });
        } else {
            navigate("/game/play"); // 👈 hoặc trang tiếp theo bạn muốn
        }
    };

    return (
        <div className='game game-tutorial page-wrapper'>
            <button className='audio' onClick={() => setIsAudioOn(!isAudioOn)}>
            {
                isAudioOn 
                &&
                <img src={volume}/>
                ||
                <img src={mute} style={{opacity: "0.4"}}/>
            }
            </button>

            <div className='tutorial-content'>
                <p><span>Thành phố không ngủ - nơi tiền bạc có thể tan biến chỉ trong một cái nháy mắt!</span>
                    <br/>Bạn bước vào một thế giới đầy rẫy cơ hội, nhưng cũng tràn ngập những cạm bẫy tài chính tinh vi. Những kẻ lừa đảo ẩn mình khắp nơi – từ những cuộc gọi "hời không tưởng", tin nhắn trúng thưởng đến những lời mời đầu tư béo bở. Một quyết định sai lầm có thể khiến bạn mất trắng!</p>
                <p><span>Nhiệm vụ của bạn:</span> Trở thành một bậc thầy sinh tồn tài chính, giải mã những chiêu trò lừa đảo và bảo vệ túi tiền của mình qua 5 vòng thử thách!</p>
                <p><span>Cách chơi:</span> 
                    <br/>Mỗi vòng có 10 tình huống thực tế – bạn phải chọn phương án thông minh để không bị mắc bẫy.
                    <br/>Trả lời đúng, bạn nhận 1 Safecoin, tích lũy được 8/10 Safecoin, bạn được mở khóa vòng tiếp theo. Ngược lại, bạn chọn nút quay lại để thực hiện lại vòng chơi. Càng tích lũy nhiều xu, bạn càng chứng tỏ bản lĩnh tài chính của mình!</p>
                <p>Bạn có đủ khôn ngoan để không trở thành "con mồi" trong thành phố này?</p>
            </div>

            <button onClick={handleConfirm}>
                <img className='button' src={tutorial}/>
            </button>
        </div>
    )
}
