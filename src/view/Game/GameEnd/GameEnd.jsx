import React, { useEffect, useState } from 'react'
import "./GameEnd.scss"
import mute from "../asset/mute.png"
import volume from "../asset/volume.png"
import { useAudio } from '../../../context/AudioContext'
import "animate.css"
import button from "./button.png"
import { Link, useNavigate } from 'react-router-dom'

export default function GameEnd() {
    const { isAudioOn, setIsAudioOn } = useAudio()
    const [ isSaving, setIsSaving ] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        const userInfo = sessionStorage.getItem("userInfo")
    
        if (!userInfo) {
            navigate("/game")
            return
        }
    
        const gameProgress = JSON.parse(sessionStorage.getItem("round")) || {}
    
        // 🔍 Kiểm tra đủ 5 round đều status === true
        const allRoundsCompleted = [1,2,3,4,5].every(i => {
            const roundKey = `round${i}`
            return gameProgress[roundKey] && gameProgress[roundKey].status === true
        })
    
        // ⛔ Nếu chưa hoàn thành hết → chuyển đến round đầu tiên chưa xong
        if (!allRoundsCompleted) {
            const firstUnplayed = [1,2,3,4,5].find(i => {
                const roundKey = `round${i}`
                return !gameProgress[roundKey] || gameProgress[roundKey].status === false
            })
            if (firstUnplayed && roundId > firstUnplayed) {
                navigate(`/game/main/${firstUnplayed}`)
            }
        }
    }, [])

    useEffect(() => {
        const userInfo = JSON.parse(sessionStorage.getItem("userInfo"))
        const total = JSON.parse(sessionStorage.getItem("total"))

        // Chỉ gửi nếu chưa gửi
        if (userInfo && total != null && !sessionStorage.getItem("submittedGame")) {
            const formData = new URLSearchParams()
            formData.append("action", "submitGame")
            formData.append("name", userInfo.name)
            formData.append("studentCode", userInfo.studentCode)
            formData.append("score", total)

            fetch("https://script.google.com/macros/s/AKfycby2usahCcCkdTRVptec2gMxh-QXqDVYMggpwJDmiQkG8CAkGv2X57HuJkSIdhW2YMafiw/exec", {
                method: "POST",
                mode: "no-cors",
                body: formData.toString()
            })
            
            setIsSaving(false)
            sessionStorage.removeItem("userInfo")
            sessionStorage.removeItem("total")
            sessionStorage.removeItem("round")
        } else {
            setIsSaving(false)
        }
    }, [])
    
    return (
        <div className='game-end'>
            <button className='audio' onClick={() => setIsAudioOn(!isAudioOn)}>
            {
                isAudioOn 
                &&
                <img src={volume}/>
                ||
                <img src={mute} style={{opacity: "0.4"}}/>
            }
            </button>
            <div className='main-content'>
                <h1>Lời kết</h1>
                <p>Chúc mừng bạn đã vượt qua toàn bộ thử thách của <span>“Gen Z - Scam free”</span>. Mong rằng trò chơi đã giúp bạn có thêm nhiều kinh nghiệm và chúc bạn sẽ luôn tỉnh táo khi gặp các trường hợp lừa đảo nhé.</p>
                <p>Hãy luôn theo dõi <span>“Sổ tay phòng chống lừa đảo tài chính”</span> để cập nhật liên tục các hình thức lừa đảo mới nhất nha.</p>
            </div>
            <div className='update'>
            {
                isSaving &&
                <p
                    className='animate__jello animate__animated animate__fast animate__infinite'
                >Kết quả đang được lưu...</p>
                 ||
                <Link to={"/game"} >
                    <img className='button' src={button}/>
                </Link>
            }
            </div>
        </div>
    )
}
