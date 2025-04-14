import React, { useEffect } from 'react'
import "./GameLegend.scss"
import surface from "./img/surface.png"
import level1 from "./img/level1.png"
import level2 from "./img/level2.png"
import level3 from "./img/level3.png"
import { useAudio } from '../../../context/AudioContext'
import volume from "../asset/volume.png"
import mute from "../asset/mute.png"
import confirm from "../GameIntro/img/confirm.png"
import { Link, useNavigate } from 'react-router-dom'

export default function GameLegend() {
    const total = JSON.parse(sessionStorage.getItem("total"))
    const { isAudioOn, setIsAudioOn } = useAudio()
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

    return (
        <div className='game-legend'>
            <button className='audio' onClick={() => setIsAudioOn(!isAudioOn)}>
            {
                isAudioOn 
                &&
                <img src={volume}/>
                ||
                <img src={mute} style={{opacity: "0.4"}}/>
            }
            </button>
            <img className='surface' src={surface}/>
            {
                total >= 48 &&
                <img className='level' src={level3}/> ||
                total >= 35 &&
                <img className='level' src={level2}/> ||
                total >= 20 &&
                <img className='level' src={level1}/>
            }
            <Link to={"/game/end"} >
                <img className='button' src={confirm}/>
            </Link>
        </div>
    )
}
